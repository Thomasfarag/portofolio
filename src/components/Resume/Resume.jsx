import React from "react";
import Skills from "../Skills/Skills";
import img from '../../assets/Programming-rafiki.png'

import { resumeContent , educatonContent} from "../../data/data";
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t ,i18n } = useTranslation();
  return (
    <>
      <section  id={ i18n.language === "ar" ? "المهارات" : "Skills"} className="section">
        <div className="container">
          {/* <div className="title">
            <h3>{t("Experience")}</h3>
            
          </div> */}
          {/* End title */}
          {/* <div className="resume-box" dir={i18n.language === "ar" ? "rtl" : "ltr"}> 
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row" >
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{i18n.language === "ar" ? val.jobPosition_ar : val.jobPosition}</h6>
                      <label>{i18n.language === "ar" ? val.jobType_ar : val.jobType}</label>
                      <p>{i18n.language === "ar" ? val.jobDuration_ar : val.jobDuration}</p>
                      <div className="rb-time">{i18n.language === "ar" ? val.timeDuraton_ar : val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{i18n.language === "ar" ? val.compnayName_ar : val.compnayName}</h6>
                      <p>{i18n.language === "ar" ? val.jobDescription_ar : val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          <div className="title">
            <h3>{t("Education_&_Skills")}</h3>{" "}
          </div>

          <div className="row align-items-center " dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div
              className="col-lg-4 m-15px-tb skill-image"
              data-aos="fade-up"
              data-aos-duration="1200"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              <ul className="aducation-box">
                {/* {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{i18n.language === "ar" ? val.degreeTitle_ar : val.degreeTitle} </h6>
                    <p>{i18n.language === "ar" ?  val.instituteName_ar : val.instituteName}</p>{" "}
                  </li>
                ))} */}
                <img src={img} alt="" />
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb "
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
