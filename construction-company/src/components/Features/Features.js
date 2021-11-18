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
            One of the <span>leading</span> architecture <br /> companies in the
            world
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum. Nullam risus,
            ullamcorper elit lobortis gravida. .
          </p>
        </div>
        <div className={classes}>
          <div className={classes.featuresCol}>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>First Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Second Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Third Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Fourth Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Fifth Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
              </p>
            </div>
            <div className={classes.feature}>
              <p className={classes.featureTitle}>Sixth Reason</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                tortor gravida non congue
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
