import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial from "./Testimonial";

export default function TestimonialSlider() {
  var settings = {
    customPaging: function () {
      return (
        <a>
          <span className="slick-dot"></span>
        </a>
      );
    },
    dots: true,
    infinite: true,
    arrows: false,
    dotsClass: "slick-dots",
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
        <Testimonial
          testimonialCourseLink="/courses/1"
          testimonialCourseTitle="Learn now this course and Get Job oures "
          testimonialDesc={`“We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater”`}
          testimonialFullName="Maria Sharapova"
          testimonialImg="/testimonial1.png"
          testimonialUserReview="The Queen of Tesnnis"
        />
      </Slider>
    </div>
  );
}