import React, { Component } from "react";
// import classnames from "classnames";
import { motion } from "framer-motion";

// reactstrap components
import {
  // Badge,
  Button,
  Card,
  CardBody,
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
import { withTranslation } from "react-i18next";
// import { Carousel } from "antd";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";
// import bgImg from "../../assets/img/theme/join.jpeg";
import SVG from "../../assets/img/ill/ill-26.svg";
import image2 from "../../assets/img/ill/ill-25.svg";

class History extends Component {
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
        <main className="profile-page" ref="main">
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <Row className="row-grid align-items-center">
                  <Col className="order-lg-2 ml-lg-auto mt-6" md="6">
                    <motion.div
                      initial={{ opacity: 0, x: "100px" }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                      className="position-relative pl-md-5 mx-2"
                    >
                      {/* <SVG className="img-center img-fluid" /> */}
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={SVG}
                      />
                    </motion.div>
                  </Col>
                  <Col className="order-lg-1" lg="6">
                    <div className="d-flex px-3">
                      <div className="pl-4">
                        <motion.h4
                          initial={{ opacity: 0, y: "-100px" }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="display-2"
                        >
                          {t("about.title1")}
                        </motion.h4>
                        <motion.p
                          initial={{ opacity: 0, y: "-100px" }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                          className=""
                        >
                          <strong>OMC (Outsourcing Malagasy Compagny)</strong>{" "}
                          {t("about.des")}
                        </motion.p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-8 mx-4 ">
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h4 className="display-3">{t("about.bc.h1")}</h4>
                    </div>
                  </div>
                  <Col lg="6">
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
                      <Card className="shadow shadow-lg--hover mt-5 ml-2">
                        <CardBody>
                          <div className="d-flex px-3">
                            <div>
                              <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i className="ni ni-bulb-61" />
                              </div>
                            </div>
                            <div className="pl-4">
                              <h5 className="title text-info">
                                {t("about.bc.h6_1")}
                              </h5>
                              <p>{t("about.bc.p_1")}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                  <Col lg="6">
                    <motion.div
                      initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: -10 % 2 === 0 ? 100 : 50,
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
                      <Card className="shadow shadow-lg--hover mt-5 mr-2">
                        <CardBody>
                          <div className="d-flex px-3">
                            <div>
                              <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i className="ni ni-chart-pie-35" />
                              </div>
                            </div>
                            <div className="pl-4">
                              <h5 className="title text-warning">
                                {t("about.bc.h6_2")}
                              </h5>
                              <p>{t("about.bc.p_2")}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                  <Col lg="6">
                    <motion.div
                      initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        y: -10 % 2 === 0 ? 100 : 50,
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
                      <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                          <div className="d-flex px-3">
                            <div>
                              <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                                <i className="ni ni-active-40" />
                              </div>
                            </div>
                            <div className="pl-4">
                              <h5 className="title">{t("about.bc.h6_3")}</h5>
                              <p>{t("about.bc.p_3")}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                </Row>
                <div className="px-4">
                  <div className="text-center mt-5 mb-6">
                    <h3>"{t("about.bc.h5")}"</h3>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section  bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className=" ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5 ">
                    {/* <SVG className="img-center img-fluid" /> */}
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={image2}
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-chart-bar-32 text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        {t("about.bc1.h1")} :{" "}
                      </h4>
                      <h4 className="display-6 text-white">
                        {t("about.bc1.h5")}
                      </h4>
                    </div>
                  </div>
                  {/* <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-satisfied" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Awesome Support
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-active-40" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">
                                                        Modular Components
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-warning"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card> */}
                </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col lg="6">
                  <motion.div
                    initial={{
                      opacity: 0,
                      transform:
                        "perspective(1200px) translateX(-100px) translateY(0px) scale(0.5) rotate(0deg) rotateX(180deg) rotateY(0deg) skewX(0deg) skewY(0deg)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform:
                        "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(360deg) rotateY(0deg) skewX(0deg) skewY(0deg)",
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }} // L'animation ne se joue qu'une fois lorsqu'elle entre dans la vue
                  >
                    <Card className="shadow shadow-lg--hover mt-5 ml-2 transform-perspective-left ">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div className="pl-4">
                            <h5 className="title text-info">
                              {t("about.bc1.h6_1")}
                            </h5>
                            <p>{t("about.bc1.p_1")}</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
                <Col lg="6">
                  <motion.div
                    initial={{
                      opacity: 0,
                      transform:
                        "perspective(1200px) translateX(-100px) translateY(0px) scale(0.5) rotate(0deg) rotateX(180deg) rotateY(0deg) skewX(0deg) skewY(0deg)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform:
                        "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(360deg) rotateY(0deg) skewX(0deg) skewY(0deg)",
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }} // L'animation ne se joue qu'une fois lorsqu'elle entre dans la vue
                  >
                    <Card className="shadow shadow-lg--hover mt-5 ml-2 transform-perspective-right">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div className="pl-4">
                            <h5 className="title text-info">
                              {t("about.bc1.h6_2")}
                            </h5>
                            <p>{t("about.bc1.p_2")}</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div> */}
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-4">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    {t("about.bc2.h1_1")}
                  </h2>
                  <p className="lead text-white">{t("about.bc2.p1")}</p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">{t("about.bc2.h6_1")}</h5>
                  <p className="text-white mt-3">{t("about.bc2.p_1")}</p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">{t("about.bc2.h6_2")}</h5>
                  <p className="text-white mt-3">{t("about.bc2.p_2")}</p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-bulb-61 text-primary" />
                  </div>
                  <h5 className="text-white mt-3">{t("about.bc2.h6_3")} </h5>
                  <p className="text-white mt-3">{t("about.bc2.p_3")}</p>
                </Col>
              </Row>
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    {t("about.bc2.h1_2")}
                  </h2>
                  <p className="lead text-white">{t("about.bc2.p2")}</p>
                  <Button
                    className="btn-1 btn-neutral ml-1"
                    color="default"
                    type="button"
                    href={`/${language}/contact`}
                  >
                    {t("about.bc2.btn")}
                  </Button>
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

export default withTranslation()(History);
