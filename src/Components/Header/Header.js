import React, { useState, useEffect, createRef, useMemo, useCallback } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./../../assets/logo.svg";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import links from './links.json';

const Header = () => {
    let linkItemRefs = {};
    const [applyNavStyles, setApplyNavStyle] = useState(false);
    const [highlightStyles, sethighlightStyles] = useState({ left: 0, opacity: 0 });

    useScrollPosition(({ currPos }) => {
        const isShow = currPos.y < -30
        if (isShow !== applyNavStyles) setApplyNavStyle(isShow)
    },
        [applyNavStyles],
        false,
        false,
        1);

    useEffect(() => {
        scroll.scrollToTop();
        // console.log(linkItemRefs[links[0].path]?.current);
    }, []);

    // const handleNavItemClick = (e) => {
    //     // console.log(e.target.clientWidth);
    //     const left = e.target.getBoundingClientRect().x - e.target.closest('.navigationBar').getBoundingClientRect().x;
    //     const width = e.target.getBoundingClientRect().width;

    //     sethighlightStyles({ left, width });
    // };

    const handleNavItemClick = useCallback((to) => {
        const element = linkItemRefs[to]?.current;
        const left = element.getBoundingClientRect().x - element.closest('.navigationBar').getBoundingClientRect().x;
        const width = element.getBoundingClientRect().width;
        // console.log(left, width);
        sethighlightStyles({ left: (left + (width / 2) - 4) + "px", opacity: 1 });
    }, [linkItemRefs]);

    return useMemo(
        () => (
            <Navbar collapseOnSelect fixed="top" expand="md" variant="light" className={`headerNav${(applyNavStyles ? " scrollActive" : "")}`}>
                <Navbar.Brand href="/" className="p0">
                    <Image src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav as="div" className="navigationBar">
                        {
                            links.map(({ key, path, label }, index) => {
                                linkItemRefs[path] = createRef();
                                return (
                                    <Nav.Link as="div" key={key} className={`navigationLink${((index === links.length - 1) ? " pR0" : "")}`}>
                                        <Link
                                            className="navigationLinkItem"
                                            activeClass="active"
                                            to={path}
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}
                                            onSetActive={handleNavItemClick}
                                        >
                                            <span ref={linkItemRefs[path]}>
                                                {label}
                                            </span>
                                        </Link>
                                    </Nav.Link>
                                );
                            })
                        }
                        <div className="activeLinkHighlight" style={{ left: highlightStyles.left, opacity: highlightStyles.opacity }} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ),
        [applyNavStyles, handleNavItemClick, linkItemRefs, highlightStyles]
    )
}

export default Header;
