export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Cold Drinks' | 'Bakery & Desserts';
  price: number;
  description: string;
  image: string;
  tags?: string[];
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  feedback: string;
  highlight: string;
}

export const CAFE_DATA = {
  brand: {
    name: 'MONSOON & MOCHA',
    tagline: 'Your little corner of coffee and calm.',
    subtext: 'Thoughtfully brewed coffee, freshly baked treats, and little moments worth slowing down for.',
    established: 'Est. 2024',
    city: 'Pune, Maharashtra',
  },
  contact: {
    address: 'Sample address, Koregaon Park, Pune, Maharashtra 411001',
    addressNote: 'Placeholder address for portfolio demonstration',
    hours: '9:00 AM – 10:00 PM (Monday to Sunday)',
    hoursShort: '9:00 AM – 10:00 PM Daily',
    phonePlaceholder: '+91 98765 43210',
    phoneDisplay: '+91 98XXX XXXXX (Replace with business phone)',
    emailPlaceholder: 'hello@monsoonandmocha.sample',
    emailDisplay: 'hello@monsoonandmocha.sample',
    instagramHandle: '@monsoonandmocha.cafe',
    whatsappNumber: '919876543210', // Configurable placeholder number
    whatsappPrefill: 'Hi! I\'d like to know more about Monsoon & Mocha.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Specialty+Coffee+Shop+Pune',
  },
  menu: [
    {
      id: 'item-1',
      name: 'Classic Cappuccino',
      category: 'Coffee',
      price: 160,
      description: 'Equal parts single-origin espresso, steamed velvety milk, and dense microfoam dusted with roasted cocoa nibs.',
      image: '/src/assets/images/gallery_latte_art_1791713621476.jpg',
      tags: ['Specialty Roast', 'House Favourite'],
      notes: 'Brewed with 100% Arabica washed beans from Chikmagalur estates.',
    },
    {
      id: 'item-2',
      name: 'Iced Spanish Latte',
      category: 'Cold Drinks',
      price: 220,
      description: 'Chilled espresso poured over sweetened condensed milk, fresh whole milk, and crystal ice cubes.',
      image: '/src/assets/images/gallery_iced_coffee_1791713665797.jpg',
      tags: ['Signature Cold', 'Sweet & Creamy'],
      notes: 'Slow-layered over crushed ice, served with a dusting of organic Ceylon cinnamon.',
    },
    {
      id: 'item-3',
      name: 'Dark Chocolate Mocha',
      category: 'Coffee',
      price: 210,
      description: 'Artisanal single-estate 70% dark chocolate melted into freshly pulled double espresso and textured milk.',
      image: '/src/assets/images/hero_monsoon_mocha_1791713515485.jpg',
      tags: ['Rich & Decadent', 'Artisanal Cocoa'],
      notes: 'Crafted with bean-to-bar dark chocolate sourced from southern Indian cacao growers.',
    },
    {
      id: 'item-4',
      name: 'Classic Cold Coffee',
      category: 'Cold Drinks',
      price: 180,
      description: 'Slow-brewed rich espresso blended with chilled creamy milk and a touch of raw cane sugar. Timeless & refreshing.',
      image: '/src/assets/images/gallery_iced_coffee_1791713665797.jpg',
      tags: ['Classic Brew', 'Summer Essential'],
      notes: 'Shaken till frothy, served crisp and refreshing.',
    },
    {
      id: 'item-5',
      name: 'Butter Croissant',
      category: 'Bakery & Desserts',
      price: 140,
      description: 'Traditional French viennoiserie laminated with Normandy butter, baked fresh every morning to a golden honeycomb flake.',
      image: '/src/assets/images/gallery_pastry_table_1791713631744.jpg',
      tags: ['Fresh Daily', 'French Butter'],
      notes: 'Baked fresh at 7:30 AM and 2:00 PM daily in small batches.',
    },
    {
      id: 'item-6',
      name: 'Chocolate Brownie',
      category: 'Bakery & Desserts',
      price: 150,
      description: 'Fudgy, dense Belgian chocolate square with a delicate crinkly top and finishing flakes of sea salt.',
      image: '/src/assets/images/menu_chocolate_brownie_1791713723680.jpg',
      tags: ['Warm & Fudgy', 'Sea Salt Finish'],
      notes: 'Best paired with a piping hot double espresso or pour-over.',
    },
    {
      id: 'item-7',
      name: 'Blueberry Cheesecake',
      category: 'Bakery & Desserts',
      price: 240,
      description: 'Creamy New York style baked cheesecake topped with compote made from wild tart blueberries on a toasted biscuit crust.',
      image: '/src/assets/images/gallery_pastry_table_1791713631744.jpg',
      tags: ['Chef Special', 'Wild Berry'],
      notes: 'Slow-baked in a water bath for an ultra-velvety, melt-in-the-mouth texture.',
    },
    {
      id: 'item-8',
      name: 'Classic Espresso',
      category: 'Coffee',
      price: 120,
      description: 'A concentrated 36g double shot extracted in 28 seconds, boasting a thick golden-hazelnut tiger crema and notes of toasted hazelnut.',
      image: '/src/assets/images/menu_classic_espresso_1791713735602.jpg',
      tags: ['Purist Favourite', 'Single Origin'],
      notes: 'Served alongside a small palate cleanser of sparkling mineral water.',
    },
  ] as MenuItem[],
  gallery: [
    {
      id: 'gal-1',
      title: 'Velvet Rosetta',
      subtitle: 'Artisanal Latte Craft',
      category: 'Latte Art',
      image: '/src/assets/images/gallery_latte_art_1791713621476.jpg',
    },
    {
      id: 'gal-2',
      title: 'Precision Extraction',
      subtitle: 'V60 Pour-over Method',
      category: 'Coffee Brewing',
      image: '/src/assets/images/story_barista_pour_1791713589872.jpg',
    },
    {
      id: 'gal-3',
      title: 'Morning Table',
      subtitle: 'Fresh Viennoiserie & Cheesecake',
      category: 'Fresh Pastries',
      image: '/src/assets/images/gallery_pastry_table_1791713631744.jpg',
    },
    {
      id: 'gal-4',
      title: 'The Rainy Window',
      subtitle: 'Cozy Nook on Monsoon Mornings',
      category: 'Café Interior',
      image: '/src/assets/images/hero_monsoon_mocha_1791713515485.jpg',
    },
    {
      id: 'gal-5',
      title: 'Midday Indulgence',
      subtitle: 'Sea Salt Fudgy Brownie & Coffee',
      category: 'Coffee & Desserts',
      image: '/src/assets/images/menu_chocolate_brownie_1791713723680.jpg',
    },
    {
      id: 'gal-6',
      title: 'Afternoon Slowness',
      subtitle: 'Sunlight Falling Across Oak Table',
      category: 'Café Ambiance',
      image: '/src/assets/images/gallery_sunlight_interior_1791713678003.jpg',
    },
  ] as GalleryItem[],
  features: [
    {
      id: 'feat-1',
      title: 'Thoughtfully Brewed',
      description: 'We source single-estate beans from shade-grown estates in the Western Ghats. Every roast profile and water temperature is dialled in to extract clean, vibrant floral notes and rich chocolate undertones.',
    },
    {
      id: 'feat-2',
      title: 'Freshly Baked',
      description: 'Our bakehouse works in quiet morning rhythm. Real butter, slow natural fermentation, and honest ingredients come together for pastries that shatter softly at first bite.',
    },
    {
      id: 'feat-3',
      title: 'Made for Slow Moments',
      description: 'Designed as an antidote to rush. Warm oak counters, rainy window seats, soft acoustic tunes, and no pressure to hurry your cup. Take your time, read a chapter, or simply listen to the rain.',
    },
  ],
  testimonials: [
    {
      id: 't-1',
      name: 'Ananya Sharma',
      role: 'Regular Morning Patron · Writer',
      highlight: 'The calmest place in the city during rains',
      feedback: 'The combination of their Iced Spanish Latte and rain beating against the broad glass windows is irreplaceable. Monsoon & Mocha feels like stepping into a peaceful European bistro nestled in Pune.',
    },
    {
      id: 't-2',
      name: 'Vikram Joshi',
      role: 'Specialty Coffee Enthusiast',
      highlight: 'Serious coffee with zero pretension',
      feedback: 'You can tell immediately that their baristas respect the beans. The double espresso has genuine sweetness and tiger-striped crema. The butter croissant is legitimately flaky.',
    },
    {
      id: 't-3',
      name: 'Rhea Kulkarni',
      role: 'Architect & Designer',
      highlight: 'Exceptional ambiance & craftsmanship',
      feedback: 'From the earthy ceramic mugs to the thoughtful warm lighting, every corner is intentional. It is my go-to spot for quiet sketching and catching up with dear friends.',
    },
  ] as TestimonialItem[],
};
