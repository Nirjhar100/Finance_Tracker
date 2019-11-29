import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
import {connect} from 'react-redux'

const Navbar = (props)=>{
    const {auth, profile}=props;
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper black darken-4 ">
            <div className="container">
                <label><Link to = '/' className = "brand-logo left">Space Plan</Link></label>
                <div>{links}</div>
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);