import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";
import {
  SiApachejmeter,
  SiFirebase,
  SiNextdotjs,
  SiOracle,
  SiTalend
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/"  target="_blank" rel="noopener noreferrer">
          <DiReact />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <SiNextdotjs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
          <SiFirebase />
        </a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.talend.com/" target="_blank" rel="noopener noreferrer">
          <SiTalend />
        </a>
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
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
