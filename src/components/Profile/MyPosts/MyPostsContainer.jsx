import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost} )(MyPosts)

export default MyPostsContainer;