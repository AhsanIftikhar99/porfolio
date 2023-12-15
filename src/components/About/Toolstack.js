import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApachejmeter,
  SiOracle,
  SiPostman,
  SiSlack,
  SiTalend,
  SiVercel,
  SiVisualstudiocode
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.oracle.com/pk/database/sqldeveloper/" target="_blank" rel="noopener noreferrer">
          <SiOracle />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer">
          <SiApachejmeter />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.talend.com/" target="_blank" rel="noopener noreferrer">
          <SiTalend />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
