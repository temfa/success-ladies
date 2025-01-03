"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";

const Header = () => {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.container}>
      <div className={mobile ? `${styles.mobileNav} ${styles.wrapper}` : styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
          {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
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
        <button>Jetzt Beitreten</button>
      </div>
    </div>
  );
};

export default Header;
