import React from 'react'
import SignUp from './SignUp';
import Login from './Login';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Landing extends React.Component {
    render() {

        return (
            <div className="container">
                <h1 className="align-center">Welcome to Trackify</h1>
                <h4 className="align-center">A simple app designed to track
                    cryptocurrency prices
                </h4>
                <button className="waves-effect waves-light btn land">
                    <Link to='/SignUp' id="walkThru">Login</Link>
                </button>
                <button className="waves-effect waves-light btn land">
                    <Link to='/Login' id="walkThru">Sign-up</Link>
                </button>
            </div>

        )
    }
}
export default Landing;