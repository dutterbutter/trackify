import React from 'react';
import axios from 'axios';


class Coin extends React.Component {
    constructor() {
        super()
        this.state = {
            coin: []
        }
        this.addItemHandler = this.addItemHandler.bind(this)
    }

    componentWillMount() {
        axios.get('http://localhost:8080/summary')
            .then(result => {
                let arrData = Array.from(result.data);

                this.setState({
                    coin: arrData
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    addItemHandler(id) {
                console.log(id);
                axios.get(`http://localhost:8080/summary/${id}`)
                    .then(result => {
                        let arrCoin = Array.from(result.data);
                        this.setState({
                            coins: arrCoin
                        })
                        console.log(this.state.coins)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }

    render() {
        let coinMkt = this.state.coin;
        
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
                    <div className="left-align follow" onClick= {(event) => {
                        event.preventDefault()
                        this.addItemHandler(el.id);
                    }}> 
                    <i className="material-icons">add</i>
                    FOLLOW
                    </div>
                </li>
            }
        })

        return (
            <div className="container">
                <ul className="collection z-depth-2">
                    {collectionsCrypto}
                </ul>
            </div>
        )
    }
}
export default Coin;