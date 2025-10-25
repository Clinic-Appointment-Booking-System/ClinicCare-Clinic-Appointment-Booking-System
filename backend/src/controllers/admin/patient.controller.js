const prisma = require('../../prismaClient');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany({
      include: { user: true, appointments: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching patients' });
  }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await prisma.patient.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        user: true,
        appointments: {
          include: { doctor: { include: { user: true } } },
        },
      },
    });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching patient details' });
  }
};

// Delete patient
exports.deletePatient = async (req, res) => {
  try {
    await prisma.patient.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting patient' });
  }
};
