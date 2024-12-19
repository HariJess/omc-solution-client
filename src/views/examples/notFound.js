import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Error404 from "../../assets/img/theme/notFound.svg";
import { useTranslation } from "react-i18next";
const NotFoundPage = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <main>
      <Container>
        <Row
          className="align-self-center mt-lg-8 justify-content-center"
          style={{ textAlign: "center" }}
        >
          <Col md={6} className="align-self-center">
            <div className="position-relative mx-3">
              <img src={Error404} className="img-center img-fluid" alt="..." />
            </div>
            <div className="my-4 text-uppercase">
              <p className="display-3">{t("error.p")}</p>
              <Button
                className="btn-icon mb-sm-0"
                color="warning"
                outline
                href={`/${language}/`}
              >
                <span className="btn-inner--text">{t("error.bt")}</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default NotFoundPage;
