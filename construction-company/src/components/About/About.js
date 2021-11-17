import React from "react";
import Container from "../Layout/Container";

import "./About.css";

const About = () => {
  return (
    <section id="">
      <Container>
        <div className="about">
          <div className="aboutContent">
            <h4>EXPERIENCE</h4>
            <h3>
              We are <span>professionals</span> in our business
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
              gravida non congue tortor dictum elementum. Nullam risus,
              ullamcorper elit lobortis gravida. Dolor amet sit pulvinar
              volutpat vestibulum tortor, tortor dolor accumsan. Magna risus sed
              velit venenatis neque. Dui egestas nulla sagittis facilisis orci,
              egestas tellus, morbi amet.
            </p>
            <ul className="aboutFeatures">
              <li>
                <h2 className="numbers">185</h2>
                <p className="numberText">PROJECTS</p>
              </li>
              <li>
                <h2 className="numbers">185</h2>
                <p className="numberText">PROJECTS</p>
              </li>
              <li>
                <h2 className="numbers">185</h2>
                <p className="numberText">PROJECTS</p>
              </li>
              <li>
                <h2 className="numbers">185</h2>
                <p className="numberText">PROJECTS</p>
              </li>
            </ul>
          </div>
          <div className="aboutExperience">
            <div className="aboutYears">
              <span>2002</span>
              <span>2022</span>
            </div>
            <div className="aboutImg">
            <img src="/assets/images/experience.png" alt="" />
              <div className="square">
                <div className="numberImg">
                  <img src="/assets/images/20.png" alt="" />
                </div>
                <p className="experienceText">YEARS OF EXPERIENCE IN <br/> ARCHETECTURE INDUSTRY</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
