import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/IMG-20250102-WA0011.jpg"
        width={532}
        height={732}
        alt="About"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      />
      <div className={styles.about} data-aos="fade-left" data-aos-offset="500" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <h2>Über uns</h2>
        <p>
          Hallo! Ich bin Dilek Popal 😊, Mutter von vier wunderbaren Kindern und die Gründerin eines ganz besonderen Fitnessstudios🏋️‍♀️, das mit viel Herz❤️ – für dich, für uns
          Frauen – geschaffen wurde.
        </p>
        <p>
          Ich weiß, wie wertvoll es ist, Zeit für sich selbst ✨ zu haben – und wie stärkend es sich anfühlt, an einem Ort voller Akzeptanz, Gemeinschaft und positiver Energie 💚
          zu sein. Hier trainierst du nicht nur für deinen Körper 🏃‍♀️, sondern auch für dein Wohlbefinden und deine innere Stärke. 💖
        </p>
      </div>
    </div>
  );
};

export default About;
