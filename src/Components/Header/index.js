import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from "./../../assets/logo.svg";
import links from "./links.json";
import ToggleThemeButton from "./../ThemeToggleButton";

const Header = ({ theme }) => {
    return (
        <Navbar
            collapseOnSelect
            fixed="top"
            expand="lg"
            variant="light"
            className="wrapper header-nav"
        >
            <Navbar.Brand href="#home">
                <Image src={Logo} alt="Logo" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
            </Navbar.Collapse> */}
            <Nav className="ml-auto">
                {links.map(({ key, path, label }, index) => (
                    <Nav.Link key={key} eventKey={index} href={path}>
                        {label}
                    </Nav.Link>
                ))}
                <ToggleThemeButton theme={theme}>
                    <span>moons</span>
                </ToggleThemeButton>
            </Nav>
        </Navbar>
    );
};

Header.PropTypes = {
    theme: {
        buttonType: PropTypes.string,
        clickCallback: PropTypes.func
    }
};

export default Header;
