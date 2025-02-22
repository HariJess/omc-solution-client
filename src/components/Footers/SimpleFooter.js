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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { withTranslation } from "react-i18next";
class SimpleFooter extends React.Component {
  render() {
    const { t } = this.props;
    const language = localStorage.getItem("language");
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-3">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Contact :
                </h3>
                {/* <h6 className=" mb-0 font-weight-light"> */}
                {/* <h6 className=" mb-0">
                  <i className="fa fa-phone" /> : +261 34 04 135 96
                </h6> */}
                {/* <h6 className=" mb-0 font-weight-light"> */}
                <h6 className=" mb-0">
                  <i className="fa fa-envelope" /> : contact@omc-solutions.fr  
                  {/* <i className="fa fa-envelope" /> : mo.salah@omc-solutions.fr  */}
                </h6>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                {/* <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/creativetim"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip> */}
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="#"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="warning"
                  href="#"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="#"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i class="fa fa-linkedin"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Like us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a href="https://www.omc-solutions.fr">Outsourcing Malagasy Compagny</a>. All Rights
                  Reserved
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink href={`/${language}/`}>
                      {t("footer.nav_1")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={`/${language}/about-us`}>
                      {t("footer.nav_2")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`/${language}/contact`}
                      // target="_blank"
                    >
                      {t("footer.nav_3")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`/${language}/join-us`}
                      // target="_blank"
                    >
                      {t("footer.nav_4")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`/${language}/mentions-legales`}
                      // target="_blank"
                    >
                      {t("footer.nav_5")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href={`/${language}/politique`}
                      // target="_blank"
                    >
                      {t("footer.nav_6")}
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default withTranslation()(SimpleFooter);
