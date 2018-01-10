import React, { Component } from 'react';
import './App.css';
import Sticky from './StickyNav';
import TabComp from './Tabs';
import Search from './Search';
import Landing from './Landing';
import CoinSelection from './CoinSelection';
import Summary from './SummaryCard';
import Main from './Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

    const LandingPage = (props) => {
      return (
        <Landing
          summary={this.state.summary}
          coinAdded={this.state.coins}
          status={this.state.status}
          toggle={this.toggle}
          addItemHandler={this.addItemHandler}
        />
      )
    }


    const CoinSelectionInfo = (props) => {
      return (
        <div>
          <CoinSelection
            summary={this.state.summary}
            coinAdded={this.state.coins}
            status={this.state.status}
            toggle={this.toggle}
            addItemHandler={this.addItemHandler} />
        </div>
      )
    }

    const MainComp = (props) => {
      return (
        <div>
          <Main
            summary={this.state.summary}
            coinAdded={this.state.coins}
            status={this.state.status}
            toggle={this.toggle}
            addItemHandler={this.addItemHandler} />
        </div>
      )
    }

    const SummaryComp = (props) => {
      return (
        <div>
          <Main
            summary={this.state.summary}
            coinAdded={this.state.coins}
            status={this.state.status}
            toggle={this.toggle}
            addItemHandler={this.addItemHandler} />
        </div>
      )
    }

    return (

      <div className="App">
        <Sticky />
        <div className="container">
          <Router>
            <div>
              <Route path='/' exact render={(LandingPage)} />
              <Route path='/CoinSelection' component={(CoinSelectionInfo)} />
              <Route path='/Main' component={(MainComp)} />
              {/* <Route path='/Main' component={(SummaryComp)} /> */}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
