import React from 'react'
import CoinSelection from './CoinSelection';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Landing extends React.Component {
    render() {

        return (
            <div className="container">
                <h1 className="align-center">Welcome to Trackify</h1>
                <h4 className="align-center">A simple app designed to track
                    cryptocurrency prices
                </h4>
                <button className="waves-effect waves-light btn">
                    <Link to='/CoinSelection' id="walkThru">Pick Coins</Link>
                </button>
            </div>

        )
    }
}
export default Landing;