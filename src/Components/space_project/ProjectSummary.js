import React from 'react'
import moment from 'moment'


const ProjectSummary = ({project})=>{
    return(
        <div className="card z-depth-5 black darken-4  project-summary ">
            <div className="card-content white-text ">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="green-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>

    )
}

export default ProjectSummary
