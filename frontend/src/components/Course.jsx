/* eslint-disable react/prop-types */
import styles from "./Course.module.css";
import { Link } from "react-router-dom";


export default function Course({ title, teacher, price, imgSrc }) {
  return (
    <div className={styles.course}>
      <div className={styles.imgBox}>
        <img src={imgSrc} alt={`${title}-ის კურსის ქოვერი`} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}><Link to>{title}</Link></h3>
        <p className={styles.teacher}>
          ტრენერი: {teacher}
        </p>
        <p className={styles.price}>
          {price} ₾
        </p>
      </div>
    </div>
  );
}