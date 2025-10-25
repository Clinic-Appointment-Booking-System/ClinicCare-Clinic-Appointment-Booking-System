import express from "express";
import multer from "multer";
import {
  addDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.post("/", upload.single("image"), addDoctor);
router.put("/:id", upload.single("image"), updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
