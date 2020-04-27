import React from 'react';

import Avatar from '../components/Avatar'
import Carousel from '../components/Carousel';

function HomePage(props){
  return(
    <div>
      <Avatar title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
}
export default HomePage