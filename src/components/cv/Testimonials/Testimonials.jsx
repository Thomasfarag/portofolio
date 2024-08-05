import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import a1 from '../../../assets/a1.png'
// import a2 from '../../../assets/a2.png'
// import a3 from '../../../assets/a3.png'
import { useTranslation } from "react-i18next";
import { TestimonilContent } from "../../../data/data";

export default function Testimonil() {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="testimonial-wrapper  dark-light ">
    //   <Slider {...settings}>
    //     {TestimonilContent.map((val, i) => (
    //       <div key={i} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
    //         <div className="testimonial-01 media">
    //           <div className="avatar">
    //             <img src={val.imageName} alt="review comments"></img>
    //           </div>
    //           <div className="media-body">
    //             <p>{i18n.language === "ar" ? val.desc_ar : val.desc}</p>
    //             <h6>
    //               {i18n.language === "ar"
    //                 ? val.reviewerName_ar
    //                 : val.reviewerName}
    //             </h6>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    <></>
  );
}
