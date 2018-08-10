import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED';

let initialState = {
  username: null,
  id: null,
  profilePicture: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload.username, profilePicture: action.payload.profilePicture }
    case GET_POSTS_FULFILLED:
      return { ...state, title: action.payload.title, author: action.payload.author, profilePicture: action.payload.profilePicture}
    
    // case REGISTER_USER: 
    //   return { ...state, userInfo: action.payload}
    default:
      return state;
  }
}

export function loginUser(userInfo) {
  console.log(userInfo)
  return {
    type: LOGIN_USER,
    payload: {
      username: userInfo.username,
      profilePicture: userInfo.profile_pic
    }
  }
}

export function getPosts(userposts, search) {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts`) // need title, author and profilePicture
  }
}

// export function registerUser(username, password) {
//   return {
//     type: LOGIN_USER,
//     payload:{
//       username,
//       password
//     }
//   }
// }