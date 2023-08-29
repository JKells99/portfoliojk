import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="white" variant="light" expand="xl" style={{borderBottom: '1px solid #ccc', height:'80px'}}>
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'#0d6efd'}}>
            <FontAwesomeIcon icon={faGhost} /> Jordan Kelloway
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">About Me</NavLink> 
                    <NavLink className ="nav-link" to="/watchList">Projects</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Contact Me</NavLink>       

                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header