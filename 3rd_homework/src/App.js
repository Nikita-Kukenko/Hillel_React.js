import './App.css';
import React from 'react';
import UserCardsWrapper from "./components/UserCardsWrapper/UserCardsWrapper.js";

class App extends React.Component {

  render() {
    return(
      <React.Fragment>
        <UserCardsWrapper />
      </React.Fragment>
    )
  }
}

export default App;
