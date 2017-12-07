import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="input-field z-depth-1">
                        <input type="search" placeholder=" Search"/>
                        <i className="material-icons">search</i>
                    </div>
                </form>
            </div>
            
        )
    }
}
export default Search;