import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Call = () => {
  return (
    <div className={styles.container} data-aos="slide-right" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="true">
      <p>Rufen Sie uns jetzt an</p>
      <Link href="tel:+0176-81102839" target="_blank">
        +0176-81102839
      </Link>
    </div>
  );
};

export default Call;
