/* eslint-disable react/prop-types */
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";


export default function Blog({ title, imgSrc, description }) {
  return (
    <div className={styles.blog}>
      <div className={styles.imgBox}>
        <img src={imgSrc} alt={`${title}-ის ბლოგის ქოვერი`} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link to>{title}</Link>
        </h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <span className={styles.linkBox}>
        <Link className={`${styles.link} btnPrimary`}>
          გაიგე მეტი
        </Link>
      </span>
    </div>
  );
}