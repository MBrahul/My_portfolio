import React from 'react'

export default function Introduction() {
  return (
    <section className='introduction-section'>
            <div className="social">
                
                    <a className='linkedln' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishvjeet-prajapati-1272b9242/"><ion-icon className="social-handle-icon "  name="logo-linkedin" id="logo-linkedin" ></ion-icon></a> 
                    <a href="https://www.instagram.com/im_vishvjeet/" target="_blank" rel="noreferrer" ><ion-icon className="social-handle-icon insta" name="logo-instagram" id="logo-instagram"></ion-icon></a>
                    <a href="https://www.facebook.com/vishvjeet.parjapati" target="_blank"  rel="noreferrer"><ion-icon className="social-handle-icon fb" name="logo-facebook" id="logo-facebook"></ion-icon></a>
                   <a href="https://github.com/MBrahul" target="_blank"  rel="noreferrer"> <ion-icon className="social-handle-icon github" name="logo-github"></ion-icon></a>   
              
            </div>

            <div className="intro">
                <h1>
                Hey, I'm Vishvjeet Prajapati
                </h1>
               <div className="intro2">
               <p> A focused full stack Developer building the Websites and apps
                that leads to the success of the overall product</p>
               </div >
                <button className='project-btn'><a href="./#projects">projects</a></button>
                <ion-icon className="down-arrow" name="arrow-down-outline"></ion-icon>
            </div>
    </section>
  )
}
