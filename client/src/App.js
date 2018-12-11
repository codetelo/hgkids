import React, { Component } from 'react';
import './App.css';
import Clothes from './containers/Clothes';
import {Provider} from 'react-redux';
import store from './Store/store';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Clothes/>
        </Provider>
          
      
      </div>
    );
  }
}

export default App;
