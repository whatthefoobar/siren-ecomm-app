import bcrypt from "bcryptjs";

import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Tory Burch tailored pants",
    slug: "tory-burch-tailored-pants",
    category: "Pants",
    image: "../images/p1.jpg",
    price: 100,
    countInStock: 20,
    brand: "Tory Burch",
    rating: 4.0,
    numReviews: 10,
    description: "high quality product",
  },
  {
    name: "Ralph Lauren hat",
    slug: "ralph-lauren-hat",
    category: "Hats",
    image: "../images/p2.jpg",
    price: 78,
    countInStock: 30,
    brand: "Ralph Lauren",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product",
  },
  {
    name: "Lacoste shirt",
    slug: "lacoste-shirt",
    category: "Shirts",
    image: "../images/p3.jpg",
    price: 220,
    countInStock: 50,
    brand: "Lacoste",
    rating: 4.8,
    numReviews: 17,
    description: "high quality product",
  },
  {
    name: "Only sweater",
    slug: "only-sweater",
    category: "Sweaters",
    image: "../images/p4.jpg",
    price: 78,
    countInStock: 0,
    brand: "Only",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product",
  },
];

export const sampleUsers: User[] = [
  {
    name: "Joe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
