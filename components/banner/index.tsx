import React from "react";
import styles from "./styles.module.css";
import Header from "../header";
import TwitterSvg from "@/svgs/twitter";
import FacebookSvg from "@/svgs/facebook";
import InstagramSvg from "@/svgs/instagram";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.cont}>
        <Header />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <h2>Willkommen in meinem Fitnessstudio!</h2>
              <p>
                Hallo! Ich bin Dilek Popal 😊, Mutter von vier wunderbaren Kindern und die Gründerin eines ganz besonderen Fitnessstudios🏋️‍♀️, das mit viel Herz❤️ – für dich, für uns
                Frauen – geschaffen wurde.
              </p>
            </div>
            <div className={styles.bottom}>
              <button>Jetzt starten</button>
              <div className={styles.social}>
                <TwitterSvg />
                <FacebookSvg />
                <InstagramSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
