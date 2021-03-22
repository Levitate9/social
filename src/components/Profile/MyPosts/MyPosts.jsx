import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { ElementConstructor } from '../../common/FormsControls/FormsControls';

const Textarea = ElementConstructor('textarea')
const maxLength10 = maxLengthCreator(10)         //Textarea и maxLength15 обязательно создаются за пределами формы

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'addPost'} placeholder={'Post message'}
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm)

const MyPosts = React.memo((props) => {
  console.log("render yo")
  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} key={el.id} />)

  let addNewPost = (values) => {
    props.addPost(values.addPost);
  }

  return (
    <div className={s.posts_area}>
      <h3>My Posts</h3>
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