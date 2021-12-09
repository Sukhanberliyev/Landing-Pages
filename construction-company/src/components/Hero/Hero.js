import React from "react";

import "./Hero.css";
import Container from "../Layout/Container";

const Hero = () => {
  return (
    <section className="hero">
      <img src="/assets/images/heroImg.png" alt="" />
      <Container>
        <div className="heroText">
          <h1 className="heroTitle">
            We <span>build</span> the future
          </h1>
          <p className="heroDescription">
            Flex Architecture is a large construction holding and leader in the
            construction market industry. The holding has been operating since
            2002 and during this time has earned a reputation as a professional
            and reliable partner. We also made up of divisions and directorates
            in various fields of construction, development and engineering.
          </p>
          <div className="btns">
            <a href="#" className="btn">
              View project
            </a>
            <a href="mailto:sukhanberliev@gmail.com" className="btn">
              Contact us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
