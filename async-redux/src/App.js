import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './state/actionCreators'
import './App.css'

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state (injected by STEP-8)
  formValues,
  posts,
  spinnerOn,
  // B- callbacks to change state (action creators injected by STEP-9)
  changeInput,
  fetchAllPosts,
  postNewPost,
  updatePost,
  // C- props actually injected by the parent component
}) {
  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value,
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    postNewPost({
      title: formValues.title,
      post: formValues.post,
         })
  }
  // const onMarkFriendMarried = (friend) => event => {
  //   updateFriend({ ...friend, married: true })
  // }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  if (spinnerOn) {
    return <div className="spinner">Please Wait</div>
  }

  return (
    <div className="App">
      {/* here we can add a new post */}
      <h4>Add a new Post</h4>
      <form className='form' onSubmit={onSubmit}>
        <div>

          <label>Title
          </label><br />
        <input
            value={formValues.title}
            onChange={onChange}
            name='title'
          />
        </div>
<div>

        <label>Post</label><br/>
        {/* <textarea
              name="body"
              value={formValues.post}
              onChange={onChange}
              id=""
              cols="90"
              rows="10"
            ></textarea> */}
        <input
            value={formValues.post}
            onChange={onChange}
            name='post'
          /><br/>
        
</div>

        <input type='submit' />
      </form>

      {/* list of current posts */}
      <h4>Posts:</h4>
      {
        posts.map(pst => (
          <div
            key={pst.id}
          >
           <h3>{pst.title}</h3>
        <p>{pst.post}</p>
            <button >Delete post</button>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // what props do we want the component to get?
    formValues: state.formValues,
    posts: state.posts,
    spinnerOn: state.spinnerOn,
    // anything you want and is derived from state
  }
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default connect(
  mapStateToProps,
  actionCreators, // STEP-9 BRING IN THE ACTION CREATORS
)(App)
