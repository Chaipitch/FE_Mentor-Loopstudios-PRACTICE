import React from "react";
import Image from "next/image";
import AboutImg from "../public/images/desktop/image-interactive.jpg";
import styles from "../styles/About.module.scss";

function About() {
  return (
    <div className={styles.About}>
      <Image
        className="abt-img"
        src={AboutImg}
        width="700"
        height="450"
        alt="image"
      />
      <div className="TextArea">
        <h3>The leader in interactive VR</h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default About;
