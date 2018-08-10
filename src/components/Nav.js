import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Nav = function(props) {
  let whatIsRendered = props.location.pathname === "/" ? null : (
  <div className="navbar-main">
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

export default withRouter(Nav)
