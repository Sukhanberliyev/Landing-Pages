import React from "react";

import classes from "./Partners.module.css";
import Container from "../Layout/Container";

const Partners = () => {
  return (
    <section>
      <Container>
        <div className={classes.partnersContent}>
          <h4>PARTNERS</h4>
          <h3>
            Trusted by market <span>leaders</span>
          </h3>
          <p>
            We are pleased to work with thousands of partners. Those who work
            with us globally include
          </p>
        </div>
        <div className={classes.partners}>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/hensel.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/walsh.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/haskell.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/hitachi.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/lendlease.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/turner.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/aecom.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/skanska.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img
                src="/assets/images/partners/jacobs.png"
                alt="partnerImage"
              />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/pcl.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/fluor.png" alt="partnerImage" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
