import React from "react";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";
import { useTranslation } from "react-i18next";
// reactstrap components
import {
  // Badge,
  // Button,
  // Card,
  // CardBody,
  // CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const Politique = () => {
  const { t } = useTranslation();
  return (
    <>
      <DemoNavbar />
      <main>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          {/* <div className="shape shape-style-1 shape-default alpha-4"> */}
          <div className="shape shape-style-1 shape-default bg-gradient-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="8">
                  <h1 className="display-3 text-white">{t("politic.tl")}</h1>
                </Col>
              </Row>
            </div>
          </Container>

          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg" id="presentation">
          <Container>
            <Row
              className="row-grid align-items-center"
              style={{ textAlign: "justify" }}
            >
              <div>
                <h1>{t("politic.st1.h1")}</h1>
                <h2>{t("politic.st1.tl")}</h2>
                <p>{t("politic.st1.p1")}</p>
                <p>{t("politic.st1.p2")}</p>
                <p>{t("politic.st1.p3")}</p>
                <p>{t("politic.st1.p4")}</p>
              </div>

              <div>
                <h2>{t("politic.st2.tl")}</h2>
                <p>{t("politic.st2.p1")}</p>
                <p>{t("politic.st2.p2")}</p>
              </div>

              <div>
                <h2>{t("politic.st3.tl")}</h2>
                <p>{t("politic.st3.p1")}</p>
                <p>{t("politic.st3.p2")}</p>
                <p>{t("politic.st3.p3")}</p>
                <ul>
                  <li>{t("politic.st3.li1")}</li>
                </ul>
              </div>

              <div>
                <h2>{t("politic.st4.tl")}</h2>
                <p>{t("politic.st4.p1")}</p>
                <p>{t("politic.st4.p2")}</p>
                <p>{t("politic.st4.p3")}</p>
                <p>{t("politic.st4.p4")}</p>
                <p>{t("politic.st4.p5")}</p>
                <p>{t("politic.st4.p6")}</p>
                <p>{t("politic.st4.p7")}</p>
                <p>{t("politic.st4.p8")}</p>
                <ul>
                  <li>{t("politic.st4.li1")}</li>
                  <li>{t("politic.st4.li2")}</li>
                  <li>{t("politic.st4.li3")}</li>
                </ul>
              </div>
              <div>
                <h2>{t("politic.st5.tl")}</h2>
                <p>{t("politic.st5.p")}</p>
              </div>

              <div>
                <h2>{t("politic.st6.tl")}</h2>
                <p>{t("politic.st6.p1")}</p>
                <p>{t("politic.st6.p2")}</p>
                <p>{t("politic.st6.p3")}</p>
                <ul>
                  <li>{t("politic.st6.li1")}</li>
                  <li>{t("politic.st6.li2")}</li>
                  <li>{t("politic.st6.li3")}</li>
                </ul>
                <p>{t("politic.st6.p4")}</p>
                <p>{t("politic.st6.p5")}</p>
              </div>

              <div>
                <h2>{t("politic.st7.tl")}</h2>
                <p>{t("politic.st7.p1")}</p>
                <p>{t("politic.st7.p2")}</p>
              </div>

              <div>
                <h2>{t("politic.st8.tl")}</h2>
                <p>{t("politic.st8.p1")}</p>
                <p>{t("politic.st8.p2")}</p>
                <p>{t("politic.st8.p3")}</p>
              </div>

              <div>
                <h2>{t("politic.st9.tl")}</h2>
                <p>{t("politic.st9.p1")}</p>
                <p>{t("politic.st9.p2")}</p>
              </div>

              <div>
                <h2>{t("politic.st10.tl")}</h2>
                <p>{t("politic.st10.p")}</p>
              </div>

              <div>
                <h2>{t("politic.st11.tl")}</h2>
                <p>{t("politic.st11.p1")}</p>
                <p>{t("politic.st11.p2")}</p>
                <p>{t("politic.st11.p3")}</p>
              </div>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Politique;
