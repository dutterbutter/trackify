import React from 'react';

class Summary extends React.Component {
    constructor() {
        super()
        this.state = {
            summary: {}
        }
    }

    render() {
        return (
            <div className= "container">

                <ul className="collection z-depth-2">
                    <li className="collection-item">
                 
                        <div className="left-align sumCard">BitCoin</div>
                        <div className="price">$17,565 CAD </div>
                        <br/>
                        <div className="left-align mkt">BITTREX: BTC - 4:02 PM EST</div>
                        <div className="secondary-content">31%<i className="material-icons">trending_up</i></div>
                    
                    </li>
                    <li className="collection-item">

                        <div className="left-align sumCard">Ethereum</div>
                        <div className="price">$545 CAD </div>
                        <br/>
                        <div className="left-align mkt">BITTREX: ETC - 4:02 PM EST</div>
                        <div className="secondary-content">15%<i className="material-icons">trending_up</i></div>

                    </li>
                    <li className="collection-item">

                        <div className="left-align sumCard">Monero</div>
                        <div className="price">$268.24 CAD</div>
                        <br/>
                        <div className="left-align mkt">BITTREX: XMR - 4:02 PM EST</div>
                        <div className="secondary-content">6%<i className="material-icons">trending_up</i></div>

                    </li>
                    <li className="collection-item">

                        <div className="left-align sumCard">Ripple</div>
                        <div className="price">$.234 CAD </div>
                        <br/>
                        <div className="left-align mkt">BITTREX: XRP - 4:02 PM EST</div>
                        <div className="secondary-content">2%<i className="material-icons">trending_up</i></div>
                
                    </li>
                </ul>

            </div>
        )
    }
}
export default Summary;