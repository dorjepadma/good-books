import React from 'react';
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

  const style = useSpring({opacity: 1, from: {opacity:0}});
    return(
      <animated.div className='dk-card-info' style={style}>
        <p className='dk-card-title'>{props.title}</p>
        <p className='dk-card-subtitle'>{props.subtitle}</p>
        <a href= {props.link} target='_blank' rel='noopener noreferrer'>View
        </a>
        </animated.div>

    );

}
export default CardInfo;