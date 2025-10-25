// src/controllers/auth.controller.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");

// ========================
// REGISTER USER
// ========================
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, description, specializationId, phoneNumber, address, age } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
        role,
      },
    });

    // Create role-specific record
    if (role === "DOCTOR") {
      await prisma.doctor.create({
        data: {
          userId: user.id,
          specializationId: specializationId || 1,
          description: description || null,
        },
      });
    } else if (role === "PATIENT") {
      await prisma.patient.create({
        data: {
          userId: user.id,
          phoneNumber: phoneNumber || null,
          address: address || null,
          age: age || null,
        },
      });
    }

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ========================
// LOGIN USER
// ========================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: { doctor: true, patient: true },
    });

    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ========================
// VERIFY TOKEN
// ========================
exports.verify = async (req, res) => {
  try {
    const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: { doctor: true, patient: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};
