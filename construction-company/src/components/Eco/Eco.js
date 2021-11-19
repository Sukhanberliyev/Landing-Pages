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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum. Nullam risus,
            ullamcorper elit lobortis gravida. .
          </p>
        </div>
        <div className={classes.ecoFeatures}>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>85.5%</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>>4Mio</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>20.000</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={classes.ecoFeature}>
            <div className={classes.box}>
              <p className={classes.boxAmount}>15.000</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Eco;
