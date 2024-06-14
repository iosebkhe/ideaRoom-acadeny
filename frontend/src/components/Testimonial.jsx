/* eslint-disable react/prop-types */
import styles from "./Testimonial.module.css";
import { Link } from "react-router-dom";

export default function Testimonial({
  testimonialCourseTitle,
  testimonialDesc,
  testimonialImg,
  testimonialFullName,
  testimonialUserReview,
  testimonialCourseLink
}) {
  return (
    <div className={styles.testimonialOuter}>
      <div className={styles.testimonial}>
        <div className={styles.content}>
          <span className={styles.quotesIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.75 12H18V9C18 7.34531 19.3453 6 21 6H21.375C21.9984 6 22.5 5.49844 22.5 4.875V2.625C22.5 2.00156 21.9984 1.5 21.375 1.5H21C16.8563 1.5 13.5 4.85625 13.5 9V20.25C13.5 21.4922 14.5078 22.5 15.75 22.5H21.75C22.9922 22.5 24 21.4922 24 20.25V14.25C24 13.0078 22.9922 12 21.75 12ZM8.25 12H4.5V9C4.5 7.34531 5.84531 6 7.5 6H7.875C8.49844 6 9 5.49844 9 4.875V2.625C9 2.00156 8.49844 1.5 7.875 1.5H7.5C3.35625 1.5 0 4.85625 0 9V20.25C0 21.4922 1.00781 22.5 2.25 22.5H8.25C9.49219 22.5 10.5 21.4922 10.5 20.25V14.25C10.5 13.0078 9.49219 12 8.25 12Z" fill="#FDB927" />
            </svg>

          </span>
          <p className={styles.description}>
            {testimonialDesc}
          </p>
          <div className={styles.userBox}>
            <img src={testimonialImg} alt={`${testimonialFullName}-ის სურათი`} className={styles.img} />
            <div className={styles.userInfo}>
              <h5 className={styles.userFullName}>{testimonialFullName}</h5>
              <span className={styles.userReview}>
                {testimonialUserReview}
              </span>
            </div>
          </div>
          <hr className={styles.hr} />
          <Link to={testimonialCourseLink} className={`${styles.link} btnPurpleText`}>
            <span className={styles.arrowIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 11.8011 6.07902 11.6103 6.21967 11.4696C6.36032 11.329 6.55109 11.25 6.75 11.25H15.4395L12.219 8.03097C12.0782 7.89014 11.9991 7.69913 11.9991 7.49997C11.9991 7.30081 12.0782 7.1098 12.219 6.96897C12.3598 6.82814 12.5508 6.74902 12.75 6.74902C12.9492 6.74902 13.1402 6.82814 13.281 6.96897L17.781 11.469C17.8508 11.5386 17.9063 11.6214 17.9441 11.7125C17.9819 11.8036 18.0013 11.9013 18.0013 12C18.0013 12.0986 17.9819 12.1963 17.9441 12.2874C17.9063 12.3785 17.8508 12.4613 17.781 12.531L13.281 17.031C13.1402 17.1718 12.9492 17.2509 12.75 17.2509C12.5508 17.2509 12.3598 17.1718 12.219 17.031C12.0782 16.8901 11.9991 16.6991 11.9991 16.5C11.9991 16.3008 12.0782 16.1098 12.219 15.969L15.4395 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3896 6 12.1989 6 12Z" fill="white" />
              </svg>
            </span>
            <p className={styles.courseTitle}>
              {testimonialCourseTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}