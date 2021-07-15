import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ThemeToggleButton = ({ theme: { buttonType, clickCallback } }) => {
    return (
        <Button
            variant="default"
            className="theme-toggle--button p0"
            onClick={clickCallback}
        >
            <span className={`shape ${buttonType}`}></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
            <span className="ray"></span>
        </Button>
    );
};

ThemeToggleButton.PropTypes = {
    theme: {
        buttonType: PropTypes.string,
        clickCallback: PropTypes.function
    }
};

export default ThemeToggleButton;
