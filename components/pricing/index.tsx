import React from "react";
import styles from "./styles.module.css";

const Pricing = () => {
  const plansData = [
    {
      title: "12-Month Membership (Adults)",
      price: "€49.90/month",
    },
    {
      title: "24-Month Membership (Adults)",
      price: "€34.90/month",
    },
    {
      title: "12-Month Membership (Youth/Students)",
      price: "€43.90/month",
    },
    {
      title: "24-Month Membership (Youth/Students)",
      price: "€28.90/month",
    },
    {
      title: "10-Visit Pass",
      price: "€79.90",
    },
    {
      title: "Annual Pass (Adults)",
      price: "€548.90",
    },
    {
      title: "Annual Pass (Youth/Students)",
      price: "€482.90",
    },
    {
      title: "One-Time Registration Fee",
      price: "€25",
      note: "Upon contract signing",
    },
  ];
  return (
    <div className={styles.pricing}>
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
