import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Nav = function(props) {
  let whatIsRendered = props.location.pathname === "/" ? null : (
  <div className="navbar-main">
    Hello {props.username} ! 
    {/* Check lines 8 and 10 */}
    {props.profilePicture}
    <Link to="/dashboard">Home</Link>
    <Link to="/new">New Post</Link>
    <Link to="/">Logout</Link>
  </div>
  )
  return (
    <div>
      {whatIsRendered}
    </div>
  )
}

let mapStateToProps = function(state) {
  return state
}

export default withRouter(connect(mapStateToProps)(Nav))
