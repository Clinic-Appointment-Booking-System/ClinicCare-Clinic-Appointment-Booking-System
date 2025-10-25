const express = require('express');
const { requireAuth, requireRole } = require('../middlewares/role.middleware');
const doctorCtrl = require('../controllers/admin/doctor.controller');
const appointmentCtrl = require('../controllers/admin/appointment.controller');
const patientCtrl = require('../controllers/admin/patient.controller');

const router = express.Router();

// Protect all routes
router.use(requireAuth, requireRole('ADMIN'));

// Doctor management
router.get('/doctors', doctorCtrl.getAllDoctors);
router.get('/doctors/:id', doctorCtrl.getDoctorById);
router.post('/doctors', doctorCtrl.createDoctor);
router.patch('/doctors/:id', doctorCtrl.updateDoctor);
router.delete('/doctors/:id', doctorCtrl.deleteDoctor);

// Appointment management
router.get('/appointments', appointmentCtrl.getAllAppointments);
router.patch('/appointments/:id/status', appointmentCtrl.updateStatus);
router.delete('/appointments/:id', appointmentCtrl.deleteAppointment);
router.get('/check-availability', appointmentCtrl.checkAvailability);

// Patient management
router.get('/patients', patientCtrl.getAllPatients);
router.get('/patients/:id', patientCtrl.getPatientById);
router.delete('/patients/:id', patientCtrl.deletePatient);

module.exports = router;
