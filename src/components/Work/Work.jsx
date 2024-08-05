import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//  من هنا تقدر تضيف صور المشاريع جديدة للموقع

//  اذا حاب تضيف صورة جديدة انسخ الكلام يلي تحت وغير اسم الصورة فقط
//  import imageName from "../../assets/imageName.png"

import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.jpg";

import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";

import work7 from "../../assets/work7.jpg";
import work8 from "../../assets/work8.jpg";
import work9 from "../../assets/work9.jpg";

// من هنا تقدر تظهر صور المشاريع جديدة
// من هنا تقدر تضيف روابط المشاريع جديدة

const itemData = [
  {
    // اسم الصورة المختصر
    img: work1,

    // رابط المشروع
    link: "https://movies-website-react-flax.vercel.app/home",
  },

  {
    img: work2,
    link: "https://thomasfarag.github.io/we-security/",
  },

  // {
  //   img: work3,
  //   link: "https://img.freepik.com/free-vector/courier-riding-bike-checking-address-phone-woman-delivering-order-using-cell-with-map-flat-vector-illustration-delivery-service-concept-banner-website-design-landing-web-page_74855-12153.jpg?size=626&ext=jpg&ga=GA1.1.129611774.1671055852&semt=sph",
  // },

  // {
  //   img: work4,
  //   link: "https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?w=1380&t=st=1684155672~exp=1684156272~hmac=4307c1af4813a7853331850dd4808fb99547c49313ab3b97ab8b64c8bf14bcb0",
  // },

  // {
  //   img: work5,
  //   link: "https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?w=1380&t=st=1684154668~exp=1684155268~hmac=fc334dd36f38e21365480af0a9a39a86025635e059e32d91e23a9df35850b358",
  // },

  // {
  //   img: work6,
  //   link: "https://img.freepik.com/free-vector/travel-booking-app-concept_52683-41900.jpg?w=1380&t=st=1684155997~exp=1684156597~hmac=3aead2b9bfdc1e3dbaec7c377a1f42ccfe0185d7e19934cfac2490bf09914e25",
  // },

  // {
  //   img: work7,
  //   link: "https://img.freepik.com/free-vector/guy-moving-clock-hands-man-stopping-time-flat-vector-illustration_74855-11112.jpg?w=740&t=st=1684156175~exp=1684156775~hmac=e5276e8ccf37e049384ef1689e452e8bdb6172a08289940cfdce86ad3cb92aee",
  // },

  // {
  //   img: work8,
  //   link: "https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=740&t=st=1684156691~exp=1684157291~hmac=bdaf1511696775ae394e00b0fd9c66791d152737f3a0e657b211278ced0b6168",
  // },
];

function Work() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();
  return (
    <section
      className="imageList"
      id={i18n.language === "ar" ? "اعمالي" : "Work"}
    >
      <div className="title">
        <h3>{t("MyWork")}</h3>
      </div>
      <Box style={{ width: "clamp(300px , 100% , 1000px)" }}>
        <ImageList variant="masonry" cols={2} gap={8}>

          {itemData.map((item, i) => (
            <>
              <ImageListItem
                key={item.img}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100}
              >
                <div className="theme_container overflow-hidden">
                  <img
                    style={{ width: "100%" }}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <a
                    className="col-md-6 "
                    onClick={() => {
                      setOpen(true);
                      setIndex(i);
                    }}
                  >
                    {t("View")}
                  </a>
                  <a
                    className="col-md-6 text-lg-end"
                    href={item.link}
                    target="_blank"
                  >
                    {t("Visit")}
                  </a>
                </div>
              </ImageListItem>
            </>
          ))}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={itemData.map((item, i) => ({
              src: item.img,
            }))}
          />
        </ImageList>
      </Box>
    </section>
  );
}

export default Work;
