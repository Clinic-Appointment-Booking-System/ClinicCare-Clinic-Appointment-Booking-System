import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany({ orderBy: { id: "asc" } });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await prisma.doctor.findUnique({ where: { id: Number(id) } });
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving doctor" });
  }
};

export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      experience,
      contact,
      email,
      available,
      address,
      hospital,
      qualification,
    } = req.body;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newDoctor = await prisma.doctor.create({
      data: {
        name,
        specialization,
        experience,
        contact,
        email,
        available,
        address,
        hospital,
        qualification,
        imageUrl,
      },
    });

    res.status(201).json(newDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add doctor" });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      specialization,
      experience,
      contact,
      email,
      available,
      address,
      hospital,
      qualification,
    } = req.body;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedDoctor = await prisma.doctor.update({
      where: { id: Number(id) },
      data: {
        name,
        specialization,
        experience,
        contact,
        email,
        available,
        address,
        hospital,
        qualification,
        ...(imageUrl && { imageUrl }),
      },
    });

    res.json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update doctor" });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.doctor.delete({ where: { id: Number(id) } });
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete doctor" });
  }
};
