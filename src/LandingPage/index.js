import React, { lazy, Suspense } from "react";
import Home from "./../Sections/Home";
const About = lazy(() => import("./../Sections/About"));
const Work = lazy(() => import("./../Sections/Work"));

function LandingPage() {
    return (
        <>
            <Home />
            <Suspense fallback="Loading...">
                <About />
                <Work />
            </Suspense>
        </>
    );
}

export default LandingPage;
