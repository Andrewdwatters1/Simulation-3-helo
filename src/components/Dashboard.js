import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

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
    let id = this.props.match.userId;
    let { search, userposts } = this.state
    axios.get(`/api/posts/`).then(result => {
      console.log(result)
      this.setState({
        posts: [...this.state.posts, result.data]
      })
    })
  }

  resetSearch = () => {
    let id = this.props.match.userId;
    let { search, userposts } = this.state
    axios.get(`/api/posts/:${id}?search=${search}&userposts=${userposts}`).then(result => {
      this.setState({
        posts: [...this.state.posts, result],
        search: ''
      })
    })
  }

  componentDidMount() {
    this.searchPosts()
  }

  render() {
    return (
      <div>
        <input onChange={this.searchChange}></input>
        <input type="checkbox" defaultChecked="true"></input>
        <button onClick={this.searchPosts}>search posts</button>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    userId: state.id
  }
}

export default connect(mapStateToProps)(Dashboard)