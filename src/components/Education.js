import React from 'react'
import degree from '../images/degree.png'
import iitg from '../images/iitg.png'

export default function Education() {
  return (
   <section className="education-section">
        <div className="myeducation">
            <h2>My</h2>
            <h2 className='color'>Education</h2>
            <img src={degree} alt="" />
        </div>

        <div className="edu">
            <img className='iitg-logo' src={iitg}alt="" />
            <div className="edu-info">
            <h2>Bachelor of Engineering in Engeering Physics</h2>
            <h3>Indian Institute Of Technoloy, Guwahati , Assam</h3>
            <h4>2021-2025 | Pursuing</h4>
            </div>
        </div>

        <div className="edu">
            <img className='subodh-photo' src="https://pbs.twimg.com/media/DLdUuFvV4AA9KaK.jpg" alt="" />
            <div className="edu-info">
            <h2>Secondary And Senior in PCM</h2>
            <h3>Subodh School,Kanwat , Sikar </h3>
            <h4>Completed</h4>
            </div>
        </div>

      
   </section>
  )
}
