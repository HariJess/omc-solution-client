/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { motion } from "framer-motion";
// reactstrap components
import { Card, Container, Row, Col, Button } from "reactstrap";
import { withTranslation } from "react-i18next";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import priceImg from "../../assets/img/theme/pricing.svg";
import task from "../../assets/img/theme/task.svg";
import collaboration from "../../assets/img/theme/collaboration.svg";

class Pricing extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const { t } = this.props;
    const language = localStorage.getItem("language");
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="card-profile shadow">
                    <Row className="row-grid align-items-center mx-lg-4">
                      <Col className="order-lg-1" lg="6">
                        <div className="d-flex px-3 mt-lg-6">
                          <div className="pl-4">
                            <motion.h4
                              initial={{ opacity: 0, y: "-100px" }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75 }}
                              className="display-2"
                            >
                              {t("price.title")}
                            </motion.h4>
                            <motion.p
                              initial={{ opacity: 0, y: "-100px" }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75 }}
                              className=""
                            >
                              {t("price.des")}
                            </motion.p>
                          </div>
                        </div>
                      </Col>
                      <Col className="order-lg-2 ml-lg-auto mt-6" md="6">
                        <motion.div
                          initial={{ opacity: 0, x: "75px" }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1.5 }}
                          className="position-relative mx-3"
                        >
                          {/* <SVG className="img-center img-fluid" /> */}
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={priceImg}
                          />
                        </motion.div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="6">
                        <div className="d-flex px-3 py-5">
                          <div className="pl-2">
                            <h5 className="title">{t("price.bc1.p")} :</h5>
                            <ul className="mx-lg-4">
                              <li>{t("price.bc1.li1")}</li>
                              <li>{t("price.bc1.li2")}</li>
                              <li>{t("price.bc1.li3")}</li>
                              <li>{t("price.bc1.li4")}</li>
                              <li>{t("price.bc1.li5")}</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col className="order-lg-1 ml-lg-auto" md="6">
                        <motion.div
                          initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: -10 % 2 === 0 ? -100 : 50,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 10, // Slide in to its original position
                            transition: {
                              duration: 0.5, // Animation duration
                            },
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="position-relative mx-4 pl-5">
                            {/* <SVG className="img-center img-fluid" /> */}
                            <img
                              alt="..."
                              className="img-center img-fluid"
                              src={task}
                            />
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center mx-lg-4">
                      <Col className="order-lg-1 mb-6" lg="6">
                        <div className="d-flex px-3">
                          <div className="pl-4">
                            <p className="title">{t("price.bc2.p")}</p>
                            {/* <ul>
                              <li>{t("price.bc2.li1")}</li>
                              <li>{t("price.bc2.li2")}</li>
                              <li>{t("price.bc2.li3")}</li>
                              <li>{t("price.bc2.li4")}</li>
                              <li>{t("price.bc2.li5")}</li>
                            </ul> */}
                          </div>
                        </div>
                        <div className="d-flex px-3 mr-2">
                          <div className="pl-4">
                            <h5 className="title text-warning">
                              {t("price.opt")}
                            </h5>
                            <p>{t("price.p")}</p>
                            <Button
                              className="btn-icon mb-sm-0"
                              color="warning"
                              outline
                              href={`/${language}/contact`}
                            >
                              <span className="btn-inner--text">
                                {t("price.btn")}
                              </span>
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col className="order-lg-2 ml-lg-auto" md="5">
                        <motion.div
                          initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            y: -10 % 2 === 0 ? -100 : 50,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 10, // Slide in to its original position
                            transition: {
                              duration: 0.5, // Animation duration
                            },
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="position-relative pb-4">
                            {/* <SVG className="img-center img-fluid" /> */}
                            <img
                              alt="..."
                              className="img-center img-fluid"
                              src={collaboration}
                            />
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withTranslation()(Pricing);
