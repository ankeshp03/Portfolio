import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from "./../../assets/logo.svg";
import links from "./links.json";
import ToggleThemeButton from "./../ThemeToggleButton";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Header = ({ theme }) => {
    const headerRef = useRef(null);
    const [headerClass, setHeaderClass] = useState("");

    useScrollPosition(() => {
        const headerHeight = headerRef.current.getBoundingClientRect().height;
        if (
            document.documentElement.scrollTop >
            Math.max(window.innerHeight, 350) - headerHeight
        ) {
            setHeaderClass(" header--shadow");
        } else {
            setHeaderClass("");
        }
    });

    return (
        <Navbar
            ref={headerRef}
            collapseOnSelect
            fixed="top"
            expand="lg"
            variant="light"
            className={`wrapper header-nav${headerClass}`}
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

Header.propTypes = {
    theme: PropTypes.object
};

export default Header;
