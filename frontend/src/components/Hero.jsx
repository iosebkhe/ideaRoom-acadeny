import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}></div>
          <div className={styles.imgBox}>
            <img src="/hero-big.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}