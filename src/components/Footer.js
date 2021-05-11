import React from 'react';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <Row className='footer fixed-bottom' fixed='bottom'>
      Designed&nbsp;
      <a
        href='https://www.malvinaproduction.com/'
        target='_blank'
        rel='noreferrer noopener'
      >
    hmalvina&nbsp;
      </a>
      | Powered by&nbsp;
      <i className='fab fa-react'> React</i>
    </Row>
  );
};

export default Footer;
