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

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { withTranslation } from "react-i18next";
// reactstrap components
import { Button, Container, Row, Col, Modal, NavLink } from "reactstrap";
import imgCollabs from "../../assets/img/theme/collaborator.svg";

class JoinUs extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleChangeStatus = () => {
    return localStorage.setItem("isEnabled", "true");
  };

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
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col lg="6">
                    <h1 className="text-white">{t("join.title")}</h1>
                    <p className="lead text-white">{t("join.des")}</p>
                    <Row className="my-4">
                      {/* Link to detail */}
                      <Col className="pt-1">
                        <Button
                          block
                          className="mb-3"
                          color="warning"
                          type="button"
                          onClick={() => this.toggleModal("notificationModal")}
                        >
                          {t("join.bt1.title")}
                        </Button>
                        <Modal
                          className="modal-dialog-centered modal-danger"
                          contentClassName="bg-gradient-danger"
                          isOpen={this.state.notificationModal}
                          toggle={() => this.toggleModal("notificationModal")}
                        >
                          <div className="modal-body">
                            <div className="py-3">
                              <div className="  text-center">
                                <i className="ni ni-bell-55 ni-3x" />
                              </div>
                              <h4 className="heading mt-4">
                                {t("join.bt1.tl")}
                              </h4>
                              <p>
                                {t("join.bt1.d1")}
                                <br />
                                {t("join.bt1.d2")}
                              </p>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <NavLink href={`/${language}/contact/`}>
                              <Button
                                className="btn-white"
                                color="default"
                                type="button"
                                onClick={this.handleChangeStatus}
                              >
                                {t("join.bt1.bt1")}
                              </Button>
                            </NavLink>
                            <Button
                              className="text-white ml-auto"
                              color="link"
                              data-dismiss="modal"
                              type="button"
                              onClick={() =>
                                this.toggleModal("notificationModal")
                              }
                            >
                              {t("join.bt1.bt2")}
                            </Button>
                          </div>
                        </Modal>
                      </Col>
                      {/* Link to contact page */}
                      <Col>
                        <NavLink href={`/${language}/contact/`}>
                          <Button
                            className="btn-1 btn-neutral"
                            color="primary"
                            outline
                            type="button"
                            onClick={this.handleChangeStatus}
                          >
                            {t("join.bt2")}
                          </Button>
                        </NavLink>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="text-center floating">
                    <img
                      alt="..."
                      className="img-fluid  mt-4"
                      src={imgCollabs}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withTranslation()(JoinUs);
