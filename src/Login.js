import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    handle(e) {
        axios.post('http://localhost:8080/google', { })
            .then(result => {
                console.log("Youve signed up")
            })
        }

    render() {
        return (
            <div>
                <button className="waves-effect waves-light btn land" type="submit" onClick={this.handle}>
                    <span id="walkThru">Google+</span>
                </button>
            </div>
        )
    }
}
export default Login;