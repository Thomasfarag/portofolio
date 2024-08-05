/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";
import TextTransition, { presets } from "react-text-transition";
import { sliderContent , jobs} from "../../data/data";
import { useTranslation } from 'react-i18next';


function Home({downloadImage , setDownloadMode , index}) {
 
  const { t ,i18n } = useTranslation();
  const cvDownload = () => {
    setDownloadMode(true)
    setTimeout(() => {
      downloadImage()
    }, 100);
    setTimeout(() => {
      setDownloadMode(false)
    }, 500);
  }

  return (
    <>
      {/*  Home Banner */}
      <section id={ i18n.language === "ar" ? "الرئيسية" : "Home"} className="home-banner"
        style={{ backgroundImage: `url(${sliderContent.banner})` }}
      >
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center ">
            <div className="col-lg-7">
              <div className="name type-box">
                <h6 className="text-light" data-aos="fade-up" data-aos-duration="1200">
                 { t("Hello_My_name_is")}
                </h6>
                <h1 className="text-light" >{ i18n.language === "ar" ? sliderContent.name_ar : sliderContent.name}</h1>
                <div>
                  <p className="loop-text lead">
                    <TextTransition
                      springConfig={presets.stiff}
                      className="justify-content-center text-light"
                    >
                      {18n.language === "ar" ? jobs.jobs_ar[index % jobs.jobs_ar.length] :jobs.jobs[index % jobs.jobs.length] }
                    </TextTransition>
                  </p>
                </div>
                <p className="desc">{i18n.language === "ar" ? sliderContent.description_ar : sliderContent.description}</p>
                <div className="mt-4 d-flex btn-wrapper gap-2  justify-content-center">
                  <a
                    className="px-btn px-btn-white" dir="auto"
                    onClick={cvDownload}
                  >
                    {i18n.language === "ar" ? sliderContent.btnText_ar : sliderContent.btnText}
                  </a>
                  <a className="px-btn btn-outline" href={i18n.language === "ar" ? "#اعمالي" : "#Work" }>
                    {i18n.language === "ar" ? sliderContent.btnText2_ar : sliderContent.btnText2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
 
      </section>

      {/* End Home Banner  */}
    </>
  );
}

export default Home;
