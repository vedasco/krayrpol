import React from "react";
import CommonLayout from "../components/common-layout/CommonLayout";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Page404 = () => {
  return (
    <CommonLayout parent="home" title="404">
      <section className="p-0">
        <Container>
          <Row>
            <Col sm="12">
              <div className="error-section">
                <h1>404</h1>
                <h2>page not found</h2>
                <Link href="/">
                  <a className="btn btn-solid"> back to home</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};
export default Page404;
