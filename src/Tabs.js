import React from 'react';
import Summary from './SummaryCard';
import Coin from './Coin';
import axios from 'axios';


class TabComp extends React.Component {
    constructor() {
        super()
        this.state = {
           coins: []
        }
        this.addItemHandler = this.addItemHandler.bind(this)
    }

    addItemHandler(id) {
       
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


    render() {

        return (
            <div>
                <div className="left-align container crypto">Cryptocurrency</div>
                <ul id="tabs-swipe-demo" className="tabs">
                    <li className="tab col s3"><a className="active" href="#test-swipe-1">Summary</a></li>
                    <li className="tab col s3"><a href="#test-swipe-2">Your Coins</a></li>
                    <li className="tab col s3"><a href="#test-swipe-3">Markets</a></li>
                </ul>
                <div id="test-swipe-1" className="col s12"><Summary coinFollow = {this.state.coins} /></div>
                <div id="test-swipe-2" className="col s12"><Coin addItemHandler={this.addItemHandler} /></div>
                <div id="test-swipe-3" className="col s12">Markets</div>
            </div>
        );
    }
}
export default TabComp
