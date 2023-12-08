import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, body, authorId, rating, restaurantId } = req.body;
      const data = await prisma.reviews.create({
        data: {
          title,
          body,
          rating,
          restaurantId,
          authorId,
        },
        include: { author: true },
      });

      const restaurantData = await prisma.restaurants.findFirst({
        where: { restaurantId },
        include: { reviews: true },
      });

      let avgRating = 0;
      restaurantData.reviews.map((item) => {
        avgRating += item.rating;
      });

      avgRating /= restaurantData.reviews.length;
      avgRating = parseFloat(avgRating.toFixed(1));

      await prisma.users.update({
        where: { userId: authorId },
        data: { totalReviews: { increment: 1 } },
      });

      await prisma.restaurants.update({
        where: { restaurantId },
        data: { rating: avgRating, totalReviews: { increment: 1 } },
      });

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
    }
  }
}
