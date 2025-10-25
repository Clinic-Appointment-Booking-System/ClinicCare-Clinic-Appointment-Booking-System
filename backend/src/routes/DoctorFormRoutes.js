import express from "express";
import multer from "multer";
import { addDoctor, getAllDoctors } from "../controllers/doctorController.js";

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", getAllDoctors);
router.post("/", upload.single("image"), addDoctor);

export default router;
