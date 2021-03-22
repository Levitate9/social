import profileReducer, { addPost, deletePost } from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It`s my first post', likesCount: 20 }
  ]
}

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPost('it-kamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPost('it-kamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[2].message).toBe('it-kamasutra')
})

it('length of posts should be decrement after deleting', () => {
  // 1. test data
  let action = deletePost('it-kamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(2)
})

