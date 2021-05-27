import React from "react";
import Navbar from "react-bootstrap/Navbar";
// Import used bootstrap components  from react-bootstrap
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;