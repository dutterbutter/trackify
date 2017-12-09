import React from 'react';

class Coins extends React.Component {
    constructor() {
        super()
        this.state = {
            coins: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="left-align crypto">
                    Your Coins
                </div>
                <ul className="collection z-depth-2">
                    <li className="collection-item">

                        <div className="left-align sumCard">Bitcoin</div>
                        <div className="price">$14 USD </div>
                        <br />
                        <div className="left-align mkt">btc - 4</div>
                        <div className="positive">
                            14%
                    <i className="material-icons">
                                trending_up
                    </i></div>
                        <br />
                        <div className="left-align follow">
                            <i className="material-icons">check</i>
                            <span> FOLLOWING </span>
                        </div>

                    </li>
                </ul>
            </div>
        )
    }
}
export default Coins;