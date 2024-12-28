import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.single}>
        <h2>5+</h2>
        <p>Years of Service</p>
      </div>
      <div className={styles.single}>
        <h2>10+</h2>
        <p>Certified Trainers</p>
      </div>
      <div className={styles.single}>
        <h2>786+</h2>
        <p>Happy Members</p>
      </div>
      <div className={styles.single}>
        <h2>95%</h2>
        <p>Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default Counter;
