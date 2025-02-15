"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Peking Duck",
    description: "Crispy roasted duck served with hoisin sauce and pancakes.",
    price: "$25",
    image: "/dish1.jpg",
  },
  {
    id: 2,
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce.",
    price: "$18",
    image: "/dish2.jpg",
  },
  {
    id: 3,
    name: "Dim Sum Platter",
    description: "A selection of steamed dumplings and buns with savory fillings.",
    price: "$20",
    image: "/dish3.jpg",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Signature Dishes</h2>
      <div className={styles.grid}>
        {dishes.map((dish) => (
          <motion.div
            key={dish.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: dish.id * 0.2 }}
          >
            <Image src={dish.image} alt={dish.name} width={300} height={200} className={styles.image} />
            <h3 className={styles.dishName}>{dish.name}</h3>
            <p className={styles.description}>{dish.description}</p>
            <span className={styles.price}>{dish.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
