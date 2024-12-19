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

const Mention = () => {
  const { t } = useTranslation();
  return (
    <>
      <DemoNavbar />
      <main>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
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
                <Col className="text-center" lg="6">
                  <h1 className="display-1 text-white">{t("legal.tl")}</h1>
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
                <h2>{t("legal.st1.tl")}</h2>
                <p>
                  {t("legal.st1.li1")}
                  <br />
                  <h6>{t("legal.st1.li2")}</h6> OUTSOURCING MALAGASY CORPORATION
                  - Lot D520 CN° lle1/46 Matsiananana -501 Toamasina I
                  -Madagascar
                  <br />
                  {/* <h6>{t("legal.st1.li3")}</h6> [nom de la societe] */}
                  {/* <br /> */}
                  <h6>{t("legal.st1.li4")}</h6> 5 000 000 Ariary
                  <br />
                  <h6>{t("legal.st1.li5")}</h6> OUTSOURCING MALAGASY CORPORATION
                  – contact@omc-solutions.fr
                  <br />
                  <h6>{t("legal.st1.li6")}</h6> OVHcloud
                  <h6>{t("legal.st1.li7")}</h6> France
                </p>
              </div>
              <div>
                <h2>{t("legal.st2.tl")}</h2>
                <p>{t("legal.st2.p1")}</p>
                <p>{t("legal.st2.p2")}</p>
                <p>{t("legal.st2.p2")}</p>
              </div>
              <div>
                <h2>{t("legal.st3.tl")}</h2>
                <p>{t("legal.st3.p1")}</p>
                <p>{t("legal.st3.p2")}</p>
                <p>{t("legal.st3.p3")}</p>
              </div>
              <div>
                <h2>{t("legal.st4.tl")}</h2>
                <p>
                  {t("legal.st4.p1")}
                  <br />
                  {t("legal.st4.p2")}
                </p>
              </div>
              <div>
                <h2>{t("legal.st5.tl")}</h2>
                <p>{t("legal.st5.p1")}</p>
                <p>{t("legal.st5.p2")}</p>
                <p>{t("legal.st5.p3")}</p>
              </div>
              <div>
                <h2>{t("legal.st6.tl")}</h2>
                <p>{t("legal.st6.p1")}</p>
                <p>{t("legal.st6.p2")}</p>
                <p>{t("legal.st6.p3")}</p>
              </div>
              <div>
                <h2>{t("legal.st7.tl")}</h2>
                <p>{t("legal.st7.p1")}</p>
                <p>{t("legal.st7.p2")}</p>
                <p>{t("legal.st7.p3")}</p>
                <p>{t("legal.st7.p4")}</p>
                <p>{t("legal.st7.p5")}</p>
                <p>{t("legal.st7.p6")}</p>
                <p>{t("legal.st7.p7")}</p>
              </div>
              <div>
                <div>
                  <h2>{t("legal.st8.tl")}</h2>
                  <p>{t("legal.st8.p1")}</p>
                  <p>{t("legal.st8.p2")}</p>
                  <p>{t("legal.st8.p3")}</p>
                  <p>{t("legal.st8.p4")}</p>
                  <p>{t("legal.st8.p5")}</p>
                  <p>{t("legal.st7.p6")}</p>
                  <p>{t("legal.st8.p7")}</p>
                </div>
                <h2>{t("legal.st9.tl")}</h2>
                <p>{t("legal.st9.p")}</p>
              </div>
              <div>
                <h2>{t("legal.st10.tl")}</h2>
                <p>{t("legal.st10.p1")}</p>
                <p>{t("legal.st10.p2")}</p>
              </div>
              <div>
                <h2>{t("legal.st11.tl")}</h2>
                <p>{t("legal.st11.p1")}</p>
                <p>{t("legal.st11.p2")}</p>
              </div>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Mention;
