import React from 'react'

export default function Project(props) {
    return (
        <section className="project">
           <div className="project-img">
              <img src={props.img} alt="" />
           </div>
            <div className="project-info">
                <h2>{props.title}</h2>
                <p>{props.des}</p>
                <button className="git-btn">
                   <a href={props.link} target="_blank"  rel="noreferrer"> github code</a>
                </button>
            </div>

        </section>
    )
}
