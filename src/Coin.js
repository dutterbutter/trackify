import React from 'react';
import axios from 'axios';


class Coin extends React.Component {
    constructor() {
        super()
        this.state = {
            coin: [],
            status: []
        }
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

    toggle(id) {
        console.log(id);

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
                    <div className="left-align follow" onClick={(event) => {
                        event.preventDefault()
                        this.toggle(el.id)
                        this.props.addItemHandler(el.id);
                    }}
                    >
                        <i className="material-icons">{this.state.status.includes(el.id) ? 'check' : 'add'}</i>
                        {this.state.status.includes(el.id) ? 'FOLLOWING' : 'FOLLOW'}
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