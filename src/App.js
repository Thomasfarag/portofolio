import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { Home, Header, About, Cv, Resume, Contact , Work} from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./style.scss";
import Service from "./components/About/Service/Service";
function App() {
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  const [downloadMode, setDownloadMode] = useState(false);

  const downloadImage = () => {
    const cv = document.getElementById("Cv");

    html2canvas(cv).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "cv.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    console.log(index);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={i18n.language === "ar"  ? "ar_font" : null}> 
      
      <Header changeLanguage={changeLanguage}/>
      <Home
        downloadImage={downloadImage}
        setDownloadMode={setDownloadMode}
        index={index}
      />
     
      {downloadMode ? <Cv index={index} /> : <About index={index} />}
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
