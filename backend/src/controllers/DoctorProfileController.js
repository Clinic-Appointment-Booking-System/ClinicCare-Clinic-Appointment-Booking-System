import prisma from "../../prismaClient.js";

// GET all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET doctor by ID
export const getDoctorById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await prisma.doctor.findUnique({ where: { id: Number(id) } });
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE doctor
export const createDoctor = async (req, res) => {
  const { name, specialization, experience, contact, email, available, imageUrl } = req.body;
  try {
    const doctor = await prisma.doctor.create({
      data: { name, specialization, experience, contact, email, available, imageUrl },
    });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE doctor
export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { name, specialization, experience, contact, email, available, imageUrl } = req.body;
  try {
    const doctor = await prisma.doctor.update({
      where: { id: Number(id) },
      data: { name, specialization, experience, contact, email, available, imageUrl },
    });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE doctor
export const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.doctor.delete({ where: { id: Number(id) } });
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
