import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Hero from "../components/Hero";
import Course from "../components/Course";
import Blog from "../components/Blog";
import TestimonialSlider from "../components/TestimonialSlider";


export default function Home() {
  return (
    <div>
      {/* hero section start */}
      <Hero />
      {/* hero section end */}
      {/* courses section start */}
      <section className={styles.sectionCourses}>
        <div className="container">
          <h2 className="titleSecondary">
            აირჩიე სასურველი კურსი და დარეგისტრირდი
          </h2>

          <div className={styles.coursesWrapper}>
            <Course
              title="ფოტოგრაფიის შემსწავლელი კურსი"
              teacher="ნათია დადეშქელიანი"
              price={450}
              imgSrc="/course1.png" />
            <Course
              title="მოუშენ დიზაინი (Adobe After Effects) -
              კურსი"
              teacher="ნათია დადეშქელიანი"
              price={450}
              imgSrc="/course2.png"
            />
            <Course
              title="საოფისე პროგრამების (MS Office)
              კურსი"
              teacher="ნათია დადეშქელიანი"
              price={450}
              imgSrc="/course3.png"
            />
            <Course
              title="ვიდეო მონტაჟი (Adobe Premiere Pro) -
              კურსი"
              teacher="ნათია დადეშქელიანი"
              price={450}
              imgSrc="/course4.png"
            />
          </div>
          <Link to="/courses" className="btnPrimary btnSeeAll">
            ყველას ნახვა
          </Link>
        </div>
      </section>
      {/* courses section end */}
      {/* why us section start */}
      <section className={styles.sectionWhyUs}>
        <div className="container">
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsImgBox}>
              <img src="/whyUsCover.png" alt="" />
            </div>
            <div className={styles.whyUsContent}>
              <h1 className={styles.whyUsTitle}>რატომ უნდა ისწავლო იდეარუმის აკადემიაში</h1>

              <ul className={styles.whyUsList}>
                <li className={styles.whyUsItem}>
                  <span className={styles.whyUsItemIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#D9D9D9" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={styles.whyUsItemTitle}>სერთიფიკატი</h4>
                    <span className={styles.whyUsItemText}>
                      ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი
                    </span>
                  </div>
                </li>
                <li className={styles.whyUsItem}>
                  <span className="whyUsItemIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#D9D9D9" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={styles.whyUsItemTitle}>სერთიფიკატი</h4>
                    <p className={styles.whyUsItemText}>
                      ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი
                    </p>
                  </div>
                </li>
                <li className={styles.whyUsItem}>
                  <span className={styles.whyUsItemIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#D9D9D9" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={styles.whyUsItemTitle}>სერთიფიკატი</h4>
                    <p className={styles.whyUsItemText}>
                      ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი
                    </p>
                  </div>
                </li>
                <li className={styles.whyUsItem}>
                  <span className={styles.whyUsItemIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#D9D9D9" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={styles.whyUsItemTitle}>სერთიფიკატი</h4>
                    <p className={styles.whyUsItemText}>
                      ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* why us section end */}
      {/* blogs section start */}
      <section className={styles.sectionBlogs}>
        <div className="container">
          <h2 className="titleSecondary">ბლოგი</h2>
          <div className={styles.blogsWrapper}>
            <Blog
              title="ხელოვნური ინტელექტი რობოტების
                  წინააღმდეგ – AI VS RPA"
              description="ხელოვნური ინტელექტი და რობოტები, ისინი ერთად
                        ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი
                        მაგალით იყო"
              imgSrc="/blog1.png"
            />
            <Blog
              title="ხელოვნური ინტელექტი რობოტების
                  წინააღმდეგ – AI VS RPA"
              description="ხელოვნური ინტელექტი და რობოტები, ისინი ერთად
                        ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი
                        მაგალით იყო"
              imgSrc="/blog1.png"
            />
            <Blog
              title="ხელოვნური ინტელექტი რობოტების
                  წინააღმდეგ – AI VS RPA"
              description="ხელოვნური ინტელექტი და რობოტები, ისინი ერთად
                        ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი
                        მაგალით იყო"
              imgSrc="/blog1.png"
            />
          </div>
        </div>
        <Link to="/blogs" className="btnPrimary btnSeeAll">
          ყველას ნახვა
        </Link>
      </section>
      {/* blogs section end */}
      {/* testimonials section start */}
      <section className={styles.sectionTestimonials}>
        <div className="container">
          <div className="testimonialsWrapper">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      {/* testimonials section end */}
      {/* footer start */}
      
      {/* footer end */}
    </div>
  );
}