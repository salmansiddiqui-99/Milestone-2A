"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          欢迎光临! (Welcome!)
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Experience the authentic flavors of Chinese cuisine, crafted with passion.
        </motion.p>
        <motion.button
          className={styles.button}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Explore Menu
        </motion.button>
      </motion.div>
    </section>
  );
}
