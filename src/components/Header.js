import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';

const Header = () => {
 return (
  <Navbar bg='navbar-dark bg-dark' variant='dark'>
   <Container fluid='md'>
    <Navbar.Brand className='headerText'>
     <h2>React Employee Directory</h2>
     <p>
       Search for employees <br/>first name lastname or by phone number in lower case
     </p>
    </Navbar.Brand>
    <SearchForm />
   </Container>
  </Navbar>
 );
};

export default Header;
