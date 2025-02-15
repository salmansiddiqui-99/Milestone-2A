"use client";

import { motion } from "framer-motion";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>Experience Authentic Chinese Cuisine</h2>
        <p className={styles.text}>
          Indulge in the finest flavors! Reserve your table or order online today.
        </p>
        <div className={styles.buttonContainer}>
          <motion.a
            href="/order"
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Order Online
          </motion.a>
          <motion.a
            href="/reserve"
            className={`${styles.button} ${styles.reserve}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Reserve a Table
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
