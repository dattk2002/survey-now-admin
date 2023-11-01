import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Survey Now ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/createdsurvey" className="nav-link">
              Created Survey
            </NavLink>
            <NavLink to="/statistic" className="nav-link">
              Statistic
            </NavLink>
            <NavLink to="/userlist" className="nav-link">
              User List
            </NavLink>
            <NavLink to="/usersurveyed" className="nav-link">
              User Surveyed
            </NavLink>
            <NavLink to="/redeem-requests" className="nav-link">
              Redeem Requests
            </NavLink>
            <NavLink to="/transaction-history" className="nav-link">
              Transaction History
            </NavLink>
            <div className="avatar-dropdown">
              <Avatar
                alt="Ducki ducki"
                src="https://i.pinimg.com/564x/04/55/2e/04552e8c76b3e5dec67bd23345b26971.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <NavDropdown id="basic-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
