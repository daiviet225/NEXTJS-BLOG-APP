import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/vietFace.jpg"
          alt="img of viet face"
          width={300}
          height={300}
        />
      </div>
      <h1>hi im viet</h1>
      <p>testing blog app by viet </p>
    </section>
  );
};

export default Hero;
