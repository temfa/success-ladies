import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Icon1 from "@/svgs/icon1";
import Icon3 from "@/svgs/icon3";
import Icon2 from "@/svgs/icon2";
import Icon4 from "@/svgs/icon4";

const Why = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Why Choose Us </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.single}>
            <Icon1 />
            <div>
              <h2>Lorem Ipsum amid</h2>
              <p>A welcoming, family-like atmosphere 💖 that lifts you up and motivates you.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon2 />
            <div>
              <h2>Lorem Ipsum amid</h2>
              <p>Shared experiences like breakfasts, small celebrations 🎉, and events that strengthen our community.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon3 />
            <div>
              <h2>Lorem Ipsum amid</h2>
              <p>A place where you not only reach your goals 🎯 but also build friendships👯‍♀️ and find inspiration.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon4 />
            <div>
              <h2>Lorem Ipsum amid</h2>
              <p>You’ll not only get fitter but also leave with a smile on your face☺️ every time. </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <Image src="/images/2.jpg" width={265} height={193} alt="Right" />
            <Image src="/images/7.jpg" width={265} height={193} alt="Right" />
          </div>
          <Image src="/images/6.jpg" width={285} height={410} alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default Why;
