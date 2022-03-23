import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/garlic_OdweyeApz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588904189",
    isLiked: false,
    title: "Garlic",
    quantity: "1kg",
    price: 320,
    rating: "4.2",
    category: "Organic",
    maxSafety: false,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/pomegrante-removebg-preview_v2k2Hx6hj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588908442",
    isLiked: false,
    title: "Pomegranate",
    quantity: "1kg",
    price: 420,
    rating: "4",
    category: "Organic",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/chili_HYpZE13B_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588923098",
    isLiked: false,
    title: "Chilli",
    quantity: "1kg",
    price: 280,
    rating: "4.8",
    category: "Organic",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/watermelon-removebg-preview_1YA1IJSUk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588908277",
    isLiked: false,
    title: "Watermelon",
    quantity: "1kg",
    price: 80,
    rating: "3.5",
    category: "Organic",
    maxSafety: false,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/patato_YAAVK4U409.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588907752",
    isLiked: false,
    title: "Potato",
    quantity: "1kg",
    price: 30,
    rating: "3",
    category: "Organic",
    maxSafety: false,
    fastDelivery: false,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/pack3_Kwvsa8oKW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588909697",
    isLiked: false,
    title: "Healthy Box",
    quantity: "1unit",
    price: 1088,
    rating: "4.9",
    category: "Organic",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/cherry-tomato_Xh_OjpaJK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795444380",
    isLiked: false,
    title: "Cherry",
    quantity: "1kg",
    price: 99,
    rating: "3.0",
    category: "Organic",
    maxSafety: false,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/avocado_3ZDrEbZ6V.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795440814",
    isLiked: false,
    title: "Avocado",
    quantity: "500gm",
    price: 380,
    rating: "5",
    category: "Organic",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/red-tomato_PRt3OgXjy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795452638",
    isLiked: false,
    title: "Red Tomato",
    quantity: "1kg",
    price: 30,
    rating: "3.9",
    category: "Organic",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/red-cabbage_Hja_KyM-h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795451945",
    isLiked: false,
    title: "Red Cabbage",
    quantity: "500gm",
    price: 32,
    rating: "2.2",
    category: "Organic",
    maxSafety: false,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-bottle_PpgBlnaod.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795440782",
    isLiked: false,
    title: "Baby Bottle",
    quantity: "1pc",
    price: 120,
    rating: "4.2",
    category: "Baby",
    maxSafety: true,
    fastDelivery: false,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-bowl_2pPx2Wt5g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795441169",
    isLiked: false,
    title: "Baby Bowl",
    quantity: "1pc",
    price: 37,
    rating: "2.0",
    category: "Baby",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-cookies_DgAGcOUDh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795441815",
    isLiked: false,
    title: "Baby Cookies",
    quantity: "200gm",
    price: 40,
    rating: "3.9",
    category: "Baby",
    maxSafety: false,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-dress_4Gjvqz1MG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795442547",
    isLiked: false,
    title: "Baby Dress",
    quantity: "1pc",
    price: 299,
    rating: "4.0",
    category: "Baby",
    maxSafety: false,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-crocs_SNg0y6DGa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795442314",
    isLiked: false,
    title: "Baby Crocs",
    quantity: "1unit",
    price: 1800,
    rating: "3.9",
    category: "Baby",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-supplement_8NSZE9GnWN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795443124",
    isLiked: false,
    title: "Baby Drugs",
    quantity: "500gm",
    price: 20000,
    rating: "5",
    category: "Baby",
    maxSafety: false,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-toy_228owio9-_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795443653",
    isLiked: false,
    title: "Baby Toy",
    quantity: "1unit",
    price: 280,
    rating: "2.5",
    category: "Baby",
    maxSafety: true,
    fastDelivery: false,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/baby-toys_2yCleGs8D.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795444036",
    isLiked: false,
    title: "Baby Bus",
    quantity: "1pc",
    price: 1080,
    rating: "4.8",
    category: "Baby",
    maxSafety: false,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/deodrant_86blOJTnv.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795446283",
    isLiked: false,
    title: "Deodrant",
    quantity: "1unit",
    price: 179,
    rating: "3.9",
    category: "Hygiene",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/face-wash_GL7l1eo2-.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795446410",
    isLiked: false,
    title: "Facewash",
    quantity: "1unit",
    price: 299,
    rating: "4.9",
    category: "Hygiene",
    maxSafety: false,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/handwash_3SbUd3dZd.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795447307",
    isLiked: false,
    title: "Handwash",
    quantity: "1unit",
    price: 45,
    rating: "2.9",
    category: "Hygiene",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/lip-care_DDFZ1GXyI.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795449157",
    isLiked: false,
    title: "Lip Care",
    quantity: "1unit",
    price: 25,
    rating: "4.0",
    category: "Hygiene",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/mouth-wash_gEpl-ergu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795450586",
    isLiked: false,
    title: "Mouth Wash",
    quantity: "1unit",
    price: 108,
    rating: "4.4",
    category: "Hygiene",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/mamy-poko-pant_bNXSUwWRE.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795450203",
    isLiked: false,
    title: "Diaper",
    quantity: "1unit",
    price: 89,
    rating: "4.2",
    category: "Baby",
    maxSafety: false,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/shower-gel_1d2v4CkS6.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1647795453858",
    isLiked: false,
    title: "Shower Gel",
    quantity: "1unit",
    price: 439,
    rating: "3.0",
    category: "Hygiene",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/yoghurt_X3wUmzYam.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795455502",
    isLiked: false,
    title: "Yoghurt",
    quantity: "1unit",
    price: 19,
    rating: "4.0",
    category: "Essentials",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/soup_ONlWuxtMT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795454302",
    isLiked: false,
    title: "Soup",
    quantity: "1unit",
    price: 12,
    rating: "3.0",
    category: "Essentials",
    maxSafety: true,
    fastDelivery: false,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/rice_CfmDgdXzE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795453071",
    isLiked: false,
    title: "Rice",
    quantity: "10kg",
    price: 2867,
    rating: "4.0",
    category: "Essentials",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/kellogs-corn_F2iV1p2nx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795447832",
    isLiked: false,
    title: "Corn Flakes",
    quantity: "800gm",
    price: 425,
    rating: "4.0",
    category: "Essentials",
    maxSafety: true,
    fastDelivery: true,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/coconut-water_ND5ElSVbC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795444775",
    isLiked: false,
    title: "Coconut",
    quantity: "200ml",
    price: 42,
    rating: "4.9",
    category: "Beverages",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/coffee_mu_6ztXQk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795445281",
    isLiked: false,
    title: "Coffee",
    quantity: "600gm",
    price: 625,
    rating: "4.9",
    category: "Beverages",
    maxSafety: true,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/maaza_YSIB2Vzv6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647795449480",
    isLiked: false,
    title: "Maaza",
    quantity: "180ml",
    price: 11,
    rating: "3.8",
    category: "Beverages",
    maxSafety: false,
    fastDelivery: false,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/pringles_fppaeFtUB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795451765",
    isLiked: false,
    title: "Pringles",
    quantity: "600gm",
    price: 190,
    rating: "1.9",
    category: "Snacks",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/nutella_cG1bbhIw0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795451224",
    isLiked: false,
    title: "Nutella",
    quantity: "300gm",
    price: 423,
    rating: "4.2",
    category: "Snacks",
    maxSafety: true,
    fastDelivery: false,
    offer: false,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/avavya/Avavya-Ecommerce/kinder-joy_sYYuqPU1R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647795448709",
    isLiked: false,
    title: "KinderJoy",
    quantity: "20gm",
    price: 42392,
    rating: "4.9",
    category: "Snacks",
    maxSafety: true,
    fastDelivery: true,
    offer: true,
  },
];
