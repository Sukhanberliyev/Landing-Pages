import React from "react";
import Container from "./Container";
import classes from "./CTA.module.css";
const CTA = () => {
  return (
    <section>
      <Container>
        <div className={classes.cta}>
          <h4 className={classes.ctaSubTitle}>GET IN TOUCH</h4>
          <h3 className={classes.title}>
            We do <span>care</span> about mother earth
          </h3>
          {/* <p>Contact us</p> */}
          <div className={classes.ctaBtn}>Contact us</div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
