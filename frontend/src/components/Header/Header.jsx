import Button from "@restart/ui/esm/Button";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Record Request Manager
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {/* <Nav.Link href="/myrequests"> */}
              <Nav.Link as={Link} to="/myrequests">
                All Requests
              </Nav.Link>
              {/* </Nav.Link> */}

              <NavDropdown title="Kevin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
