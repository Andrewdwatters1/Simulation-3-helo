import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/reducer';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      search: '',
      userposts: true,
    }

    this.searchChange = this.searchChange.bind(this)
  }

  searchChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  searchPosts = () => {
    this.props.getPosts(this.state.userposts, this.state.search)
  }

  render() {
    return (
      <div>
        <input onChange={this.searchChange}></input>
        <input type="checkbox" checked="true"></input>
        <button onClick={this.searchPosts}>search posts</button>
      </div>
    )
  }
}

export default connect(null, { getPosts })(Dashboard)