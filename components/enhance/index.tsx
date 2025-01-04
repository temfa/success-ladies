import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Enhance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="true">
        <p>Verbessern Sie das Nutzererlebnis mit Tipps für eine gesunde Ernährung, unterstützenden Ressourcen und sozialen Elementen.</p>
        <button>
          <Link href="tel:+0176-81102839" target="_blank">
            Treten Sie bei
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Enhance;
