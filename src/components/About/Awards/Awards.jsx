import React from "react";
import { AwardContnet } from "../../../data/data";
import { useTranslation } from 'react-i18next';

const Awards = () => {
  const { t ,i18n } = useTranslation();
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i} 
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon ms-2">
                <img src={val.img} alt="award" />
              </div>
              <div className="media-body">
                <h6>{ i18n.language === "ar" ? val.awardName_ar : val.awardName}</h6>
                <p>{ i18n.language === "ar" ? val.awardFor_ar : val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
