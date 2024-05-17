import Image from "next/image"
import Link from "next/link";
import styles from '../../style/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/img/logo.png" width={50} height={50} alt="Logo" />
        <h1>Times de futebol</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
