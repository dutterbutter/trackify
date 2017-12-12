import React, { Component } from 'react';
import './App.css';
import Sticky from './StickyNav';
import TabComp from './Tabs';
import Search from './Search';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      coins: [],
      summary: [],
      status: []
    }
    this.addItemHandler = this.addItemHandler.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  addItemHandler(id) {
    this.toggle(id)
    axios.get(`http://localhost:8080/summary/${id}`)
      .then(result => {

        let testCoins = Array.from(this.state.coins);
        let arrCoin = Array.from(result.data);
        let coinsTest = arrCoin.concat(testCoins);

        this.setState({
          coins: coinsTest
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  toggle(id) {
    
    let copy = Array.from(this.state.status);
    if (!copy.includes(id)) {
      copy.push(id)
      this.setState({
        status: copy
      })
    } else {
      let copyArr = copy.indexOf(id)
      if (copyArr > -1) {
        copy.splice(copyArr, 1);
      }
      this.setState({
        status: copy
      })
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8080/summary')
      .then(result => {
        let arrData = Array.from(result.data);
        this.setState({
          summary: arrData
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Sticky />
        <div className="container">
          <Search />
        </div>
        <TabComp
          summary={this.state.summary}
          coinAdded={this.state.coins}
          status={this.state.status}
          toggle={this.toggle}
          addItemHandler={this.addItemHandler}
        />
      </div>
    );
  }
}

export default App;
