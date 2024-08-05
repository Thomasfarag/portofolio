import React from "react";
import { ServiceContent } from "../../../data/data";
import { useTranslation } from 'react-i18next';

export default function Service() {
  const { t ,i18n } = useTranslation();
  return (
    <>
      <div className="row justify-content-center">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i} 
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{i18n.language === "ar" ? val.title_ar : val.title}</h5>
                <p>{i18n.language === "ar" ? val.descriptions_ar : val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
