import React, { useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./LandingPage";

function App() {
    const [isDarkTheme, setDarkThemeStatus] = useState(false);
    const toggleTheme = () => {
        setDarkThemeStatus(!isDarkTheme);
    };
    return (
        <div
            className={`App ${isDarkTheme ? "theme--dark" : "theme--default"}`}
        >
            <div className="theme">
                <Header
                    theme={{
                        clickCallback: toggleTheme,
                        buttonType: isDarkTheme ? "sun" : "sun"
                    }}
                />
                <LandingPage />
                <Footer />
            </div>
        </div>
    );
}

export default App;
