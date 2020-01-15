import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessages }
  from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export const App = ({user}) => {

  const signOut = async () => {
    try {
      await endConversation();
      removeUser();
      clearMessages();
    } catch({ message }) {
      hasErrored(message);
    }
  }

    return (
      <div className="App">
        <Header signOut={signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox />}
      </div>
    );
}

export const mapStateToProps = ({ user }) => ({
  user,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeUser, hasErrored, addMessage, clearMessages },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
