"use client";

import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navItems}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/contact" className={styles.navLink}>Contact Us</Link>
      </div>
    </motion.nav>
  );
}
