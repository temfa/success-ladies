import React, { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  price: string;
  duration: string;
  features: string[];
};

const Plans: FC<Props> = ({ title, price, duration, features }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.duration}>{duration}</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            ✔ {feature}
          </li>
        ))}
      </ul>
      <button className={styles.button}>Choose Plan</button>
    </div>
  );
};

export default Plans;
