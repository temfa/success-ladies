import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Call = () => {
  return (
    <div className={styles.container}>
      <p>Rufen Sie uns jetzt an</p>
      <Link href="tel:+0176-81102839" target="_blank">
        +0176-81102839
      </Link>
    </div>
  );
};

export default Call;
