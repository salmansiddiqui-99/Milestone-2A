"use client";

import { motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className={styles.logo}>MyLogo</div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button className={styles.button}>Order</button>
        <button className={styles.button}>Reserve</button>
      </div>
    </motion.header>
  );
}
