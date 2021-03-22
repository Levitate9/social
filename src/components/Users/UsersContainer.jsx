import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getUsersSelector, getPageSize, getTotalUsersCount, getIsFetching, 
  getFollowingInProgress } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

  componentDidMount() {
    //66 видео, 16:30 минута и 19:00 продолжение
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    //используем ту же санку что и выше, но с другим параметром - pageNumber, она возвращает юзеров на {pageNumber} странице
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, getUsers}))(UsersContainer)
