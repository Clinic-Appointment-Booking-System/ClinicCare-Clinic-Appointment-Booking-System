// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.specialization.createMany({
    data: [
      { name: 'Cardiology' },
      { name: 'Neurology' },
      { name: 'Dermatology' },
      { name: 'Pediatrics' },
      { name: 'Oncology'},
      { name : 'Gynecology' },
      { name : 'Psychiatry' },
      { name : 'Radiology' },
      { name : 'Orthopedics' },
      { name : 'Gastroenterology' }
    ],
  });
  console.log('✅ Seeded Specializations');
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
  });
