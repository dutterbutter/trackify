import React from 'react'
import Autocomplete from 'react-autocomplete'


class Search2 extends React.Component {
constructor() {
        super()
        this.state={
            value:"",
            coin:[]
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="coin-autocomplete"></label>
                <Autocomplete
                    inputProps={{ id: 'coin-autocomplete' }}
                    wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                    value={this.state.value}
                    items={this.props.summary}
                    getItemValue={(item) => item.name}
                    onSelect={(value, item) => {
                        // set the menu to only the selected item
                        this.setState({ value, coin: [item] })
                        // or you could reset it to a default list again
                        // this.setState({ unitedStates: getStates() })
                    }}
                    onChange={(event, value) => {
                        this.setState({ value })
                        clearTimeout(this.requestTimer)
                        this.requestTimer = 
                            this.setState({ coin: this.props.summary })
                        
                    }}
                    renderMenu={children => (
                        <div className="menu">
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div
                            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                            key={item.abbr}
                        >{item.name}</div>
                    )}
                />
            </div>
        )
    }
}
export default Search2;