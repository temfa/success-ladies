import React from "react";
import styles from "./styles.module.css";

const Enhance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} data-aos="fade-up" data-aos-offset="500" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <p>Verbessern Sie das Nutzererlebnis mit Tipps für eine gesunde Ernährung, unterstützenden Ressourcen und sozialen Elementen.</p>
        <button>Treten Sie bei</button>
      </div>
    </div>
  );
};

export default Enhance;
