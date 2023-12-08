import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { name: restaurantName } = req.query;
  const data = await prisma.restaurants.findFirst({
    where: { name: restaurantName },
    include: {
      categories: true,
      reviews: { include: { author: true } },
    },
  });

  res.status(200).json({ data });
}
