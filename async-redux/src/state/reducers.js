import * as types from './actionTypes'

// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: {     // SLICE 1
//     title: '',
//    post: '',
//   },
//   posts: [        // SLICE 2
//     { id: someId, title: 'fsgs', post: 'some text' },
//     { id: anotherId, title: 'rgsgs', post: 'some other text'},
//   ],
//   spinnerOn: false, // SLICE 3
// }

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { title: '', post: '' }
export function formReducer(state = initialStateForm, action) {
  // ACTION { type: "INPUT_CHANGE", payload: { inputName: 'title', inputValue: "S" }}
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      }
    case types.RESET_INPUTS:
      return initialStateForm
    default:
      return state
  }
}

const initialStatePosts = []
export function postsReducer(state = initialStatePosts, action) {
  switch (action.type) {
    case types.FETCH_POSTS_START:
      return state
    case types.POST_POST_START:
      return state
    case types.PUT_POST_START:
        return state
    case types.SET_POSTED_POST:
      return state.concat(action.payload) // newly created post
    case types.SET_FETCHED_POSTS:
      return action.payload // all posts from API
    case types.SET_UPDATED_POST:
      return state.map(pst => {
        if (action.payload.id === pst.id) {
          return action.payload
        }
        return pst
      })
    default:
      return state
  }
}

const initialStateSpinner = false;
export function spinnerReducer(state = initialStateSpinner, action) {
  switch (action.type) {
    case types.SPINNER_START:
      return true;
    case types.SPINNER_STOP:
      return initialStateSpinner;
    default:
      return state;
  }
}
