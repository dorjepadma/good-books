import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {
  return(
    <Container fluid={true}>
      <Row className='justify-content-center'>
        <Col xs={4} md={8}>
          <Image className='avatar-img' src={require('../assets/images/coffee.jpg')} roundedCircle />
        </Col>
        <Col md={8}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
export default Content;