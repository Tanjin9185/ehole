import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:+8801619980401">01619980401</a>
            </li>
            <li>
              <FaRegEnvelopeOpen />
              <a href="mail-to:tanjin.ahamed123@gmail.com">
                tanjin.ahamed123@gmail.com
              </a>
            </li>
          </ul>
          <div>
            <BsPhone />{' '}
            <a href="https://play.google.com/store/apps/details?id=bd.com.ehole.ehole">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <marquee ><b>This Is my New Newspaper</b></marquee> */}
    </div>
  );
};

export default Header;
