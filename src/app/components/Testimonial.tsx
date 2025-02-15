"use client";

import { motion } from "framer-motion";
import styles from "./Testimonial.module.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    review:
      "The best Chinese food I've ever had! The flavors were authentic, and the service was fantastic. Highly recommended!",
    image: "/customer1.jpg",
  },
  {
    id: 2,
    name: "James Lee",
    review:
      "A delightful dining experience! The Peking Duck was crispy and flavorful. Will definitely come back!",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    name: "Sophia Wang",
    review:
      "Absolutely loved the Dim Sum! Fresh ingredients and beautifully presented. A must-visit restaurant!",
    image: "/customer3.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className={styles.avatar}
            />
            <p className={styles.review}>"{testimonial.review}"</p>
            <h3 className={styles.name}>- {testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
