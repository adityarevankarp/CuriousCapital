import React, { Suspense } from "react";
// const About = React.lazy(() => import("../Components/About"));
const Landing = React.lazy(() => import("../Components/Landing"));
// const Footer = React.lazy(() => import("../Components/Footer"));

const LandingPage = () => {
  return (
    <div>
      <Suspense>
        <Landing />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
                <About />   
            </Suspense>  
            <Suspense>
                <Footer />
            </Suspense> */}
    </div>
  );
};

export default LandingPage;
