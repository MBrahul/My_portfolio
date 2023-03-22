import React from 'react'

export default function Footer() {
  return (
    <div className="footer-section">
          <div className="fd1">
                <div className="footer-intro">
                    <h2>VISHVJEET PRAJAPATI</h2>
                    <p>A focused full stack Developer building the Websites and apps that leads to the success of the overall product</p>
                </div>
                <div className="footer-social">
                    <h2>SOCIAL</h2>
                    <div className="footer-social-icons">
                    <a className='linkedln' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishvjeet-prajapati-1272b9242/"><ion-icon className="social-handle-icon "  name="logo-linkedin"></ion-icon></a> 
                    <a href="https://www.instagram.com/im_vishvjeet/" target="_blank" rel="noreferrer" ><ion-icon className="social-handle-icon insta" name="logo-instagram"></ion-icon></a>
                    <a href="https://www.facebook.com/vishvjeet.parjapati" target="_blank"  rel="noreferrer"><ion-icon className="social-handle-icon fb" name="logo-facebook"></ion-icon></a>
                   <a href="https://github.com/MBrahul" target="_blank"  rel="noreferrer"> <ion-icon className="social-handle-icon github" name="logo-github"></ion-icon></a>   
                    </div>
                </div>
          </div>
          <hr />
          <div className="fd2">
                                <p>© Copyright 2023. Made by Vishvjeeet Prajapati</p>
          </div>
    </div>
  )
}
