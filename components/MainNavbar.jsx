import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

const MainNavbar = () => {
  // dynamic navigation link items array ---------------
  const navLinks = [
    { name: "Members of DUAC", url: "#members" },
    { name: "Member Registration", url: "#member-registration" },
    { name: "Events", url: "#events" },
    { name: "Event Registration", url: "#event-registration" },
    { name: "Gallery", url: "#gallery" },
  ];

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        {/* Navbar branding section ------------- */}
        <Navbar.Brand href="/">
          <Image
            alt="DUAC Logo"
            src="../duac-logo/duac-logo-300.png"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{" "}
          <Navbar.Text>Dhaka Univeristy Alumni Chattogram</Navbar.Text>
        </Navbar.Brand>
        {/* navbar navigation links --------------- */}
        <Nav className="justify-content-end">
          {navLinks.map((link) => (
            <Nav.Link key={link.name} href={link.url}>
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
