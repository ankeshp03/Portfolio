import React, { lazy, Suspense, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import LandingPage from "./LandingPage";
const Footer = lazy(() => import("./Components/Footer"));

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
                        buttonType: isDarkTheme ? "sun" : "moon"
                    }}
                />
                <LandingPage />
                <Suspense fallback="Loading...">
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
