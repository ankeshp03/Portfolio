import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from "./../../assets/logo.svg";
import links from "./links.json";
import "./header-styles.scss";

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            fixed="top"
            expand="lg"
            variant="light"
            className="headerNav"
        >
            <Navbar.Brand href="#home">
                <Image src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
            >
                <Nav>
                    {links.map(({ key, path, label }, index) => (
                        <Nav.Link key={key} eventKey={index} href={path}>
                            {label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
