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
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue.”
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Et tortor gravida non congue tortor
                dictum elementum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Et tortor gravida non congue tortor dictum
                elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Et tortor gravida non congue tortor dictum elementum.
              </p>
            </div>
            <div className={classes.ceoInfo}>
              <div className={classes.info}>
                <p className={classes.name}>Robert Alexander Mcmillian</p>
                <p>Founder of BuildInvest Group</p>
              </div>
              <div className={classes.signature}>
                <img src="" alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dna;
