import React from "react";

import Container from "../Layout/Container";
import classes from "./Dna.module.css";
const Dna = () => {
  return (
    <section>
      <Container>
        <div className={classes.dnaContent}>
          <h4>OUR DNA</h4>
          <h3>
            We do <span>care</span> about mother earth
          </h3>
        </div>
        <div className={classes.dna}>
          <div className={classes.ceo}>
            <div className={classes.imageOne}>
              <img src="/assets/images/ceo1.png" alt="ceo" />
            </div>
            <div className={classes.imageTwo}>
              <img src="/assets/images/ceo2.png" alt="ceo" />
              <img src="/assets/images/ceo3.png" alt="ceo" />
            </div>
          </div>
          <div className={classes.message}>
            <div className={classes.quote}>
              <p className={classes.quoteDetails}>
                "Architecture and design is not about buildings and skyscrapers,
                it is all about people"
              </p>
              <p>
                Throughout history, architecture has stood as a representation
                of society, reflecting the values, successes, and eventual
                downfall of civilizations over time. From the monumental
                structures to the residences and buildings that make up the
                fabric of a city, we can learn a lot about who the people were
                who inhabited them long before our time.
              </p>
            </div>
            <div className={classes.ceoInfo}>
              <div className={classes.info}>
                <p className={classes.name}>Sicilia Benford Mcmillian</p>
                <p>Founder of Flex Architecture</p>
              </div>
              <div className={classes.signature}>
                <img src="/assets/images/partners/dna.svg" alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dna;
