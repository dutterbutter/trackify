import React, { Component } from 'react';
import './App.css';
import Sticky from './StickyNav';
import TabComp from './Tabs';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sticky />
        <div className="container">
        <Search />
        </div>
        <TabComp />
      </div>
    );
  }
}

export default App;
