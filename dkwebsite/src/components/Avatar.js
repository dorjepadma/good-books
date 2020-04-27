import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron'

function Avatar(props) {
  return(
  <Jumbotron className='bg-transparent jumbotron-fluid p-0' >
    <Container fluid={true}>
      <Row className='justify-content-center py-5'>
        <Col md={6} sm={12}>
          { props.title && <h1 className='display-3 font-weight-bold justify-content-right'>{props.title}</h1> }
          { props.subtitle && <h3 className='display-4 font-weight-light justify-content-center'>{props.subtitle}</h3> }
          { props.text && <h3 className='display-4  font-weight-light justify-content-center'>{props.text}</h3> }
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  );
}
export default Avatar