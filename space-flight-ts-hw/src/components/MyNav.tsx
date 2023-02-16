import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Space Flight News</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/awedfa">
            <div
              className={
                location.pathname === "/adad" ? "nav-link active" : "nav-link"
              }
            >
              Articles
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
