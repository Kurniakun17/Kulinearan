const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedRestaurants() {
  const dataRestaurant = [
    {
      name: 'Ramen Ya!',
      rating: 4.9,
      avgPrice: 30000,
      location: 'Pantai Indah Kapuk, Jakarta',
      openTime: 'Setiap hari, 08.00 - 21.00',
      contact: '+62895342958390',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Goobne',
      rating: 4.4,
      avgPrice: 12000,
      location: 'Pantai Indah Kapuk, Jakarta',
      openTime: 'Rabu, 08.00 - 21.00',
      contact: '+62895342958390',
      categories: {
        connect: {
          categoryName: 'Burger',
        },
      },
    },
    {
      name: 'Golden Lamian',
      rating: 4.2,
      avgPrice: 15000,
      location: 'Senayan City, Senayan, Jakarta',
      contact: '+62895342958390',
      openTime: 'Senin, 08.00 - 22.00',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Afterhour',
      rating: 3.7,
      avgPrice: 8000,
      location: 'Sarinah Building, Thamrin, Jakarta',
      contact: '+62895342958390',
      openTime: 'Kamis, 10.00 - 22.00',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Ecology Bistro & Lounge',
      rating: 4.1,
      avgPrice: 21000,
      location: 'Pantai Indah Kapuk, Jakarta',
      contact: '+62895342958390',
      openTime: 'Jumat, 10.00 - 23.59',
      categories: {
        connect: {
          categoryName: 'Burger',
        },
      },
    },
    {
      name: "Melly's Garden",
      rating: 4.0,
      avgPrice: 30000,
      location: 'Menteng, Jakarta',
      contact: '+62895342958390',
      openTime: 'Minggu, 08.00 - 21.00',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Sushi Express',
      rating: 4.5,
      avgPrice: 25000,
      location: 'Gandaria City, Kebayoran Lama, Jakarta',
      contact: '+62895342958390',
      openTime: 'Selasa, 09.00 - 22.30',
      categories: {
        connect: {
          categoryName: 'Sushi',
        },
      },
    },
    {
      name: 'Pizza Haven',
      rating: 4.3,
      avgPrice: 18000,
      location: 'Kemang, Jakarta Selatan',
      contact: '+62895342958390',
      openTime: 'Rabu, 08.00 - 21.30',
      categories: {
        connect: {
          categoryName: 'Pizza',
        },
      },
    },
    {
      name: 'Sushi Palace',
      rating: 4.7,
      avgPrice: 30000,
      location: 'Plaza Senayan, Jakarta',
      contact: '+62895342958390',
      openTime: 'Minggu, 09.00 - 23.00',
      categories: {
        connect: {
          categoryName: 'Sushi',
        },
      },
    },
    {
      name: 'Tokyo Sushi Bar',
      rating: 4.5,
      avgPrice: 25000,
      location: 'Pacific Place, Jakarta',
      contact: '+62895342958390',
      openTime: 'Senin, 08.00 - 21.30',
      categories: {
        connect: {
          categoryName: 'Sushi',
        },
      },
    },
    {
      name: 'Sakura Sushi House',
      rating: 4.8,
      avgPrice: 35000,
      location: 'Kemang, Jakarta Selatan',
      contact: '+62895342958390',
      openTime: 'Kamis, 11.00 - 23.59',
      categories: {
        connect: {
          categoryName: 'Sushi',
        },
      },
    },
    {
      name: 'Burger Tek',
      rating: 4.8,
      avgPrice: 10000,
      location: 'Depok Town Square',
      openTime: 'Kamis, 11.00 - 22.00',
      contact: '+62895342958390',
      categories: {
        connect: {
          categoryName: 'Burger',
        },
      },
    },
    {
      name: 'Healthy Bowls',
      rating: 4.6,
      avgPrice: 20000,
      location: 'Kuningan City, Jakarta',
      contact: '+62895342958390',
      openTime: 'Jumat, 09.00 - 22.00',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Ramen Delight',
      rating: 4.2,
      avgPrice: 22000,
      location: 'Plaza Indonesia, Jakarta',
      contact: '+62895342958390',
      openTime: 'Sabtu, 10.00 - 22.00',
      categories: {
        connect: {
          categoryName: 'Fine Dining',
        },
      },
    },
    {
      name: 'Veggie Delight',
      rating: 4.7,
      avgPrice: 15000,
      location: 'Cilandak Town Square, Depok',
      contact: '+62895342958390',
      openTime: 'Selasa, 09.00 - 22.00',
      categories: {
        connect: {
          categoryName: 'Burger',
        },
      },
    },
  ];

  dataRestaurant.map(async (item) => {
    await prisma.restaurants.create({
      data: item,
    });
  });
}

async function seedUsers() {
  await prisma.users.createMany({
    data: [
      { username: 'Kurnia', occupation: 'Influencer' },
      { username: 'Nia', occupation: 'Food Vlogger' },
      { username: 'Steven', occupation: 'Hamba Allah' },
    ],
  });
}

async function seedReviews() {
  await prisma.reviews.createMany({
    data: [
      {
        title: 'Pengalaman Kuliner Menggoda',
        body: 'Restoran ini tidak hanya menyajikan hidangan lezat tetapi juga memberikan pengalaman kuliner yang tak terlupakan. Dengan pelayanan yang ramah dan atmosfer yang menyenangkan, Santap Lezat pantas menjadi pilihan utama bagi para pecinta makanan.',
        rating: 4.8,
        authorId: '040e25ff-411d-43cc-ad05-82372fde01c6',
        restaurantId: 1,
        reviewId: 1,
      },
      {
        title: 'Kelezatan yang terjaga',
        body: 'Rasa Sejati selalu berhasil menjaga kualitas makanan mereka. Setiap kunjungan saya dijamin dengan cita rasa yang konsisten dan bahan-bahan berkualitas tinggi. Dari hidangan utama hingga hidangan penutup, semuanya memanjakan lidah.',
        rating: 4.8,
        authorId: '14815ceb-ee93-42b2-8a00-8ace7292ccb3',
        restaurantId: 1,
        reviewId: 2,
      },
    ],
  });
}

async function seedCategory() {
  await prisma.category.createMany({
    data: [
      { categoryName: 'Pizza' },
      { categoryName: 'Sushi' },
      { categoryName: 'Burger' },
      { categoryName: 'Fine Dining' },
    ],
  });
}

async function main() {
  seedCategory();
  seedUsers();
  seedReviews();
  seedRestaurants();
}

// main()
//   .then(() => console.log('done'))
//   .catch((err) => console.log(err));

(async () => {
  const restaurantData = await prisma.restaurants.findFirst({
    where: { restaurantId: 3 },
    include: { reviews: true },
  });

  let avgRating = 0;
  // console.log(restaurantData);
  restaurantData.reviews.forEach((item) => {
    avgRating += item.rating;
  });

  avgRating /= restaurantData.reviews.length;
  avgRating = parseFloat(avgRating.toFixed(1));

  const res = await prisma.restaurants.update({
    where: { restaurantId: 3 },
    data: { rating: avgRating },
  });

  console.log(res);
})();
