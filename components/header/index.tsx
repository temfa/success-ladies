"use client";
import React from "react";
import styles from "./styles.module.css";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
        </div>
        <div className={styles.nav}>
          {navLinks?.map((item, index) => {
            return (
              <Link href={item.link} key={index} className={pathname === item.link ? styles.active : ""}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Header;
