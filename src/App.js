import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './redux/redux-store';
import { Suspense } from 'react';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'))


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    let state = this.props.store.getState();
    
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={state.sidebar} />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/friends' component={Friends} />
            <Route path='/login' render={() => <Login />} />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer store={store}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default SamuraiJSApp;