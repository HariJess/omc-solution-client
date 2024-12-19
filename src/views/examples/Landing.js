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
// nodejs library that concatenates classes
import classnames from "classnames";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
  Table,
  CardHeader,
  // CardFooter,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import { ConfigProvider, Spin } from "antd";

import { Carousel } from "antd";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";
import bgImg from "../../assets/img/theme/join.svg";
import presImg from "../../assets/img/theme/presetation.svg";
// index page sections
// import Download from "../IndexSections/Download.js";

// const backgroundStyle = {
//   backgroundImage: `linear-gradient(50deg, #ffa5009b 100%, transparent 20%), url(${bgImg})`,
//   backgroundSize: "cover", // Pour couvrir tout le conteneur
//   backgroundPosition: "center", // Centrer l'image
//   display: "flex",
//   justifyContent: "center", // Centrer horizontalement le contenu
//   alignItems: "center", // Centrer verticalement le contenu
//   color: "white", // Couleur du texte pour contraste
// };
class Landing extends React.Component {
  // state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      entreprise: "",
      telephone: "",
      message: "",
      errorName: "",
      errorEmail: "",
      errorEntreprise: "",
      errorTelephone: "",
      errorMessage: "",
      successMsg: "",
      loading: false,
    };
  }
  EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  // Fonction pour gérer l'envoi du formulaire
  handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des données
    const { name, email, entreprise, telephone, message } = this.state;
    if (!name) {
      this.setState({ errorName: "Champs nom est requis!" });
    }
    if (!entreprise) {
      this.setState({ errorEntreprise: "Champs entreprise est requis!" });
    }
    if (!email) {
      this.setState({ errorEmail: "Champs email est requis!" });
    } else {
      if (!this.EmailValidation(email)) {
        this.setState({ errorEmail: "Champs email incorrect!" });
      }
    }
    if (!telephone) {
      this.setState({ errorTelephone: "Champs telephone est requis!" });
    }
    if (telephone.length < 10) {
      this.setState({ errorTelephone: "Numero de telephone incorrect!" });
    }
    if (!message) {
      this.setState({ errorMessage: "Champs message est requis!" });
    }

    if (
      name &&
      email &&
      this.EmailValidation(email) &&
      entreprise &&
      telephone &&
      message
    ) {
      this.setState({ loading: true });
      const templateParams = {
        objet: "Prise de Contact",
        from_name: name,
        entreprise: entreprise,
        from_email: email,
        telephone: telephone,
        message: message,
      };

      const YOUR_SERVICE_ID = "service_ai0bi0h";
      const YOUR_TEMPLATE_ID = "template_srjx0n3";
      const PUBLIC_KEY = "_t8ggQhVkybHlV3oJ";

      emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, {
          publicKey: PUBLIC_KEY,
        })
        .then((response) => {
          const OUR_SERVICE_ID = "service_ai0bi0h";
          const OUR_TEMPLATE_ID = "template_2t1vb0y";
          const replyTmpParams = {
            objet: "Nouveau message de Outsourcing Malagasy Compagny (O.M.C)",
            from_name: name,
            from_email: email,
          };
          emailjs
            .send(OUR_SERVICE_ID, OUR_TEMPLATE_ID, replyTmpParams, {
              publicKey: PUBLIC_KEY,
            })
            .then((response) => {
              this.setState({
                name: "",
                email: "",
                entreprise: "",
                telephone: "",
                message: "",
                errorName: "",
                errorEmail: "",
                errorEntreprise: "",
                errorTelephone: "",
                errorMessage: "",
                successMsg: "Message envoyer avec success!",
                loading: false,
              });
            })
            .catch((err) => {
              console.error("FAILED...", err);
            });
        })
        .catch((err) => {
          console.error("FAILED...", err);
        });
    }
  };

  render() {
    const { t } = this.props;
    const language = localStorage.getItem("language");
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            {/* <section className="section section-lg section-shaped pb-250"> */}
            <section className="section section-lg section-shaped pb-5 ">
              <div className="shape shape-style-1 bg-gradient-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Carousel autoplay autoplaySpeed={4000}>
                <Container className="py-lg-md d-flex pt-6 pb-6">
                  <div className="col px-0">
                    <Row>
                      <Col lg="8">
                        <h1 className="display-3 text-white">
                          {t("home.hero1.txt1")}
                        </h1>
                        <p className="lead text-white">
                          {t("home.hero1.txt2")}
                        </p>
                        <div className="btn-wrapper">
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="primary"
                            href="#presentation"
                          >
                            {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span> */}
                            <span className="btn-inner--text">
                              {t("home.hero1.bt_1")}
                            </span>
                          </Button>
                          {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <Container className="py-lg-md d-flex pt-6 pb-6">
                  <div className="col px-0">
                    <Row>
                      <Col lg="8">
                        <h1 className="display-3 text-white">
                          {t("home.hero2.txt1")}
                        </h1>
                        <p className="lead text-white">
                          {t("home.hero2.txt2")} <br /> {t("home.hero2.txt3")}
                        </p>
                        <div className="btn-wrapper">
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="primary"
                            href={`/${language}/contact`}
                          >
                            {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span> */}
                            <span className="btn-inner--text">
                              {t("home.hero2.bt_1")}
                            </span>
                          </Button>
                          {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </Carousel>
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
            {/* 1st Hero Variation */}
          </div>
          {/* PRESENTATION SECTION */}
          <section className="section section-lg" id="presentation">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-4" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-warning" />
                    </div>
                    <h1>{t("home.section1.title")}</h1>
                    <p style={{ textAlign: "justify" }}>
                      {t("home.section1.des")}
                    </p>
                    {/* <ul className="list-unstyled mt-2">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Comptabilité générale et révision
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Gestion de la paie </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Conseil en fiscalité et gestion
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                    <div className="btn-wrapper mt-3">
                      <Button
                        className="btn-icon mb-sm-0"
                        color="warning"
                        outline
                        href={`/${language}/about-us`}
                      >
                        {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span> */}
                        <span className="btn-inner--text">
                          {t("home.section1.bt")}
                        </span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col className="order-md-1" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={presImg}
                    // src={require("assets/img/theme/presetation.jpg")}
                    // src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center text-center mt-8">
                <Col lg="10">
                  <h2 className="display-3">{t("home.section2.title")}</h2>
                  <p className="lead text-muted">{t("home.section2.txt1")}</p>
                  <p className="lead text-muted">{t("home.section2.txt2")}</p>
                </Col>
              </Row>
            </Container>
          </section>

          {/* service */}
          <section className="section pb-0 bg-gradient-warning">
            <Container className="pt-4">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    {t("home.section3.title")}
                  </h2>
                  <p className="lead text-white">{t("home.section3.des")}</p>
                </Col>
              </Row>

              <Row className="row-grid mt-5 pb-8">
                <Col lg="6">
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
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-settings text-warning" />
                    </div>
                    <h5 className="text-white mt-3">
                      {t("home.section3.blk.t1")}{" "}
                    </h5>
                    <p className="text-white mt-3">
                      {t("home.section3.blk.d1")}
                    </p>
                  </motion.div>
                </Col>
                <Col lg="6">
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
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-folder-17 text-warning" />
                    </div>
                    <h5 className="text-white mt-3">
                      {t("home.section3.blk.t2")}
                    </h5>
                    <p className="text-white mt-3">
                      {t("home.section3.blk.d2")}
                    </p>
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
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-world-2 text-warning" />
                    </div>
                    <h5 className="text-white mt-3">
                      {t("home.section3.blk.t3")}{" "}
                    </h5>
                    <p className="text-white mt-3">
                      {t("home.section3.blk.d3")}
                    </p>
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
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-check-bold text-warning" />
                    </div>
                    <h5 className="text-white mt-3">
                      {t("home.section3.blk.t4")}
                    </h5>
                    <p className="text-white mt-3">
                      {t("home.section3.blk.d4")}
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
            {/* <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Nos Compétences</h4>
                      <p className="text-white">
                        Les collaborateurs de O.M.C sont formés à plusieurs systèmes comptables tels que Quadratus, Quadra box, AGIRIS, NumeriCompta et COALA. Pour assurer un outsourcing efficace, il est recommandé de nommer un référent outsourcing au sein de votre cabinet. Ce référent formera nos collaborateurs à votre système et organisation, servant de liaison initiale.
                      </p>
                      <p className="text-white" >Le modèle optimal consiste à ce qu'un collaborateur de votre cabinet supervise trois collaborateurs malgaches.</p>
                    </div>
                  </div>
                </Col>
                <Col className="order-lg-2" lg="6">
                  <div className="d-flex px-3">

                    <div className="pl-4">
                      <h4 className="display-3 text-white">Opérationnalisation de l'Outsourcing</h4>
                      <p className="text-white">
                        Nos collaborateurs travaillent directement sur votre système, selon ces étapes :
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-1" lg="6">
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Gestion Administrative
                          </h5>
                          <p>
                            Gestion des tâches administratives courantes, comme
                            la saisie de données et le traitement de documents.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Voir plus
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
                            Gestion des Ressources Humaines
                          </h5>
                          <p>
                            Gestion des aspects administratifs liés aux
                            ressources humaines, tels que les paies, les
                            déclarations sociales, et la gestion des absences.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Voir plus
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="order-lg-2 ml-lg-auto" lg="6">

                  <Card className="shadow shadow-lg--hover">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            1
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">Comptabilité</h5>
                          <p>
                            Prise en charge des opérations comptables, y compris
                            la gestion des écritures comptables, des
                            déclarations fiscales, et des rapports financiers.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Voir plus
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
                            Gestion de la Relation Client
                          </h5>
                          <p>
                            Support et gestion des interactions avec les
                            clients, y compris le traitement des demandes et des
                            réclamations.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Voir plus
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Dématérialisation
                          </h5>
                          <p>
                            Accompagnement dans la transition vers des solutions
                            numériques pour la gestion des documents et des
                            informations
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Voir plus
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container> */}
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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

          {/* Section Choose us */}
          <section className="section my-4">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      className="mt-4"
                      alt="..."
                      src={bgImg}
                      // src={require("assets/img/theme/choose.jpeg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        {t("home.section4.title")}
                      </h4>
                      <p
                        className="lead text-italic text-white"
                        style={{ textAlign: "justify" }}
                      >
                        {t("home.section4.des")}
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div> */}
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
                      <div className="mb-2">
                        <Badge className="badge-circle mr-3" color="primary">
                          1
                        </Badge>
                      </div>
                      <h3>{t("home.section4.blk.t1")}</h3>
                      {/* <p className="lead"> */}
                      <p style={{ textAlign: "justify" }}>
                        {t("home.section4.blk.d1")}
                      </p>
                    </motion.div>

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
                      <div className="my-2">
                        <Badge className="badge-circle mr-3" color="primary">
                          2
                        </Badge>
                      </div>
                      <h3>{t("home.section4.blk.t2")}</h3>
                      <p style={{ textAlign: "justify" }}>
                        {t("home.section4.blk.d2")}
                      </p>
                    </motion.div>

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
                      <div className="my-2">
                        <Badge className="badge-circle mr-3" color="primary">
                          3
                        </Badge>
                      </div>
                      <h3>{t("home.section4.blk.t3")}</h3>
                      <p style={{ textAlign: "justify" }}>
                        {t("home.section4.blk.d3")}
                      </p>
                    </motion.div>
                    {/* <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* pricing */}
          <section className="section section-md bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-4">
                <Col lg="9">
                  <div className="d-flex px-3 justify-content-center text-center">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-euro text-primary" />
                      </div>
                    </div>
                    <div className="pl-4 text-center">
                      <h2 className="display-3">{t("home.section5.title")}</h2>
                    </div>
                  </div>
                  <p className="lead text-muted">{t("home.section5.des")}</p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="5">
                  <motion.div
                    initial={{
                      opacity: 0,
                      // if odd index card,slide from right instead of left
                      y: 10 % 2 === 0 ? 100 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 10, // Slide in to its original position
                      transition: {
                        duration: 1, // Animation duration
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {/* <Card className="card-lift--hover shadow border-0"> */}
                    <Card className="shadow border-0 transform-perspective-left">
                      <CardHeader className="bg-gradient-warning text-center text-white">
                        {t("home.section5.blk1.title")}
                      </CardHeader>
                      <CardBody>
                        {/*  */}
                        <Table borderless responsive>
                          {/* <thead>
                              <tr>
                                <th>Description</th>
                                <th>TARIF</th>
                              </tr>
                            </thead> */}
                          <tbody>
                            <tr>
                              <th scope="row">{t("home.section5.blk1.p1")}</th>
                            </tr>
                            <tr>
                              <th scope="row">{t("home.section5.blk1.p2")}</th>
                            </tr>
                            <tr>
                              <th scope="row">{t("home.section5.blk1.p3")}</th>
                            </tr>
                            <tr>
                              <th scope="row">
                                {t("home.section5.blk1.p5.t")}
                              </th>
                            </tr>
                          </tbody>
                        </Table>
                        {/*  */}
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
                <Col lg="5">
                  <motion.div
                    initial={{
                      opacity: 0,
                      // if odd index card,slide from right instead of left
                      y: 10 % 2 === 0 ? 100 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 10, // Slide in to its original position
                      transition: {
                        duration: 1, // Animation duration
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {/* <Card className="card-lift--hover shadow border-0 mt-3"> */}
                    <Card className="shadow border-0 mt-6 transform-perspective-right">
                      <CardHeader className="bg-gradient-primary text-center text-white">
                        {t("home.section5.blk2.title")}
                      </CardHeader>
                      <CardBody className="py-4">
                        <div
                          style={{ lineHeight: "35px", textAlign: "justify" }}
                        >
                          {t("home.section5.blk2.des")}
                        </div>
                        <div>
                          Editeur:{" "}
                          <Badge color="primary" pill className="mr-1">
                            Silae
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            quadratus
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            fulll
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            sage
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                    <div className=" my-5 px-lg-6 transform-perspective-right">
                      <div className="transform-perspective-right">
                        <Button
                          className="btn-icon mb-sm-0"
                          color="primary"
                          outline
                          href={`/${language}/pricing`}
                        >
                          {/* <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span> */}
                          <span className="btn-inner--text">
                            {t("home.section5.blk2.bt")}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Join us */}
          <section className="section section-lg pt-7">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                {/* <Card className="shadow-lg border-0" style={backgroundStyle}> */}
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">{t("home.section6.title")}</h3>
                      <p className="lead text-white mt-3">
                        {t("home.section6.des")}
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <NavLink href={`/${language}/join-us`}>
                        <Button
                          block
                          className="btn-white"
                          color="default"
                          size="lg"
                        >
                          {t("home.section6.bt")}
                        </Button>
                      </NavLink>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          {/* contact */}
          <section className="section section-md bg-gradient-default">
            <Container className="pt-2 pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    {t("home.section7.title")}
                  </h2>
                  <p className="lead text-white">{t("home.section7.des")}</p>
                </Col>
              </Row>
              {/* <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row> */}
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: "#6495ED",
                        },
                      }}
                    >
                      <Spin spinning={this.state.loading}>
                        <CardBody className="p-lg-5">
                          <h4 className="mb-1">
                            {t("home.section7.form.tlt")}
                          </h4>
                          <p className="mt-0">{t("home.section7.form.des")}</p>
                          {/* name */}
                          {this.state.successMsg && (
                            <div className="alert alert-success">
                              {this.state.successMsg}
                            </div>
                          )}
                          <FormGroup
                            className={
                              this.state.errorName
                                ? "has-danger"
                                : classnames("mt-5", {
                                    focused: this.state.nameFocused,
                                  })
                            }
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-user-run" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder={t("home.section7.form.name")}
                                type="text"
                                value={this.state.name}
                                onChange={(e) =>
                                  this.setState({ name: e.target.value })
                                }
                                onFocus={(e) =>
                                  this.setState({ nameFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ nameFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          {/* email */}
                          <FormGroup
                            // className="has-danger"
                            className={
                              this.state.errorEmail
                                ? "has-danger"
                                : classnames({
                                    focused: this.state.emailFocused,
                                  })
                            }
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder={t("home.section7.form.email")}
                                className="is-invalid"
                                type="email"
                                value={this.state.email}
                                onChange={(e) =>
                                  this.setState({ email: e.target.value })
                                }
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          {/* entreprise */}
                          <FormGroup
                            className={
                              this.state.errorEntreprise
                                ? "has-danger"
                                : classnames({
                                    focused: this.state.emailFocused,
                                  })
                            }
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-building" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder={t("home.section7.form.sct")}
                                type="text"
                                value={this.state.entreprise}
                                onChange={(e) =>
                                  this.setState({ entreprise: e.target.value })
                                }
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          {/* phone */}
                          <FormGroup
                            className={
                              this.state.errorTelephone
                                ? "has-danger"
                                : classnames({
                                    focused: this.state.emailFocused,
                                  })
                            }
                          >
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-phone" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder={t("home.section7.form.phone")}
                                type="text"
                                value={this.state.telephone}
                                onChange={(e) =>
                                  this.setState({ telephone: e.target.value })
                                }
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          {/* message */}
                          <FormGroup
                            className={
                              this.state.errorMessage ? "has-danger" : "mb-4"
                            }
                          >
                            <Input
                              className="form-control-alternative"
                              cols="80"
                              name="name"
                              placeholder={t("home.section7.form.mess")}
                              rows="4"
                              type="textarea"
                              value={this.state.message}
                              onChange={(e) =>
                                this.setState({ message: e.target.value })
                              }
                            />
                          </FormGroup>
                          <div>
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              size="lg"
                              type="button"
                              onClick={this.handleSubmit}
                            >
                              {t("home.section7.form.btn")}
                            </Button>
                          </div>
                        </CardBody>
                      </Spin>
                    </ConfigProvider>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Download /> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withTranslation()(Landing);
