const collectionData = [
  { name: 'Trending in Jakarta', link: '/restaurants/jakarta' },
  { name: 'Menu Sarapan', link: '/cuisine/breakfast' },
  { name: 'Makanan Indonesia', link: '/cuisine/indonesia' },
  { name: 'Makanan Sehat', link: '/cuisine/healthy' },
];

const restaurantData = [
  {
    id: 1,
    name: 'JPW Cafe & Resto',
    rating: '4.6',
    avg_price: 35,
    distance: '3.2km',
    location: 'Sukmajaya, Depok',
    tags: ['Kopi', 'Indonesia'],
    type: 'Fine Dining',
    open_time: 'Selasa, 10.00 - 22.00',
  },
  {
    id: 2,
    name: 'Goobne',
    rating: '4.4',
    avg_price: 12,
    distance: '4.8km',
    location: 'Pantai Indah Kapuk, Jakarta',
    tags: ['Korea', 'Makanan Sehat'],
    type: 'Burger',
    open_time: 'Rabu, 08.00 - 21.00',
  },
  {
    id: 3,
    name: 'Golden Lamian',
    rating: '4.2',
    avg_price: 15,
    distance: '5.2km',
    location: 'Senayan City, Senayan, Jakarta',
    tags: ['Bakmi', 'Chinese', 'Cepat Saji'],
    type: 'Fine Dining',
    open_time: 'Senin, 08.00 - 22.00',
  },
  {
    id: 4,
    name: 'Afterhour',
    rating: '3.7',
    avg_price: 8,
    distance: '3.2km',
    location: 'Sarinah Building, Thamrin, Jakarta',
    tags: ['GrillHouse', 'Itali'],
    type: 'Burger',
    open_time: 'Kamis, 10.00 - 22.00',
  },
  {
    id: 5,
    name: 'Ecology Bistro & Lounge',
    rating: '4.1',
    avg_price: 21,
    distance: '4.8km',
    location: 'Pantai Indah Kapuk, Jakarta',
    tags: ['Western'],
    type: 'Fine Dining',
    open_time: 'Jumat, 10.00 - 23.59',
  },
  {
    id: 6,
    name: "Melly's Garden",
    rating: '4.0',
    avg_price: 30,
    distance: '1.8km',
    location: 'Menteng, Jakarta',
    tags: ['Jawa', 'Indonesia', 'Western'],
    type: 'Fine Dining',
    open_time: 'Minggu, 08.00 - 21.00',
  },
  {
    id: 7,
    name: 'Sushi Express',
    rating: '4.5',
    avg_price: 25,
    distance: '2.5km',
    location: 'Gandaria City, Kebayoran Lama, Jakarta',
    tags: ['Sushi', 'Japanese'],
    type: 'Sushi',
    open_time: 'Selasa, 09.00 - 22.30',
  },
  {
    id: 8,
    name: 'Pizza Haven',
    rating: '4.3',
    avg_price: 18,
    distance: '6.5km',
    location: 'Kemang, Jakarta Selatan',
    tags: ['Pizza', 'Italian'],
    type: 'Pizza',
    open_time: 'Rabu, 08.00 - 21.30',
  },
  {
    id: 9,
    name: 'Sushi Palace',
    rating: '4.7',
    avg_price: 30,
    distance: '2.0km',
    location: 'Plaza Senayan, Jakarta',
    tags: ['Sushi', 'Japanese'],
    type: 'Sushi',
    open_time: 'Minggu, 09.00 - 23.00',
  },
  {
    id: 10,
    name: 'Tokyo Sushi Bar',
    rating: '4.5',
    avg_price: 25,
    distance: '3.5km',
    location: 'Pacific Place, Jakarta',
    tags: ['Sushi', 'Japanese'],
    type: 'Sushi',
    open_time: 'Senin, 08.00 - 21.30',
  },
  {
    id: 11,
    name: 'Sakura Sushi House',
    rating: '4.8',
    avg_price: 35,
    distance: '1.8km',
    location: 'Kemang, Jakarta Selatan',
    tags: ['Sushi', 'Japanese'],
    type: 'Sushi',
    open_time: 'Kamis, 11.00 - 23.59',
  },
  {
    id: 12,
    name: 'Burger Tek',
    rating: '4.8',
    avg_price: 10,
    distance: '1.0km',
    location: 'Depok Town Square',
    tags: ['Street Food', 'Indonesia'],
    type: 'Burger',
  },
  {
    id: 13,
    name: 'Healthy Bowls',
    rating: '4.6',
    avg_price: 20,
    distance: '3.5km',
    location: 'Kuningan City, Jakarta',
    tags: ['Salad', 'Healthy'],
    type: 'Fine Dining',
    open_time: 'Jumat, 09.00 - 22.00',
  },
  {
    id: 14,
    name: 'Ramen Delight',
    rating: '4.2',
    avg_price: 22,
    distance: '4.0km',
    location: 'Plaza Indonesia, Jakarta',
    tags: ['Ramen', 'Japanese'],
    type: 'Fine Dining',
    open_time: 'Sabtu, 10.00 - 22.00',
  },
  {
    id: 15,
    name: 'Veggie Delight',
    rating: '4.7',
    avg_price: 15,
    distance: '2.0km',
    location: 'Cilandak Town Square, Depok',
    tags: ['Vegetarian', 'Healthy'],
    type: 'Fine Dining',
    open_time: 'Selasa, 09.00 - 22.00',
  },
];

const reviewsData = [
  {
    imgUrl: 'url_gambar_restoran1',
    name: 'Cookie',
    occupation: 'Kritikus Kuliner',
    totalReviews: 128,
    followers: 543,
    title: 'Pengalaman Kuliner Menggoda',
    body: 'Restoran ini tidak hanya menyajikan hidangan lezat tetapi juga memberikan pengalaman kuliner yang tak terlupakan. Dengan pelayanan yang ramah dan atmosfer yang menyenangkan, Santap Lezat pantas menjadi pilihan utama bagi para pecinta makanan.',
  },
  {
    imgUrl: 'url_gambar_restoran2',
    name: 'Hyein',
    occupation: 'Food Blogger',
    totalReviews: 95,
    followers: 789,
    title: 'Kelezatan yang Terjaga',
    body: 'Rasa Sejati selalu berhasil menjaga kualitas makanan mereka. Setiap kunjungan saya dijamin dengan cita rasa yang konsisten dan bahan-bahan berkualitas tinggi. Dari hidangan utama hingga hidangan penutup, semuanya memanjakan lidah.',
  },
  {
    imgUrl: 'url_gambar_restoran3',
    name: 'Ditto',
    occupation: 'Ahli Kuliner Lokal',
    totalReviews: 72,
    followers: 432,
    title: 'Sentuhan Khas Daerah',
    body: 'Berkah Rasa berhasil menyajikan hidangan khas daerah dengan sentuhan modern yang mengagumkan. Setiap suapannya membawa nostalgia kampung halaman, menjadikan pengalaman makan di sini begitu istimewa.',
  },
];

export { restaurantData, collectionData, reviewsData
};
