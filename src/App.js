import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GameStart from './scenes/GameStart';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={GameStart} />
      </Router>
    </div>
  );
}

export default App;
