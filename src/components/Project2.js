import React from 'react'

export default function Project2(props) {
  return (
    <section className="project2">
           <div className="project2-img">
              <img src={props.img} alt="" />
           </div>
            <div className="project2-info">
                <h2>{props.title}</h2>
                <p>{props.des}</p>
                <button className="git-btn">
                   <a href={props.link} target="_blank" rel="noreferrer"> github code</a>
                </button>
            </div>

        </section>
  )
}
