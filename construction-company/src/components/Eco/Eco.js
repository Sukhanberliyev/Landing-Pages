import React from "react";

import classes from "./Eco.module.css";
import Container from "../Layout/Container";

const Eco = () => {
  return (
    <section>
      <Container>
        <div className={classes.ecoContent}>
          <h4>ECO FRIENDLY</h4>
          <h3>
            We do <span>care</span> about mother earth
          </h3>
          <p>
            A few generations ago it seemed like the world’s resources were
            infinite, and people needed only access them to create business and
            grow humanity. Today we know how false that is.
          </p>
        </div>
        <div className={classes.ecoFeatures}>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>85.5%</p>
            </div>
            <p>Number one company in terms of recycling materials</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>>4Mio</p>
            </div>
            <p>Less than average cubic meters of water reused in 2020</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>20.000</p>
            </div>
            <p>Numbers of truckloads saved through the recycling the asphalt</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>15.000</p>
            </div>
            <p>Number of plant species which where planted around the world</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Eco;
