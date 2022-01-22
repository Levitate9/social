import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import defaultUser from '../../../assets/images/user.png'
import { useForm } from 'react-hook-form'

const MyPosts = React.memo((props) => {
  
  let profilePhoto

  (props.profile === null) ? profilePhoto = defaultUser : profilePhoto = props.profile.photos.large
  
  let postsElements = props.posts.map(el => <Post 
    message={el.message} 
    likesCount={el.likesCount} 
    profilePhoto={profilePhoto}
    key={el.id} 
  />)
  
  const AddPostForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
      props.addPost(data.addPost)
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.addPostTextarea}><textarea placeholder={'Post message'} {...register('addPost')}/></div>
        <div className={s.addPostButton}><button type={'submit'}>Add post</button></div>
      </form>
    )
  }

  return (
    <div className={s.posts_area}>
      <div>
        <AddPostForm />
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
})

export default MyPosts