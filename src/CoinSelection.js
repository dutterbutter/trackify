import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class CoinSelection extends React.Component {
    render() {
        let coinMkt = this.props.summary;

        let collectionsCrypto = coinMkt.map((el, i) => {

            let d = new Date(el.last_updated * 1000),	// Convert the passed timestamp to milliseconds
                yyyy = d.getFullYear(),
                mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
                dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
                hh = d.getHours(),
                h = hh,
                min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
                ampm = 'AM',
                time;

            if (hh > 12) {
                h = hh - 12;
                ampm = 'PM';
            } else if (hh === 12) {
                h = 12;
                ampm = 'PM';
            } else if (hh === 0) {
                h = 12;
            }

            // ie: 2013-02-18, 8:35 AM	
            time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;


            let prices = parseFloat(el.price_usd);

            if (i <= 9) {
                return <li key={i} className="collection-item coins">

                    <div className="left-align sumCard">{el.name}</div>
                    <div className="price">${prices.toFixed(2)} USD </div>
                    <br />
                    <div className="left-align mkt">{el.symbol} - {time}</div>
                    <div className={el.percent_change_24h.includes('-') ? 'negative' : 'positive'}>
                        {el.percent_change_24h}%
                    <i className="material-icons">
                            {el.percent_change_24h.includes('-') ? 'trending_down' : 'trending_up'}
                        </i></div>
                    <br />
                    <div className="left-align follow" onClick={(event) => {
                        event.preventDefault()
                        this.props.addItemHandler(el.id);
                    }}
                    >
                        <i className="material-icons">{this.props.status.includes(el.id) ? 'check' : 'add'}</i>
                        {this.props.status.includes(el.id) ? 'FOLLOWING' : 'FOLLOW'}
                    </div>
                </li>
            }
        })

        return (
            <div className="container">
             <h4>Pick the coins you want to follow</h4>
                    <button className="walkThru waves-effect waves-light btn">
                        <Link to='/Main' id="walkThru">Done</Link>
                    </button>
                <ul className="collection z-depth-2">
                   
                    {collectionsCrypto}
                </ul>
            </div>
        )
    }
}
export default CoinSelection;