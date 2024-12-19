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
import axios from "axios";
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import { Carousel } from "antd";
import { withTranslation } from "react-i18next";
import { ConfigProvider, Spin } from "antd";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import location from "../../assets/img/icons/img/location.png";

class Contact extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      email: "",
      entreprise: "",
      telephone: "",
      objet: "",
      isEnabled: localStorage.getItem("isEnabled"),
      message: "",
      fileCV: null,
      fileMotivation: null,
      checkbox: false,
      errorName: "",
      errorFirstName: "",
      errorEmail: "",
      errorEntreprise: "",
      errorTelephone: "",
      errorObjet: "",
      errorMessage: "",
      successMsg: "",
      errorMsg: "",
      loading: false,
    };
  }

  handleCV = (e) => {
    this.setState({ fileCV: e.target.files[0] });
  };

  handleLettreMotivation = (e) => {
    this.setState({ fileMotivation: e.target.files[0] });
  };

  EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  // Fonction pour gérer l'envoi du formulaire
  handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des données
    const {
      name,
      firstname,
      email,
      entreprise,
      telephone,
      objet,
      message,
      checkbox,
      fileCV,
      fileMotivation,
    } = this.state;
    if (!name) {
      this.setState({ errorName: "Champs nom est requis!" });
    }
    if (!firstname) {
      this.setState({ errorFirstName: "Champs prenom(s) est requis!" });
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
    if (!objet) {
      this.setState({ errorObjet: "Champs objet est requis!" });
    }
    if (!message) {
      this.setState({ errorMessage: "Champs message est requis!" });
    }

    if (
      name &&
      firstname &&
      email &&
      this.EmailValidation(email) &&
      entreprise &&
      telephone &&
      objet &&
      message &&
      checkbox
    ) {
      this.setState({ loading: true });
      // ============= FORMDATA ================
      const formData = new FormData();
      formData.append("name", name);
      formData.append("firstname", firstname);
      formData.append("email", email);
      formData.append("entreprise", entreprise);
      formData.append("telephone", telephone);
      formData.append("objet", objet);
      formData.append("message", message);
      if (fileCV) formData.append("fileCV", fileCV);
      if (fileMotivation) formData.append("fileMotivation", fileMotivation);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.message === "success!") {
          const OUR_SERVICE_ID = "service_ai0bi0h";
          const OUR_TEMPLATE_ID = "template_2t1vb0y";
          const PUBLIC_KEY = "_t8ggQhVkybHlV3oJ";
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
                firstname: "",
                email: "",
                entreprise: "",
                telephone: "",
                objet: "",
                isEnabled: localStorage.setItem("isEnabled", "false"),
                message: "",
                checkbox: false,
                successMsg: "Message envoyé avec succès!",
                errorMsg: "",
                loading: false,
              });
              localStorage.removeItem("isEnabled");
            })
            .catch((err) => {
              console.error("FAILED...", err);
            });
        } else {
          this.setState({ successMsg: "Erreur lors de l'envoi du message." });
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire", error);
        this.setState({ errorMsg: "Erreur lors de l'envoi du message." });
        this.setState({ loading: false });
      }
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    const { t } = this.props;
    // const language = localStorage.getItem("language");
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
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
                <div className="px-lg-6 px-4">
                  <div className="my-5" id="contactUs">
                    <div className="my-3">
                      <h1>{t("contact.title1")}</h1>
                    </div>
                    {this.state.successMsg && (
                      <div className="alert alert-success">
                        {this.state.successMsg}
                      </div>
                    )}
                    {this.state.errorMsg && (
                      <div className="alert alert-danger">
                        {this.state.errorMsg}
                      </div>
                    )}
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: "#6495ED",
                        },
                      }}
                    >
                      <Spin spinning={this.state.loading}>
                        <div className="h6 font-weight-300 mx-2">
                          <Form>
                            <Row className="row-grid align-items-center">
                              {/* nom */}
                              <Col>
                                <FormGroup
                                  className={
                                    this.state.errorName && "has-danger"
                                  }
                                >
                                  <Input
                                    type="text"
                                    name="nom"
                                    id="exempleNom"
                                    placeholder={t("contact.form.n")}
                                    value={this.state.name}
                                    onChange={(e) =>
                                      this.setState({ name: e.target.value })
                                    }
                                  />
                                </FormGroup>
                              </Col>
                              {/* prenom */}
                              <Col md="6">
                                <FormGroup
                                  className={
                                    this.state.errorFirstName && "has-danger"
                                  }
                                >
                                  <Input
                                    type="text"
                                    name="prenom"
                                    id="exemplePrenom"
                                    placeholder={t("contact.form.pn")}
                                    value={this.state.firstname}
                                    onChange={(e) =>
                                      this.setState({
                                        firstname: e.target.value,
                                      })
                                    }
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            {/* email */}
                            <FormGroup
                              className={this.state.errorEmail && "has-danger"}
                            >
                              <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder={t("contact.form.ml")}
                                value={this.state.email}
                                onChange={(e) =>
                                  this.setState({ email: e.target.value })
                                }
                              />
                            </FormGroup>
                            <Row className="row-grid align-items-center">
                              <Col>
                                {/* entrprise */}
                                <FormGroup
                                  className={
                                    this.state.errorEntreprise && "has-danger"
                                  }
                                >
                                  <Input
                                    type="text"
                                    name="entreprise"
                                    id="exempleEntreprise"
                                    placeholder={t("contact.form.sc")}
                                    value={this.state.entreprise}
                                    onChange={(e) =>
                                      this.setState({
                                        entreprise: e.target.value,
                                      })
                                    }
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                {/* telephone */}
                                <FormGroup
                                  className={
                                    this.state.errorTelephone && "has-danger"
                                  }
                                >
                                  <Input
                                    type="text"
                                    name="phone"
                                    id="exTelephone"
                                    placeholder={t("contact.form.ph")}
                                    value={this.state.telephone}
                                    onChange={(e) =>
                                      this.setState({
                                        telephone: e.target.value,
                                      })
                                    }
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            {/* select */}
                            <FormGroup
                              className={this.state.errorObjet && "has-danger"}
                            >
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                value={this.state.objet}
                                onChange={(e) =>
                                  this.setState({ objet: e.target.value })
                                }
                              >
                                <option>
                                  ---- {t("contact.form.op")} ----
                                </option>
                                <option value="Prise de contact">
                                  {t("contact.form.op1")}
                                </option>
                                <option value="Demande de devis">
                                  {t("contact.form.op2")}
                                </option>
                                {this.state.isEnabled === "true" && (
                                  <option value="Recrutement">
                                    Recrutement
                                  </option>
                                )}
                              </Input>
                            </FormGroup>
                            {/* objet */}
                            {/* <FormGroup>
                          <Input
                            type="text"
                            name="objet"
                            placeholder="Objet*"
                          />
                        </FormGroup> */}
                            {/* message */}
                            <FormGroup
                              className={
                                this.state.errorMessage && "has-danger"
                              }
                            >
                              <Input
                                type="textarea"
                                name="text"
                                placeholder={
                                  this.state.objet === "Recrutement"
                                    ? t("contact.form.of")
                                    : "Message*"
                                }
                                value={this.state.message}
                                onChange={(e) =>
                                  this.setState({ message: e.target.value })
                                }
                              />
                            </FormGroup>
                            {this.state.objet === "Recrutement" && (
                              <>
                                <FormGroup>
                                  <Label for="exampleFileCV">
                                    {t("contact.form.cv")}
                                  </Label>
                                  <Input
                                    type="file"
                                    name="fileCV"
                                    id="exampleFileCV"
                                    onChange={this.handleCV}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label for="exampleFileMotivation">
                                    {t("contact.form.lm")}
                                  </Label>
                                  <Input
                                    type="file"
                                    name="fileMotivation"
                                    id="exampleFileMotivation"
                                    onChange={this.handleLettreMotivation}
                                  />
                                </FormGroup>
                              </>
                            )}

                            {/* check */}
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={this.state.checkbox}
                                  onChange={(e) =>
                                    this.setState({
                                      checkbox: e.target.checked,
                                    })
                                  }
                                />
                                {t("contact.form.tm")}
                              </Label>
                            </FormGroup>
                            <div className="my-4">
                              <Button
                                onClick={this.handleSubmit}
                                disabled={!this.state.checkbox && true}
                              >
                                {t("contact.form.bt")}
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </Spin>
                    </ConfigProvider>
                  </div>
                  <div className="pt-2 border-top">
                    <div>
                      <h3>{t("contact.title2.h2_1")}</h3>
                      <p>{t("contact.title2.p")}</p>
                    </div>
                    <Row className="justify-content-center row-grid align-items-center">
                      <Col>
                        <div className="mt-3">
                          <h6 className="text-uppercase">
                            {" "}
                            Outsourcing Malagasy Compagny (O.M.C)
                          </h6>
                          <p>
                            <img alt="..." src={location} width={20} />{" "}
                            {t("contact.title2.h6_1")}
                            :<br /> ANTANANARIVO
                          </p>
                          {/* <p>
                            <i className="fa fa-phone" />{" "}
                            {t("contact.title2.h6_2")} :<br /> +261 34 04 135 96
                            <br />
                            06 92 70 61 49 (Réunion)
                          </p> */}
                          <p>
                            <i className="fa fa-envelope" /> Email :<br />{" "}
                            contact@omc-solutions.fr
                            <br />
                            mo.salah@omc-solutions.fr
                          </p>
                          {/* <p>
                            <h6>{t("contact.title2.h6_3")} :</h6>
                            Rouhaila RAKOTOARIVONY
                            <br />
                            rouhailati.bsc@gmail.com
                          </p> */}
                        </div>
                      </Col>
                      <Col className="order-md-4" md="6">
                        <Carousel autoplay autoplaySpeed={8000}>
                          <img
                            alt="..."
                            className="img-fluid mt-4"
                            src={require("assets/img/theme/lac.jpeg")}
                          />
                          <img
                            alt="..."
                            className="img-fluid mt-4"
                            src={require("assets/img/theme/ant2.jpg")}
                          />
                        </Carousel>
                      </Col>
                    </Row>
                  </div>
                  <div className="my-5">
                    <h3>{t("contact.title2.h2_2")}</h3>
                    <ul>
                      <li>
                        <h5>Reunion</h5>
                      </li>
                      <li>
                        <h5>Mayotte</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withTranslation()(Contact);
