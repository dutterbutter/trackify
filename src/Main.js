import React from 'react';
import Search from './Search';
import TabComp from './Tabs';

class Main extends React.Component {
    render() {

        return (
            <div>
                <Search
                    summary={this.props.summary} />
                <TabComp
                    summary={this.props.summary}
                    coinAdded={this.props.coinAdded}
                    status={this.props.status}
                    toggle={this.props.toggle}
                    addItemHandler={this.props.addItemHandler}
                />
            </div >
        )
    }
}
export default Main;