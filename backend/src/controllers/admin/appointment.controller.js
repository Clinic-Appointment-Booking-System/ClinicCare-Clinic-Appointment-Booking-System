const prisma = require('../../prismaClient');

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const { status, doctorId, patientId } = req.query;
    const where = {};

    if (status) where.status = status;
    if (doctorId) where.doctorId = parseInt(doctorId);
    if (patientId) where.patientId = parseInt(patientId);

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        doctor: { include: { user: true } },
        patient: { include: { user: true } },
      },
      orderBy: { appointmentDate: 'desc' },
    });

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching appointments' });
  }
};

// Update appointment status
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const id = parseInt(req.params.id);

    const updated = await prisma.appointment.update({
      where: { id },
      data: { status },
    });

    // Optional: notify patient
    await prisma.notification.create({
      data: {
        userId: updated.patientId,
        appointmentId: id,
        message: `Your appointment has been updated to ${status}`,
      },
    });

    res.json({ message: 'Appointment updated successfully', updated });
  } catch (err) {
    res.status(500).json({ error: 'Error updating appointment status' });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    await prisma.appointment.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting appointment' });
  }
};

// Check doctor availability by date & time
exports.checkAvailability = async (req, res) => {
  try {
    // controllers/admin/appointment.controller.js
      const { doctorId, date, time } = req.query;
      const doctorIdInt = parseInt(doctorId);

      const selectedDate = new Date(date);

      // Define start and end of the selected date
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const existingAppointment = await prisma.appointment.findFirst({
        where: {
          doctorId: doctorIdInt,
          appointmentDate: {
            gte: startOfDay,
            lte: endOfDay,
          },
          appointmentTime: time,
          status: {
            not: "CANCELLED",
          },
        },
      });

      if (existingAppointment) {
        return res.json({
          available: false,
          message: "Doctor is NOT available for this time slot",
        });
      }

      return res.json({
        available: true,
        message: "Doctor is available for this time slot",
      });

  } catch (err) {
    console.error('Error checking availability:', err);
    res.status(500).json({ error: 'Error checking doctor availability', details: err.message });
  }
};

