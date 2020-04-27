import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

function Footer() {
  return(
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className="border-top justify-content p-3">
        <Col className='p-0 d-flex justify-content-right' md={3}>
          Site built by Dorje Kirsten
        </Col>
        </Row>
      </Container>
    </footer>

  )
}
export default Footer;