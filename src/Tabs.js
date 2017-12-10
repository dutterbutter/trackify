import React from 'react';
import Summary from './SummaryCard';
import Coin from './Coin';

class TabComp extends React.Component {
    render() {
        return (
            <div>
                <div className="left-align container crypto">Cryptocurrency</div>
                <ul id="tabs-swipe-demo" className="tabs">
                    <li className="tab col s3"><a className="active" href="#test-swipe-1">Summary</a></li>
                    <li className="tab col s3"><a href="#test-swipe-2">Your Coins</a></li>
                    <li className="tab col s3"><a href="#test-swipe-3">Markets</a></li>
                </ul>
                <div id="test-swipe-1" className="col s12"><Summary /></div>
                <div id="test-swipe-2" className="col s12"><Coin /></div>
                <div id="test-swipe-3" className="col s12">Markets</div>
            </div>
        );
    }
}
export default TabComp
