

const data = [
    {
    id: 1,
    title: "Exciting Adventure in the Mountains",
    description: "Embark on a thrilling journey through the majestic mountains. Experience the beauty of nature and conquer new heights!",
    price: 120,
    coverImg: "https://source.unsplash.com/600x400/?mountains",
    stats: {
      rating: 4.8,
      reviewCount: 15
    },
    location: "In-person",
    openSpots: 3
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    description: "Unlock the secrets of successful digital marketing. Learn strategies to boost your online presence and reach a wider audience.",
    price: 80,
    coverImg: "https://source.unsplash.com/600x400/?marketing",
    stats: {
      rating: 4.5,
      reviewCount: 12
    },
    location: "Online",
    openSpots: 5
  },
  {
    id: 3,
    title: "Art Exhibition: Colors of Expression",
    description: "Immerse yourself in a world of vibrant colors and artistic expression. Join us for an evening of creativity and inspiration.",
    price: 25,
    coverImg: "https://source.unsplash.com/600x400/?art",
    stats: {
      rating: 4.9,
      reviewCount: 20
    },
    location: "In-person",
    openSpots: 0
  },
  {
    id: 4,
    title: "Cooking Class: Culinary Delights",
    description: "Learn the art of cooking from renowned chefs. Discover new recipes and savor the flavors of exquisite dishes.",
    price: 60,
    coverImg: "https://source.unsplash.com/600x400/?cooking",
    stats: {
      rating: 4.7,
      reviewCount: 18
    },
    location: "In-person",
    openSpots: 2
  },
  {
    id: 5,
    title: "Fitness Bootcamp: Shape Your Body",
    description: "Join our fitness bootcamp to achieve your fitness goals. Train with expert instructors and transform your body.",
    price: 90,
    coverImg: "https://source.unsplash.com/600x400/?fitness",
    stats: {
      rating: 4.6,
      reviewCount: 14
    },
    location: "In-person",
    openSpots: 4
  },
  {
    id: 6,
    title: "Photography Workshop: Capturing Moments",
    description: "Enhance your photography skills with our workshop. Capture stunning moments and unleash your creative potential.",
    price: 40,
    coverImg: "https://source.unsplash.com/600x400/?photography",
    stats: {
      rating: 4.8,
      reviewCount: 16
    },
    location: "In-person",
    openSpots: 1
  },
  {
    id: 7,
    title: "Yoga Retreat: Mindful Relaxation",
    description: "Immerse yourself in a yoga retreat for mindful relaxation. Find balance and tranquility in the midst of serene surroundings.",
    price: 100,
    coverImg: "https://source.unsplash.com/600x400/?yoga",
    stats: {
      rating: 4.9,
      reviewCount: 22
    },
    location: "In-person",
    openSpots: 0
  },
  {
    id: 8,
    title: "Tech Innovation Summit",
    description: "Explore the latest technological innovations at our summit. Connect with industry leaders and stay ahead in the tech world.",
    price: 120,
    coverImg: "https://source.unsplash.com/600x400/?technology",
    stats: {
      rating: 4.7,
      reviewCount: 19
    },
    location: "Online",
    openSpots: 3
  },
  {
    id: 9,
    title: "Concert Under the Stars",
    description: "Enjoy a magical night of music under the stars. Experience soulful performances and create lasting memories.",
    price: 55,
    coverImg: "https://source.unsplash.com/600x400/?music",
    stats: {
      rating: 4.5,
      reviewCount: 17
    },
    location: "In-person",
    openSpots: 2
  },
  {
    id: 10,
    title: "Coding Bootcamp: Mastering Programming",
    description: "Join our coding bootcamp to master the art of programming. Enhance your skills and embark on a journey in software development.",
    price: 85,
    coverImg: "https://source.unsplash.com/600x400/?coding",
    stats: {
      rating: 4.8,
      reviewCount: 21
    },
    location: "Online",
    openSpots: 4
  },
  {
    id: 11,
    title: "Gardening Workshop: Green Thumb Mastery",
    description: "Learn the secrets of gardening and develop a green thumb. Cultivate beautiful plants and create your own oasis at home.",
    price: 30,
    coverImg: "https://source.unsplash.com/600x400/?gardening",
    stats: {
      rating: 4.6,
      reviewCount: 13
    },
    location: "In-person",
    openSpots: 1
  },
  {
    id: 12,
    title: "Language Learning Fiesta",
    description: "Dive into a language learning fiesta. Explore diverse languages, cultures, and connect with language enthusiasts.",
    price: 50,
    coverImg: "https://source.unsplash.com/600x400/?language",
    stats: {
      rating: 4.7,
      reviewCount: 20
    },
    location: "Online",
    openSpots: 5
  },
  {
    id: 13,
    title: "Entrepreneurship Masterclass",
    description: "Join our entrepreneurship masterclass and gain insights into building a successful business. Connect with experienced entrepreneurs and refine your business skills.",
    price: 110,
    coverImg: "https://source.unsplash.com/600x400/?business",
    stats: {
      rating: 4.9,
      reviewCount: 18
    },
    location: "Online",
    openSpots: 3
  },
  {
    id: 14,
    title: "Film Screening: Cinematic Delights",
    description: "Experience cinematic delights at our film screening event. Immerse yourself in compelling stories and celebrate the art of filmmaking.",
    price: 45,
    coverImg: "https://source.unsplash.com/600x400/?film",
    stats: {
      rating: 4.8,
      reviewCount: 16
    },
    location: "In-person",
    openSpots: 2
  },
  {
    id: 15,
    title: "Science Exploration Day",
    description: "Ignite your curiosity with a science exploration day. Engage in fascinating experiments and discover the wonders of science.",
    price: 65,
    coverImg: "https://source.unsplash.com/600x400/?science",
    stats: {
      rating: 4.7,
      reviewCount: 15
    },
    location: "In-person",
    openSpots: 4
  },
  {
    id: 16,
    title: "Book Club: Literary Conversations",
    description: "Join our book club for literary conversations. Dive into thought-provoking books and connect with fellow book enthusiasts.",
    price: 35,
    coverImg: "https://source.unsplash.com/600x400/?books",
    stats: {
      rating: 4.6,
      reviewCount: 14
    },
    location: "Online",
    openSpots: 1
  },
  {
    id: 17,
    title: "Fashion Show Extravaganza",
    description: "Witness a fashion show extravaganza showcasing the latest trends. Immerse yourself in the world of style and glamour.",
    price: 75,
    coverImg: "https://source.unsplash.com/600x400/?fashion",
    stats: {
      rating: 4.8,
      reviewCount: 19
    },
    location: "In-person",
    openSpots: 0
  },
  {
    id: 18,
    title: "Music Production Workshop",
    description: "Learn the art of music production in our workshop. Unleash your creativity and produce your own musical masterpieces.",
    price: 95,
    coverImg: "https://source.unsplash.com/600x400/?musicproduction",
    stats: {
      rating: 4.9,
      reviewCount: 22
    },
    location: "Online",
    openSpots: 3
  },
  {
    id: 19,
    title: "Travel Photography Expedition",
    description: "Embark on a travel photography expedition to capture breathtaking landscapes. Explore new destinations and hone your photography skills.",
    price: 55,
    coverImg: "https://source.unsplash.com/600x400/?travel",
    stats: {
      rating: 4.7,
      reviewCount: 17
    },
    location: "In-person",
    openSpots: 2
  },
  {
    id: 20,
    title: "AI and Robotics Symposium",
    description: "Delve into the world of artificial intelligence and robotics at our symposium. Connect with experts and explore the future of technology.",
    price: 130,
    coverImg: "https://source.unsplash.com/600x400/?airobotics",
    stats: {
      rating: 4.8,
      reviewCount: 18
    },
    location: "Online",
    openSpots: 5
  }
];

const section1Data = data.slice(0, 7); // Adjust the range based on your data
const section2Data = data.slice(7, 13);
const section3Data = data.slice(13);

// Export the split data
export { section1Data, section2Data, section3Data };