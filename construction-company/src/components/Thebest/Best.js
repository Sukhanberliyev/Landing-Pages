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
              This time 20 years ago, Company Name was just a pen, a drawing
              board and an idea of one young mind: Meredith Vackerman, a ceo of
              Flex Architecture. At their kitchen table, she sketched out their
              first design and the future of Flex Architecture. Since then, we
              have been coloring the streets, and change the shape of world.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Best;
