import React from 'react'
import inotebook from '../images/inotebook.png'
import dailynews from '../images/dailynews.jpg'
import textutils from '../images/textutils.jpg'
import movieshut from '../images/movieshut.jpg'
import taskoo from '../images/taskoo2.jpg'
import Project from './Project';
import Project2 from './Project2';

export default function Projects() {

    var projects =[
        {
            title:"iNotebook",
            des:"iNotebook is a website where user can store his/her notes, it has user authantication feature also and is made with React.js Express.js MongoDb,Node.js",
            img:inotebook,
            link:"https://github.com/MBrahul/inotebook.git",

        },
        {
            title:"DailyNews",
            des:"DailyNews is a News website where user can go through news according to there interest. dailynews has multiple news category and also has dark mood",
            img:dailynews,
            link:"https://github.com/MBrahul/dailynews.git"

        },
        {
            title:"Textutils",
            des:"Textutils is used to do many operations on texts",
            img:textutils,
            link:"https://github.com/MBrahul/textutils.git"

        },
    ];

    var mProjects=[ 
         {
        title:"Movieshut",
        des:"Movieshut is a movie search app where user can see trending movies,top rated movie,upcoming movie's reviews and rating",
        img:movieshut,
        link:"https://github.com/MBrahul/movieshut.git"

    },
    {
        title:"Taskoo",
        des:"Taskoo is a flutter app that manages your daily tasks and give you a overview of all your tasks till date",
        img:taskoo,
        link:"https://github.com/MBrahul/taskoo.git"

    },
];

  return (
   <section className="project-section" id='projects'>
      
      <div className="project-section1">
      <div className="project-section1-h">
      <h1> PROJECTS </h1>
      </div>
      
       {
        projects.map((project)=>{
            return <Project img={project.img} title={project.title}  des={project.des} link={project.link}/>
        })
       }
      </div>

      <div className="project-section2">
      {
        mProjects.map((project)=>{
            return <Project2 img={project.img} title={project.title}  des={project.des} link={project.link}/>
        })
       }
      </div>
     <a href="https://github.com/MBrahul?tab=repositories" target="_blank" rel="noreferrer" className="viewall-btn">
        <p>view all</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
     </a>
   </section>
  )
}
