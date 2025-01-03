import React from "react";
import styles from "./styles.module.css";
import { plansData } from "@/utils/data";

const Pricing = () => {
  return (
    <div className={styles.pricing} id="pricing">
      <div className={styles.header}>
        <p>Pricing Plan</p>
        <h2>Join Today</h2>
      </div>
      <div className={styles.cards}>
        {plansData.map((item, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>{item.price}</p>
            {item.note && <p className={styles.note}>{item.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
