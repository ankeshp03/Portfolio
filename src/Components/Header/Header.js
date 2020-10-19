import React, { useState, useMemo } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from "react-scroll";
import Logo from "./../../assets/logo.svg";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import links from './links.json';

const Header = () => {
    const [applyNavStyles, setApplyNavStyle] = useState(false);

    useScrollPosition(({ currPos }) => {
        const isShow = currPos.y < -30
        if (isShow !== applyNavStyles) setApplyNavStyle(isShow)
    },
        [applyNavStyles],
        false,
        false,
        1);

    return useMemo(
        () => (
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="light" className={`headerNav${(applyNavStyles ? " scrollActive" : "")}`}>
                <Navbar.Brand href="/" className="p0">
                    <Image src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav as="ul" className="navigationBar">
                        {
                            links.map(({ key, path, label }, index) => (
                                <Nav.Link as="li" key={key} className="navigationLink">
                                    <Link
                                        className="navigationLinkItem"
                                        activeClass="active"
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        {label}
                                    </Link>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ),
        [applyNavStyles]
    )
}

export default Header;
