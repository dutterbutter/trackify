import React from 'react';


class Search extends React.Component {
    constructor() {
        super();
        this.displayMatches = this.displayMatches.bind(this)
        this.findMatches = this.findMatches.bind(this);
    }

    findMatches(wordToMatch, summary) {
        return summary.filter(coin => {
            const regex = new RegExp(wordToMatch, 'gi');
            return coin.name.match(regex) || coin.symbol.match(regex);
        });
    }

    displayMatches() {
        let summary = this.props.longSummary;
        console.log('it ran?')
        const matchArray = this.findMatches(this.value, summary);
        const html = matchArray.map(coin => {
            const regex = new RegExp(this.value, 'gi');
            const coinName = coin.name.replace(regex, `<span class="hl">${this.value}</span>`)
            const symbol = coin.symbol.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
          <li>
            <span class="name">${coinName}, ${symbol}</span>
          </li>
          `;
        }).join("");
        this.refs.suggestions = html;
    }

    // const searchInput = document.querySelector('.search');
    // const suggestions = document.querySelector('.suggestions');

    render() {
    
        // searchInput.addEventListener('change', displayMatches);
        // searchInput.addEventListener('keyup', displayMatches);

        return (
            <div>
                <form>
                    <div className="input-field z-depth-1">
                        <input type="search" className="search" placeholder=" Search" onKeyUp= {(event) => {
                            event.preventDefault()
                            this.displayMatches()
                        }}/>
                        <i className="material-icons">search</i>
                        <ul className="suggestions" ref="suggestions">
                        </ul>
                    </div>
                </form>
            </div>

        )
    }
}
export default Search;