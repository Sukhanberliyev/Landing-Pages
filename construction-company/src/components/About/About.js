import React from "react";
import Container from "../Layout/Container";

import "./About.css";

const About = () => {
  return (
    <section id="#about">
      <Container>
        <div className="about">
          <div className="aboutContent">
            <h4>EXPERIENCE</h4>
            <h3>
              We are <span>professionals</span> in our business
            </h3>
            <p>
              Our professional team of architects and designers has been in the
              industry for 20 years already. We are experts in our area and we
              have many completed projects and continue to do it today. Flex
              Architecture can gives your business the best building solution it
              needs. That’s why more than 50% of Fortune 100 companies are Flex
              Architecture members.
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
                <p className="experienceText">
                  YEARS OF EXPERIENCE IN <br /> ARCHETECTURE INDUSTRY
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
