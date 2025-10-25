// src/controllers/admin/users.controller.js
const prisma = require('../../prismaClient');

async function listUsers(req, res) {
  const page = Math.max(1, parseInt(req.query.page || '1'));
  const perPage = Math.min(100, parseInt(req.query.limit || '20'));
  const search = req.query.q || '';

  const where = search
    ? { OR: [{ name: { contains: search, mode: 'insensitive' } }, { email: { contains: search, mode: 'insensitive' } }] }
    : {};

  const [total, users] = await Promise.all([
    prisma.user.count({ where }),
    prisma.user.findMany({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, role: true, createdAt: true }
    })
  ]);

  res.json({ page, perPage, total, users });
}

async function getUser(req, res) {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id }, include: { doctor: true, patient: true } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

async function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  // wrap in transaction if cascading deletes or related records
  await prisma.user.delete({ where: { id } });
  res.status(204).send();
}

async function updateUserRole(req, res) {
  const id = parseInt(req.params.id);
  const { role } = req.body;
  const updated = await prisma.user.update({ where: { id }, data: { role } });
  res.json(updated);
}

module.exports = { listUsers, getUser, deleteUser, updateUserRole };
