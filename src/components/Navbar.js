import React, { useState } from 'react'


export default function Navbar() {

    const [mobileNav , setMobileNav]=useState("");

    const toggleNav=()=>{
            if(mobileNav==="active"){
                setMobileNav("");
            }
            else{
                setMobileNav("active");
            }
    }


    return (

        <header className={`header ${mobileNav}`}>
            <div className="img-logo">
                <img src="https://media.licdn.com/dms/image/D4D03AQFBu_ZRliZ9iQ/profile-displayphoto-shrink_800_800/0/1678450931046?e=1686787200&v=beta&t=ErEupsdf0NfPOdNJJO29s0a1QH-N6PqbXmKOy_iM10U" alt="vishvjeet" />
                <h1>VISHVJEET PRAJAPATI</h1>
            </div>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li ><a href="./" onClick={toggleNav}>Home</a></li>
                    <li ><a href="./#about"  onClick={toggleNav}>about</a></li>
                    <li ><a href="./#projects"  onClick={toggleNav}>projects</a></li>
                    <li ><a href="./#contact"  onClick={toggleNav}>contact</a></li>

                </ul>
            </nav>

            <div className="mobile-navbar-button"onClick={toggleNav}>
                <ion-icon className="mobile-nav-icon" name="menu-outline"></ion-icon>
                <ion-icon className="mobile-nav-icon" name="close-outline"></ion-icon>
            </div>
        </header>

    );
}
