import React from "react";

import "./Hero.css";
import Container from "../Layout/Container";

const Hero = () => {
  return (
    <section className="hero">
    <img src="/assets/images/heroImg.png" alt="" />
      <Container>
        <div className="heroText">
          <h1>
            We <span>build</span> the future
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum. Nullam risus,
            ullamcorper elit lobortis gravida. Dolor amet sit pulvinar volutpat
            vestibulum tortor, tortor dolor accumsan. Magna risus sed velit
            venenatis neque. Dui egestas nulla sagittis facilisis orci, egestas
            tellus, morbi amet.
          </p>
          <div className="btns">
            <div className="btn">View project</div>
            <div className="btn">Contact us</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
