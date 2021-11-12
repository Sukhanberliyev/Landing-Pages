import React from 'react'
import classes from "./NavBar.module.css"
import Container from "../Layout/Container"

const NavBar = () => {
   return (
      <div className={classes.NavBar}>
      <Container>
         <div className={classes.desktop}>
            <div className={classes.logo}>FutureDesign Group</div>
            <div className={classes.navMenu}>
               <a href="#" className={classes.navLink}>About Us</a>
               <a href="#" className={classes.navLink}>Features</a>
               <a href="#" className={classes.navLink}>Why Us</a>
               <a href="#" className={classes.navLink}>Partners</a>
               <a href="#" className={classes.navLink}>DNA</a>
               <a href="#" className={classes.navLink}>Contacts</a>
            </div>
         </div>
         <div className={classes.mobile}></div>
      </Container>
      </div>
   )
}

export default NavBar
