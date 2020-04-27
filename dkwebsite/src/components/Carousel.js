import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Poegram from '../assets/images/poegram.png';
import Cosmo from '../assets/images/cosmo.jpg';
import Serpent from '../assets/images/Khendo-Khani.jpg'

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id:0,
          title: 'Poegram',
          subTitle: 'Pure Poetry Art',
          imgSrc: Poegram,
          link: 'http://poegram-demo.herokuapp.com/AllPoegrams',
          selected: false
        },
        {
          id:1,
          title: 'Dorje Shinno',
          subTitle: 'Single Stroke Serpent Painting',
          imgSrc: Serpent,
          link: 'https://serpentpainting.com',
          selected: false
        },
        {
          id:2,
          title: 'Salud!',
          subTitle: 'To enjoy',
          imgSrc: Cosmo,
          link: 'http://poegram-demo.herokuapp.com/AllPoegrams',
          selected: false
        },
          
      ]

    }
  }
  handleCardClick = (id, card) => {

    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  }
  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )

  }
}
export default Carousel