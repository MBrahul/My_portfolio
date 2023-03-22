import React from 'react'
import Skill from './Skill'


export default function Myskills() {

var myskills=["https://storage.googleapis.com/cms-storage-bucket/64d67700f8293a9dc827.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png?20170401104355","https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png","https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png","https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png","https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-ml9PNfkDRFpDa-dQNzazBKHV0HZFEAQt_xqqq4KIonZ0_A1&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPPlnUnhPRbSLfZr0TctDI3RN7mB7hqw8aqJjMCZaS9NvUQk&s","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/612px-ISO_C%2B%2B_Logo.svg.png?20170928190710","https://static.javatpoint.com/core/images/java-logo1.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodKoC3n7FvEwqsZvzF4CnaDs4UHS2O9t4kIvl5hKkaA&s","https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg","https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnyv5zBfChiiGbDemcMX-17bOG06lx2QJTtG1bmEScRvh6qd1Rjaumga0g5BLlDbVXiM&usqp=CAU","https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png","https://dart.dev/assets/shared/dart-logo-for-shares.png?2"];

  return (
   <section className='myskills'>
        <h1>
            MY SKILLS
        </h1>

        <div className="skills">
             {myskills.map(element => {
                return <Skill logo={element}/>
             })}
        </div>
   </section>
  )
}
