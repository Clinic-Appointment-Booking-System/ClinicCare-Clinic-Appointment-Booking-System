const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");
const router = express.Router();

// ========================
// REGISTER USER
// ========================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, description, specializationId, phone, address } = req.body;

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "Email already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // or passwordHash, depending on your schema field
        role,
      },
    });

    // Create role-specific record
    if (role === "DOCTOR") {
      await prisma.doctor.create({
        data: {
          userId: user.id,
          specializationId: specializationId || null,
          description: description || null,
        },
      });
    } else if (role === "PATIENT") {
      await prisma.patient.create({
        data: {
          userId: user.id,
          phone: phone || null,
          address: address || null,
        },
      });
    }

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ========================
// LOGIN USER
// ========================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        Doctor: true,
        Patient: true,
      },
    });

    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    // Compare password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid email or password" });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send response
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ========================
// VERIFY TOKEN (Optional)
// ========================
router.get("/verify", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        Doctor: true,
        Patient: true,
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
