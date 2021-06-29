import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./LandingPage";

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
