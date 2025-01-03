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
        <h2>Warum uns wählen</h2>
        <p>Weil ich fest daran glaube, dass Frauen Großartiges erreichen können, wenn sie sich stark💪, gesund🍀 und unterstützt🌸 fühlen.</p>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.single}>
            <Icon1 />
            <div>
              <p>Eine einladende, familienähnliche Atmosphäre 💖, die Sie aufbaut und motiviert.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon2 />
            <div>
              <p>Gemeinsame Erlebnisse wie Frühstücke, kleine Feiern 🎉 und Veranstaltungen, die unsere Gemeinschaft stärken.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon3 />
            <div>
              <p>Ein Ort, an dem Sie nicht nur Ihre Ziele 🎯 erreichen, sondern auch Freundschaften👯‍♀️ knüpfen und Inspiration finden.</p>
            </div>
          </div>
          <div className={styles.single}>
            <Icon4 />
            <div>
              <p>Sie werden nicht nur fitter, sondern gehen jedes Mal mit einem Lächeln☺️ nach Hause.</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <Image src="/images/IMG-20250102-WA0030.jpg" width={265} height={193} alt="Right" />
            <Image src="/images/IMG-20250102-WA0011.jpg" width={265} height={193} alt="Right" />
          </div>
          <Image src="/images/IMG-20250102-WA0038.jpg" width={285} height={410} alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default Why;
