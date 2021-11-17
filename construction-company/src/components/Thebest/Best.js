import React from "react";

import classes from "./Best.module.css";
import Container from "../Layout/Container";

const Best = () => {
  return (
    <section>
      <Container>
        <div className={classes.best}>
          <div className={classes.video}>
            <img src="/assets/images/video.png" alt="img" />
            <div className={classes.play}>
              <img src="/assets/images/play.svg" alt="playBtn" />
            </div>
          </div>
          <div className={classes.bestContent}>
            <h4>THE BEST</h4>
            <h3>
              One of the <span>leading</span> architecture companies in the
              world
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
              gravida non congue tortor dictum elementum. Nullam risus,
              ullamcorper elit lobortis gravida. Dolor amet sit pulvinar
              volutpat vestibulum tortor, tortor dolor accumsan. Magna risus sed
              velit venenatis neque. Dui egestas nulla sagittis facilisis orci,
              egestas tellus, morbi amet.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Best;
