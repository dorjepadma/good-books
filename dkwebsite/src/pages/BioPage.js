import React from 'react';
import Avatar from '../components/Avatar'
import Content from '../components/Content'

function BioPage(props) {
  return(
  <div>
    <Avatar title={props.title} />
    <Content>
      <p>Thank you for stopping by. I am Dorje. A poet, astrologer, tea master, and contemplative. Most importantly though, I am a full stack engineer. I have experience with React, Javascript, NodeJS, ExpressJS, dSQL, and MongoDB. </p>

      <p>I spent my twenties and thirties living at Chagdud Gonpa Rigdzin Ling, a buddhist retreat center. Then I left to raise a family and practice astrology. On the way I founded Planet Teas. </p>

      <p>Code is a form of art and poetry. It is a tool for good and evil. It is a builder of a new and better world, I humbly lay myself at the feet of this exciting new craft. I would love to work with you in this noble endeavor. </p>
    </Content>
  </div>
  );
}
export default BioPage