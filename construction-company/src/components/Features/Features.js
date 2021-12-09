import React from "react";
import Container from "../Layout/Container";

import classes from "./Features.module.css";

const Whyus = () => {
  return (
    <section>
      <Container>
        <div className={classes.featureContent}>
          <h4>WHY CHOOSE US</h4>
          <h3>
            Our design <span>change</span> the way people
            <br /> live, work, learn, and play
          </h3>
          <p>
            Fast forward 20 years and we are operating from four international
            offices across two continents, and designing in over 30 countries.
          </p>
        </div>
        <div className={classes}>
          <div className={classes.featuresCol}>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Any Size</p>
              <p>From a small building to a huge skyscrapers of your choice</p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>From Anywhere</p>
              <p>We operate no matter of place or location around the world</p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Data Driven</p>
              <p>
                Design based on data provided by our Research and Development
                team
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Green Building</p>
              <p>
                Great experience of innovative green technologies and processes
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>“B” Corp Certified</p>
              <p>
                Highest standards of social and environmental performance and
                public transparency
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>All About People</p>
              <p>
              We are 35,000 people united in building for a better society
              </p>
            </div>
          </div>
          {/* <div className={classes.featuresCol}>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>First Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>First Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>First Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Whyus;
