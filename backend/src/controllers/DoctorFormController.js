import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
};

export const addDoctor = async (req, res) => {
  try {
    const { fullName, specialization, experience, phone, email, availability, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const doctor = await prisma.doctor.create({
      data: {
        fullName,
        specialization,
        experience: parseInt(experience),
        phone,
        email,
        availability,
        description,
        imageUrl,
      },
    });

    res.status(201).json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create doctor" });
  }
};
