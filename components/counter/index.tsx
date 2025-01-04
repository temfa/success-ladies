import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.single}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <h2>5+</h2>
        <p>Jahre im Dienst</p>
      </div>
      <div
        className={styles.single}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <h2>10+</h2>
        <p>Zertifizierte Trainer</p>
      </div>
      <div
        className={styles.single}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <h2>786+</h2>
        <p>Zufriedene Mitglieder</p>
      </div>
      <div
        className={styles.single}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <h2>95%</h2>
        <p>Kundenzufriedenheit</p>
      </div>
    </div>
  );
};

export default Counter;
