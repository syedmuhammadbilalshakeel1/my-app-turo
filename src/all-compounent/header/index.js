import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./app.css";

function AutoLayoutSizingExample() {
    
  return (
    <Container>
      <Row>
        {/* <Col></Col> */}
        <Col className="underlinetext  col d-flex text-decoration-underline text-secondary justify-content-center py-3 topbar_text text-center">Turo has launched in New York! Tap to explore cars.</Col>
        {/* <Col></Col> */}
      </Row>
     
    </Container>
  );
}

export default AutoLayoutSizingExample;