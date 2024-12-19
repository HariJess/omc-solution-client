import React from "react";
import { Link, Navigate } from "react-router-dom";
import Headroom from "headroom.js";
import { withTranslation } from "react-i18next";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Modal,
  Input,
} from "reactstrap";
import CookieConsent from "react-cookie-consent";
import { FR } from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/react/3x2";
import "./nav.css";
class DemoNavbar extends React.Component {
  state = {
    collapseClasses: "",
    collapseOpen: false,
    select: localStorage.getItem("language") || "fr",
    tempSelect: localStorage.getItem("language") || "fr", // Sélection de langue temporaire
    redirectToHome: "", // État pour gérer la redirection
    redirectBool: false,
  };

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();

    // Assurez-vous que la langue est bien configurée au chargement
    this.props.i18n.changeLanguage(this.state.select);
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleTempLanguageChange = (newLanguage) => {
    this.setState({ tempSelect: newLanguage });
  };

  applyLanguageChange = () => {
    const { tempSelect } = this.state;
    const { i18n } = this.props;

    this.setState({ select: tempSelect, isModalOpen: false });
    localStorage.setItem("language", tempSelect);
    i18n.changeLanguage(tempSelect);

    // Construire le nouveau chemin en fonction de la langue sélectionnée et du chemin actuel
    const currentPath = window.location.pathname.split("/").slice(2).join("/"); // Extrait le chemin actuel sans la langue
    const newPath = `/${tempSelect}/${currentPath}`;

    // Déclenche la redirection vers le nouveau chemin
    this.setState({ redirectToHome: newPath }, () => {
      this.setState({ redirectBool: true }, () => {
        window.location.reload(true);
      });
    });
  };

  render() {
    const { t } = this.props;
    const { redirectToHome } = this.state;

    if (redirectToHome) {
      return <Navigate to={redirectToHome} />;
    }

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom  pt-4"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/omc.png")}
                  style={{ width: "175px", height: "auto" }}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/omc.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={`/${this.state.select}/`}
                    >
                      {t("header.nav_1")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Nav
                      className="navbar-nav-hover align-items-lg-center"
                      navbar
                    >
                      <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                          <span className="nav-link-inner--text">
                            {t("header.nav_2.def")}
                          </span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-xl">
                          <div className="dropdown-menu-inner">
                            <Media
                              className="d-flex align-items-center"
                              href={`/${this.state.select}/about-us`}
                            >
                              <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i className="ni ni-spaceship" />
                              </div>
                              <Media body className="ml-3">
                                <h6 className="heading text-primary mb-md-1">
                                  {t("header.nav_2.dp_1")}
                                </h6>
                                <p className="description d-none d-md-inline-block mb-0">
                                  {t("header.nav_2.dp_des_1")}
                                </p>
                              </Media>
                            </Media>
                            {/* <Media
                              className="d-flex align-items-center"
                              href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                            >
                              <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i className="fa fa-list" />
                              </div>
                              <Media body className="ml-3">
                                <h6 className="heading text-primary mb-md-1">Nos services</h6>
                                <p className="description d-none d-md-inline-block mb-0">
                                  Découvrez les services que nous vous proposons.
                                </p>
                              </Media>
                            </Media> */}
                            <Media
                              className="d-flex align-items-center"
                              href={`/${this.state.select}/pricing`}
                            >
                              <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i className="fa fa-euro" />
                              </div>
                              <Media body className="ml-3">
                                <h5 className="heading text-warning mb-md-1">
                                  {t("header.nav_2.dp_2")}
                                </h5>
                                <p className="description d-none d-md-inline-block mb-0">
                                  {t("header.nav_2.dp_des_2")}
                                </p>
                              </Media>
                            </Media>
                          </div>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={`/${this.state.select}/contact`}
                    >
                      {t("header.nav_3")}
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href={`/${this.state.select}/join-us`}
                    >
                      <span className="nav-link-inner--text ml-1">
                        {t("header.nav_4")}
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-2">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={() => this.toggleModal("notificationModal")}
                    >
                      <span className="nav-link-inner--text">
                        {this.state.select === "fr" ? (
                          <>
                            <FR className="flag" />
                            FR
                          </>
                        ) : (
                          <>
                            <US className="flag" />
                            EN
                          </>
                        )}
                        {/* <i className="ni ni-world-2 text-primary" /> */}
                      </span>
                    </Button>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={this.state.notificationModal}
                      toggle={() => this.toggleModal("notificationModal")}
                    >
                      <div className="modal-header">
                        {/* <h6
                          className="modal-title"
                          id="modal-title-notification"
                        >
                          {t("header.nav_5.text_1")}
                        </h6> */}
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => this.toggleModal("notificationModal")}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="py-3 text-center">
                          <i className="ni ni-world-2 ni-3x" />
                          <h4 className="heading mt-4">
                            {t("header.nav_5.text_2")}
                          </h4>
                          <Input
                            className="mb-3"
                            type="select"
                            defaultValue={this.state.tempSelect}
                            onChange={(e) =>
                              this.handleTempLanguageChange(e.target.value)
                            }
                          >
                            <option value="fr">
                              {t("header.nav_5.text_3")}
                            </option>
                            <option value="en">
                              {t("header.nav_5.text_4")}
                            </option>
                          </Input>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="btn-white"
                          color="default"
                          type="button"
                          onClick={this.applyLanguageChange}
                        >
                          {t("header.nav_5.text_5")}
                        </Button>
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => this.toggleModal("notificationModal")}
                        >
                          {t("header.nav_5.text_6")}
                        </Button>
                      </div>
                    </Modal>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <CookieConsent
            location="bottom"
            buttonText={t("header.cookie.bt_1")}
            declineButtonText={t("header.cookie.bt_2")}
            enableDeclineButton
            cookieName="gs876723/uysdgfdhfg76rt3w76tru"
            style={{ background: "#2B373B" }}
            buttonStyle={{
              color: "#000",
              background: "#fff",
              fontSize: "13px",
            }}
            expires={150}
            declineButtonStyle={{
              color: "#fff",
              background: "#fa0000",
              fontSize: "13px",
            }}
            setDeclineCookie={false}
            overlay
          >
            {t("header.cookie.text_1")}
            <a href="/">{t("header.cookie.text_2")}</a>{" "}
            {t("header.cookie.text_3")}
          </CookieConsent>
        </header>
      </>
    );
  }
}

export default withTranslation()(DemoNavbar);
