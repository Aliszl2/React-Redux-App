import * as types from './actionTypes'
import axios from 'axios'

const postsAPI = 'http://localhost:9000/api/posts'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}

export const fetchAllPosts = () => dispatch => {
  dispatch({ type: types.FETCH_POSTS_START })
  dispatch({ type: types.SPINNER_START })

  axios.get(postsAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_POSTS, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}

export const postNewPost = ({ title, post }) => dispatch => {
  dispatch({ type: types.POST_POST_START })
  dispatch({ type: types.SPINNER_START })

  axios.post(postsAPI, {
    title,
    post,
   
  })
    .then(res => {
      // we have the newly create post inside res.data
      dispatch({ type: types.SET_POSTED_POST, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}

export const updatePost = ({ id, title, post }) => dispatch => {
  dispatch({ type: types.PUT_POST_START })
  dispatch({ type: types.SPINNER_START })

  axios.put(postsAPI + `/${id}`, {
    title,
    post,
    
  })
    .then(res => {
      // we have the newly created post inside res.data
      dispatch({ type: types.SET_UPDATED_POST, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}