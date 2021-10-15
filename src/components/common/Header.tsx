import logo from 'assets/images/logo.png';
import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag, FiUser } from 'react-icons/fi';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { CgSearchLoading } from 'react-icons/cg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TiMessage } from 'react-icons/ti';

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
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
      {/* middle header */}
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-cemter gap-5 py-3">
            <img className="branding" src={logo} alt="" />
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <CgSearchLoading className="text-width" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3 ">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <IoIosNotificationsOutline />
              </li>
              <li>
                <TiMessage />
              </li>
              <li>
                <FiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <marquee ><b>This Is my New Newspaper</b></marquee> */}
    </div>
  );
};

export default Header;
