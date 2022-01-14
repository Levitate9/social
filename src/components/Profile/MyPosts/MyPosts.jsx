import React from 'react';
import { reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import defaultUser from '../../../assets/images/user.png';

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addPostTextarea}>{ createField('Post message', 'addPost', [], Textarea )}</div>
      <div className={s.addPostButton}><button>Add post</button></div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm)

const MyPosts = React.memo((props) => {
  
  let profilePhoto

  (props.profile === null) ? profilePhoto = defaultUser : profilePhoto = props.profile.photos.large
  
  let postsElements = props.posts.map(el => <Post 
    message={el.message} 
    likesCount={el.likesCount} 
    profilePhoto={profilePhoto}
    key={el.id} 
  />)
  
  let addNewPost = (values) => {
    props.addPost(values.addPost);
  }

  return (
    <div className={s.posts_area}>
      <div>
        <AddPostReduxForm onSubmit={addNewPost} />
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
})

export default MyPosts;