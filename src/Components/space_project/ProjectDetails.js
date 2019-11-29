import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

function ProjectDetails(props) {
    const {project, auth} = props;
    if(!auth.uid) return( 
        <Redirect to='/'/>
            
        )
    if(project){
        return (
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0 black">
                        <div className="card-content white-text">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey darken-4 white-text">
                            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
    
                            <div className="green-text">{project.createdAt.toDate().toString()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    else{
        return(
            <div className="container center">
                <p>Loading Project</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.space_projects
    const project =projects? projects[id]:null
    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'space_projects'}
    ])
)(ProjectDetails);
