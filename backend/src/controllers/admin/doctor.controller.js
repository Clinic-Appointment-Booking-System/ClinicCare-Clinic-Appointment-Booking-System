const prisma = require('../../prismaClient');

// Get all doctors (with search & pagination)
exports.getAllDoctors = async (req, res) => {
  try {
    const { page = 1, limit = 10, q = '' } = req.query;
    const skip = (page - 1) * limit;

    const where = q
      ? {
          OR: [
            { user: { name: { contains: q, mode: 'insensitive' } } },
            { user: { email: { contains: q, mode: 'insensitive' } } },
          ],
        }
      : {};

    const [total, doctors] = await Promise.all([
      prisma.doctor.count({ where }),
      prisma.doctor.findMany({
        where,
        include: { user: true, specialization: true },
        skip: Number(skip),
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    res.json({ total, page: Number(page), doctors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching doctors' });
  }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { user: true, specialization: true, appointments: true },
    });
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching doctor details' });
  }
};

// Create new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, email, password, specializationId, description } = req.body;

    // Validate required fields
    if (!name || !email || !password || !specializationId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Hash password
    const hashed = await require('bcrypt').hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashed, // ✅ must match schema
        role: 'DOCTOR',
      },
    });

    // Create doctor record
    const doctor = await prisma.doctor.create({
      data: {
        userId: user.id,
        specializationId: Number(specializationId),
        description: description || null,
      },
    });

    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (err) {
    console.error('❌ Error creating doctor:', err);
    res.status(500).json({ error: 'Error creating doctor', details: err.message });
  }
};


// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { specializationId, description } = req.body;
    const updated = await prisma.doctor.update({
      where: { id: parseInt(req.params.id) },
      data: { specializationId, description },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Error updating doctor' });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.doctor.delete({ where: { id } });
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting doctor' });
  }
};
