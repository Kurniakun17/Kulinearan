import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { name, location } = req.query;
    const data = await prisma.restaurants.findMany({
      where: { name: { contains: name }, location: { contains: location } },
      include: { categories: true },
    });

    res.status(200).json({ data });
  } else if (req.method === 'POST') {
  }
}
