import React, {Component} from 'react'
import Notifications from './Notifications'
import Toolkit from './Toolkit'
import ProjectList from '../space_project/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'


class Dashboard extends Component{
    render(){
        //console.log(this.props)
        const {projects, auth} = this.props
        if(!auth.uid) return (
            <div>
            
            <div className="container black homepageMsg">
            <Redirect to='/'/>

            <h6 className="white-text center"><u><Link to='/signin' className="white-text">Login</Link></u> to view content!</h6>
            
            </div>
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col s12 m6">
                        <Notifications/>
                    </div>
                </div>
            </div>
            </div>
            
        )
        return(
            <div className="dashboard container">
                <div className="container">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        
                    </div>
                </div>
            </div>
        );
        
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return{
        projects: state.firestore.ordered.space_projects,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'space_projects'}
    ])
)(Dashboard);