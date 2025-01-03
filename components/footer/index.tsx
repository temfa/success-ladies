import React from "react";
import styles from "./styles.module.css";
import CopyrightSvg from "@/svgs/copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CopyrightSvg />
        <p>2024 Erfolg Damen</p>
      </div>
      <div className={styles.right}>
        <Link href="/terms">Nutzungsbedingungen</Link>
        <Link href="/privacy">Datenschutzrichtlinie</Link>
      </div>
    </div>
  );
};

export default Footer;
