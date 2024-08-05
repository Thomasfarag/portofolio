import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";


// وضع مكانه اسم شعارك الخاص مع صيغة الصورة man.png لتغير الشعار فقط احذف 
import logo from "../../assets/logo.jpg" 

import "./Header.css";

const pages = {
  page: ["Home ", "About me", "Skills",  "Contact"] , 
  page_ar: ["الرئيسية ", "نبذة عني", "المهارات", "التواصل"],
};

function Header({ changeLanguage }) {
  const { t, i18n } = useTranslation();
  return (
    <Navbar
      expand="lg"
      className="navbar"
      sticky="top"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Container>
        <Navbar.Brand href="#Home"> <img className="rounded-pill" src={logo} alt="" width={70} /> </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {i18n.language === "ar"
              ? pages.page_ar.map((page, i) => (
                  <Nav.Link key={i} href={`#${page}`}>
                    {page}
                  </Nav.Link>
                ))
              : pages.page.map((page, i) => (
                  <Nav.Link key={i} href={`#${page}`}>
                    {page}
                  </Nav.Link>
                ))}

            <Dropdown dir="ltr">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {i18n.language}
              </Dropdown.Toggle>
              <Dropdown.Menu className="lang m-auto">
                <Button className="en" onClick={changeLanguage} value="en">
                  English
                </Button>
                <Button className="ar" onClick={changeLanguage} value="ar">
                  Arab
                </Button>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
