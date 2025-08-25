import pimg_1 from "./pimg_1.jpg";
import pimg_2 from "./pimg_2.avif";
import pimg_3 from "./pimg_3.jpg";
import pimg_4 from "./pimg_4.jpg";
import pimg_5 from "./pimg_5.jpg";
import pimg_6 from "./pimg_6.jpg";
import pimg_7 from "./pimg_7.jpg";
import pimg_8 from "./pimg_8.jpg";
import pimg_9 from "./pimg_9.avif";
import pimg_10 from "./pimg_10.jpg";
import pimg_11 from "./pimg_11.webp";
import pimg_12 from "./pimg_12.webp";
import pimg_13 from "./pimg_13.jpg";
import pimg_14 from "./pimg_14.avif";
import pimg_15 from "./pimg_15.jpg";
import pimg_16 from "./pimg_16.webp";
import pimg_17 from "./pimg_17.jpg";
import pimg_18 from "./pimg_18.webp";
import pimg_19 from "./pimg_19.jpg";
import pimg_20 from "./pimg_20.jpg";
import pimg_21 from "./pimg_21.jpg";
import pimg_22 from "./pimg_22.jpg";
import pimg_23 from "./pimg_23.jpeg";
import pimg_24 from "./pimg_24.webp";
import pimg_25 from "./pimg_25.jpg";
import pimg_26 from "./pimg_26.jpg";
import pimg_27 from "./pimg_27.jpg";
import pimg_28 from "./pimg_28.webp";
import pimg_29 from "./pimg_29.avif";
import pimg_30 from "./pimg_30.webp";
import pimg_31 from "./pimg_31.jpg";
import pimg_32 from "./pimg_32.avif";
import pimg_33 from "./pimg_33.jpg";
import pimg_34 from "./pimg_34.jpg";
import pimg_35 from "./pimg_35.jpg";
import pimg_36 from "./pimg_36.webp";
import pimg_37 from "./pimg_37.webp";
import pimg_38 from "./pimg_38.webp";
import pimg_39 from "./pimg_39.jpg";
import pimg_40 from "./pimg_40.webp";

import aboutimg from "./aboutimg.jpg";
import bin_icon from "./bin_icon.png";
import cart_icon from "./cart_icon.png";
import contactimg from "./contactimg.avif";
import cross_icon from "./cross_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import Headerimg_2 from "./Headerimg_2.avif";
import Heroimg from "./Heroimg.avif";
import Logo from "./Logo.png";
import logofoot from "./logofoot.png";
import logofoot2 from "./logofoot2.png";
import logofoot3 from "./logofoot3.png";
import menu_icon from "./menu_icon.png";
import profile_icon from "./profile_icon.png";
import razorpay_logo from "./razorpay_logo.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import stripe_logo from "./stripe_logo.png";
import Team2 from "./Team2.png";
import Team3 from "./Team3.png";
import Teamimg_1 from "./Teamimg_1.png";
import search_icon from "./search_icon.png";
import Hero3 from "./Hero3.avif";
import global from "./global.png";

import geometry1 from "./geometry1.png";
import geometry2 from "./geometry2.png";
import geometry3 from "./geometry3.png";
import geometry4 from "./geometry4.png";
import geometry5 from "./geometry5.png";
import geometry6 from "./geometry6.png";
export const assets = {
  aboutimg,
  bin_icon,
  cart_icon,
  contactimg,
  cross_icon,
  dropdown_icon,
  Headerimg_2,
  Heroimg,
  Logo,
  logofoot,
  logofoot2,
  logofoot3,
  menu_icon,
  profile_icon,
  razorpay_logo,
  star_dull_icon,
  star_icon,
  stripe_logo,
  Team2,
  Team3,
  Teamimg_1,
  search_icon,
  Hero3,
  global,
};

export const team = [
  {
    id: 1,
    image: Teamimg_1,
    name: "Alice Johnson",
    profession: "Professional Designer",
  },
  {
    id: 2,
    image: Team2,
    name: "Michael Smith",
    profession: "Stylist",
  },
  {
    id: 3,
    image: Team3,
    name: "Sophia Brown",
    profession: "Marketing Specialist",
  },
];

export const products = [
  {
    _id: "aaaa",
    name: "Kids Casual T-shirt",
    description:
      "A soft and comfy t-shirt for kids, perfect for everyday wear or playtime.",
    price: 100,
    image: [pimg_1],
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaab",
    name: "Kids Stylish Shorts",
    description:
      "Lightweight shorts for kids, comfortable for summer and outdoor activities.",
    price: 120,
    image: [pimg_2],
    category: "Kids",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaac",
    name: "Kids Dino T-shirt",
    description:
      "Fun and colorful t-shirt with dinosaur print, perfect for active kids.",
    price: 150,
    image: [pimg_3],
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716618345448,
    bestseller: false,
  },
  {
    _id: "aaad",
    name: "Kids Comfortable Pants",
    description:
      "Soft and durable pants for kids, ideal for casual wear and play.",
    price: 120,
    image: [pimg_4],
    category: "Kids",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716615345448,
    bestseller: true,
  },
  {
    _id: "aaae",
    name: "Kids Summer Tee",
    description:
      "A lightweight tee for kids, perfect for sunny days and casual outings.",
    price: 130,
    image: [pimg_5],
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716612345448,
    bestseller: true,
  },
  {
    _id: "aaaf",
    name: "Men Casual T-shirt",
    description:
      "Lightweight cotton t-shirt for men, ideal for everyday casual wear.",
    price: 200,
    image: [pimg_6],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716609345448,
    bestseller: true,
  },
  {
    _id: "aaag",
    name: "Men Slim Fit Pants",
    description:
      "Comfortable and stylish pants for men, perfect for casual and smart-casual wear.",
    price: 300,
    image: [pimg_7],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716606345448,
    bestseller: true,
  },
  {
    _id: "aaah",
    name: "Men Cotton Polo",
    description:
      "Classic men's polo shirt made of breathable cotton, perfect for casual outings.",
    price: 250,
    image: [pimg_8],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716603345448,
    bestseller: false,
  },
  {
    _id: "aaai",
    name: "Men Casual Chinos",
    description:
      "Stylish cotton blend chinos for men, ideal for smart-casual occasions.",
    price: 300,
    image: [pimg_9],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716600345448,
    bestseller: false,
  },
  {
    _id: "aaaj",
    name: "Men Classic Round Neck Tee",
    description:
      "Soft and breathable round neck t-shirt for everyday casual wear.",
    price: 200,
    image: [pimg_10],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716597345448,
    bestseller: true,
  },
  {
    _id: "aaak",
    name: "Women Elegant Top",
    description:
      "A stylish top for women, perfect for pairing with skirts or trousers for a chic look.",
    price: 300,
    image: [pimg_11],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716594345448,
    bestseller: true,
  },
  {
    _id: "aaal",
    name: "Kids Pretty Top",
    description:
      "Cute and soft top for girls, comfortable for daily wear and school.",
    price: 120,
    image: [pimg_12],
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716591345448,
    bestseller: false,
  },
  {
    _id: "aaam",
    name: "Women Stylish Blouse",
    description:
      "Chic and comfortable blouse for women, perfect for office or casual wear.",
    price: 350,
    image: [pimg_13],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716588345448,
    bestseller: false,
  },
  {
    _id: "aaan",
    name: "Women Casual Pants",
    description:
      "Comfortable and stylish pants for women, suitable for everyday wear.",
    price: 380,
    image: [pimg_14],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716585345448,
    bestseller: true,
  },
  {
    _id: "aaao",
    name: "Women Summer Top",
    description:
      "Lightweight top for women, perfect for casual summer outings.",
    price: 280,
    image: [pimg_15],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716582345448,
    bestseller: true,
  },
  {
    _id: "aaap",
    name: "Women Trendy Skirt",
    description:
      "Flowy skirt for women, stylish and comfortable for casual wear.",
    price: 330,
    image: [pimg_16],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716579345448,
    bestseller: false,
  },
  {
    _id: "aaaq",
    name: "Women Casual Pants",
    description:
      "Soft and comfortable casual pants for women, perfect for daily wear.",
    price: 360,
    image: [pimg_17],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716576345448,
    bestseller: false,
  },
  {
    _id: "aaar",
    name: "Men Casual Shorts",
    description:
      "Comfortable shorts for men, ideal for summer and casual outings.",
    price: 270,
    image: [pimg_18],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716573345448,
    bestseller: false,
  },
  {
    _id: "aaas",
    name: "Women Summer Top",
    description:
      "Lightweight top for women, perfect for casual and office wear.",
    price: 350,
    image: [pimg_19],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716570345448,
    bestseller: true,
  },
  {
    _id: "aaat",
    name: "Women Flowy Pants",
    description:
      "Comfortable wide-leg pants for women, stylish for casual wear.",
    price: 380,
    image: [pimg_20],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716567345448,
    bestseller: false,
  },
  {
    _id: "aaau",
    name: "Women Casual Top",
    description:
      "Stylish top for women, perfect for pairing with jeans or skirts.",
    price: 420,
    image: [pimg_21],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716564345448,
    bestseller: true,
  },
  {
    _id: "aaav",
    name: "Women Comfortable Skirt",
    description: "Soft and stylish skirt for women, suitable for casual wear.",
    price: 330,
    image: [pimg_22],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716561345448,
    bestseller: false,
  },
  {
    _id: "aaaw",
    name: "Men Casual Pants",
    description:
      "Comfortable bottom wear for men, suitable for casual outings and work.",
    price: 300,
    image: [pimg_23],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716558345448,
    bestseller: true,
  },
  {
    _id: "aaax",
    name: "Women Stylish Top",
    description: "Elegant top for women, perfect for office or casual wear.",
    price: 400,
    image: [pimg_24],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716555345448,
    bestseller: false,
  },
  {
    _id: "aaay",
    name: "Women Trendy Pants",
    description:
      "Stylish and comfortable pants for women, perfect for everyday wear.",
    price: 380,
    image: [pimg_25],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716552345448,
    bestseller: false,
  },
  {
    _id: "aaaz",
    name: "Women Chic Top",
    description:
      "Elegant and soft top for women, perfect for casual and office wear.",
    price: 420,
    image: [pimg_26],
    category: "Women",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716549345448,
    bestseller: false,
  },
  {
    _id: "aaba",
    name: "Men Casual Bottoms",
    description: "Comfortable casual bottoms for men, ideal for everyday wear.",
    price: 290,
    image: [pimg_27],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716546345448,
    bestseller: true,
  },
  {
    _id: "aabb",
    name: "Women Casual Pants",
    description:
      "Trendy pants for women, comfortable for casual and office wear.",
    price: 350,
    image: [pimg_28],
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716543345448,
    bestseller: false,
  },
  {
    _id: "aabc",
    name: "Men Stylish Top",
    description: "Soft and breathable top for men, perfect for casual wear.",
    price: 250,
    image: [pimg_29],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716540345448,
    bestseller: false,
  },
  {
    _id: "aabd",
    name: "Men Smart Bottoms",
    description:
      "Stylish and comfortable bottom wear for men, perfect for casual outings.",
    price: 270,
    image: [pimg_30],
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716537345448,
    bestseller: false,
  },
  {
    _id: "aabe",
    name: "Men Casual T-shirt",
    description: "Breathable and soft t-shirt for men, ideal for daily wear.",
    price: 220,
    image: [pimg_31],
    category: "Men",
    subcategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716534345448,
    bestseller: false,
  },
  {
    _id: "aabf",
    name: "Women Winter Jacket",
    description: "Warm and cozy jacket for women, perfect for chilly days.",
    price: 500,
    image: [pimg_32],
    category: "Women",
    subcategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716531345448,
    bestseller: false,
  },
  {
    _id: "aabg",
    name: "Women Winter Sweater",
    description:
      "Soft and stylish sweater for women, ideal for winter layering.",
    price: 400,
    image: [pimg_33],
    category: "Women",
    subcategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716528345448,
    bestseller: true,
  },
  {
    _id: "aabh",
    name: "Kids Winter Coat",
    description: "Warm and comfortable coat for kids, perfect for winter wear.",
    price: 380,
    image: [pimg_37],
    category: "Kids",
    subcategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716516345448,
    bestseller: false,
  },
];

export const features = [
  {
    image: geometry1,
    text: "Tailored Recommendations",
  },
  {
    image: geometry2,
    text: "Versatile Clothing Options",
  },
  {
    image: geometry3,
    text: "Eye-Catching Designs",
  },
  {
    image: geometry4,
    text: "Durable & Stylish Apparel",
  },
  {
    image: geometry5,
    text: "Personalization Service",
  },
  {
    image: geometry6,
    text: "Mix-and-Match Outfits",
  },
];

export const mission = [
  {
    id: 1,
    heading: "Work",
    description: `Our mission is to provide innovative solutions that empower individuals and businesses to achieve their full potential. We focus onsustainability, quality, and excellence in all our products and services. Throughcollaboration and creativity, we aim to foster a culture of growth, learning,and continuous improvement. We are committed to ethical practices, embracingtechnology, and creating meaningful impacts in every community we serve. .`,
  },
  {
    id: 2,
    heading: "Strategy",
    description: `We strive to deliver value and trust to our customers by offering reliable, high-quality products and services. Our mission isguided by integrity, innovation, and customer satisfaction. We aim to build long-termrelationships with our clients, partners, and stakeholders. By prioritizingcommunication, responsibility, and excellence, we ensure that our solutionsconsistently meet expectations.`,
  },
  {
    id: 3,
    heading: "Income",
    description: `Our mission focuses on advancing technology and promoting education to create a smarter, more connected world. We invest inresearch, talent development, and sustainable practices to ensure lastingimpact. By fostering creativity, ethical business practices, andcollaboration, we aim to shape the future positively. We support innovation thatimproves lives, encourages learning, and enhances global connectivity.`,
  },
  {
    id: 4,
    heading: "Future",
    description: `We are dedicated to excellence in every endeavor, encouraginginnovation, inclusivity, and responsibility. Our mission is tinspireindividuals to reach their highest potential while making positive contributionto society. Through ethical practices, teamwork, anforward-thinking strategies,we aim to lead with integrity and purpose.`,
  },
];

export const faq = [
  {
    id: 1,
    question: "What is OptiBuy.?",
    answer:
      "OptiBuy. is a brand dedicated to delivering innovative and stylish fashion solutions. We focus on quality, creativity, and customer satisfaction in all our collections.",
  },
  {
    id: 2,
    question: "How can I place an order?",
    answer:
      "You can place an order directly through our website by selecting your desired products, adding them to the cart, and proceeding to checkout using our secure payment methods.",
  },
  {
    id: 3,
    question: "What is the return policy?",
    answer:
      "Our return policy allows you to return products within 14 days of delivery. Items must be unused, in original packaging, and accompanied by the receipt to be eligible for a refund or exchange.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to selected countries. Shipping charges and delivery times may vary depending on the destination.",
  },
  {
    id: 5,
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order is shipped, you will receive a tracking number via email to monitor the delivery status online.",
  },
  {
    id: 6,
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support via email, phone, or through the live chat option on our website. We aim to respond within 24 hours.",
  },
  {
    id: 7,
    question: "Are there any ongoing promotions?",
    answer:
      "Yes, we regularly run promotions and discount campaigns. Check our website or subscribe to our newsletter to stay updated on the latest offers.",
  },
];
