import React from 'react';
import Home from './../Sections/Home/Home';
import Work from './../Sections/Work/Work';
import Skills from './../Sections/Skills/Skills';
import Contact from './../Sections/Contact/Contact';

function LandingPage() {
    return (
        <div className="landingPageWrapper">
            <Home />
            <Work />
            <Skills />
            <Contact />
        </div>
    )
}

export default LandingPage;