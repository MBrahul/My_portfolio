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
                <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/334580238_932292721281103_6502487229770419781_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VsymUAmXeagAX8VhiRB&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfD6FO5xc43JlnsfUopuZPN_zzQusu2d5uObmwVE70C29Q&oe=641DE38D" alt="vishvjeet" />
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
