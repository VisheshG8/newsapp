import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link } from "react-router-dom";

const  ColorSchemesExample = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className='sticky-top' bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/">&nbsp;&nbsp;React News</Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse className="justify-content-end" in={expanded}>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/business">Business</Nav.Link>
          <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
          <Nav.Link as={Link} to="/general">General</Nav.Link>
          <Nav.Link as={Link} to="/health">Health</Nav.Link>
          <Nav.Link as={Link} to="/science">Science</Nav.Link>
          <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
          <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ColorSchemesExample;
