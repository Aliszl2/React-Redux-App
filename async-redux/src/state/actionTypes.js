// STEP-2 DESIGN THE TYPES OF ACTIONS THE STATE MIGHT SUFFER
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_INPUTS = 'RESET_INPUTS'
// fetching posts
export const FETCH_POSTS_START = 'FETCH_POSTS_START' // no state change
export const SET_FETCHED_POSTS = 'SET_FETCHED_POSTS' // POSTs from API
// creating new POST
export const POST_POST_START = 'POST_POST_START' // no state change
export const SET_POSTED_POST = 'SET_POSTED_POST' // add the POST to the redux
// spinner
export const SPINNER_START = 'SPINNER_START'
export const SPINNER_STOP = 'SPINNER_STOP'
//delete post
export const DELETE_POST = 'DELETE_POST'

// edit post
export const PUT_POST_START = 'PUT_POST_START'
export const SET_UPDATED_POST = 'SET_UPDATED_POST'
