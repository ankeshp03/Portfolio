import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ThemeToggleButton = ({ theme: { buttonType, clickCallback } }) => {
    return (
        <Button
            variant="default"
            className="theme-toggle--button p0"
            onClick={clickCallback}
            aria-label="Theme Toggle"
        >
            <span className={`shape ${buttonType}`}></span>
            <span className="rays--container">
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                {/* <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span>
                <span className="ray"></span> */}
            </span>
        </Button>
    );
};

ThemeToggleButton.propTypes = {
    theme: PropTypes.object
};

export default ThemeToggleButton;
