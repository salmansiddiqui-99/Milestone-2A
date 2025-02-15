import styles from "./Footer.module.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Golden Dragon</h2>
          <p>Authentic Chinese Cuisine</p>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Dragon Bites. All rights reserved.
      </p>
    </footer>
  );
}
