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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum.
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
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
          <div className={classes.partner}>
            <div className={classes.logoImg}>
              <img src="/assets/images/partners/3m.png" alt="partnerImage" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
