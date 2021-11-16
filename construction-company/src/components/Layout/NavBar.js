import React, { useState, useEffect } from 'react'
import  "./NavBar.css"


const NavBar = () => {
   const [open, setOpen] = useState(false);

  const navBarHandler = () => {
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  };
    useEffect(() => {
    window.addEventListener("resize", navBarHandler);
    return () => window.removeEventListener("resize", navBarHandler);
  }, []);


   return (
      <div className="NavBar">
      <div className="nav-container">
         <div className="desktopNav">
            <div className="logo">FutureDesign Group</div>
            <div className="navMenu">
               <a href="#about" className="navLink">About Us</a>
               <a href="#features" className="navLink">Features</a>
               <a href="#whyus" className="navLink">Why Us</a>
               <a href="#partners" className="navLink">Partners</a>
               <a href="#dna" className="navLink">DNA</a>
               <a href="#contact" className="navLink">Contacts</a>
            </div>
            <div className="burger" onClick={() => setOpen(!open)}>
               <span className={open ? "burgerLine active" : "burgerLine"}></span>
               <span className={open ? "burgerLine active" : "burgerLine"}></span>
               <span className={open ? "burgerLine active" : "burgerLine"}></span>
            </div>
            </div>
         <div className="mobile">
            <nav className={open ? "mobileNav active" : "mobileNav"}>
               <a href="#about" className="mobileLink">About Us</a>
               <a href="#features" className="mobileLink">Features</a>
               <a href="#whyus" className="mobileLink">Why Us</a>
               <a href="#partners" className="mobileLink">Partners</a>
               <a href="#dna" className="mobileLink">DNA</a>
               <a href="#contact" className="mobileLink">Contacts</a>
            </nav>
            {open && <div className="backdrop" onClick={() => setOpen(!open)}></div>}
         </div>
      </div>
      </div>
   )
}

export default NavBar
