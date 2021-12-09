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
            Global enterprise <span>solution</span> for <br/> the buildings of
            tomorrow
          </h3>
          {/* <p>Contact us</p> */}
          <a href="mailto:sukhanberliev@gmail.com" className={classes.ctaBtn}>Contact us</a>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
