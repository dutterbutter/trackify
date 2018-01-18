import React from 'react';


class RegLog extends React.Component {
    constructor() {
        super() 
        this.state = {
            uname: '',
            pword: ''
        }
    }

    handler(e) {
        this.setState ({
            uname: e.target.value,
            pword: e.target.value
        })
    }
    handleSubmit(e) {
        
        this.props.signUp(this.state.uname, this.state.pword)
    }

    render() {
        return (
            <div>

                <form onSubmit= {this.handleSubmit}>
                    <div className="container">
                    
                        <input type='text' placeholder="Enter Username" name="username" onChange={this.handler} required />
                        <input type="text" placeholder="Enter Password" name="password" onChange={this.handler} required />

                        <button className="waves-effect waves-light btn land">
                            <span id="walkThru">Login</span>
                        </button>
                        <button className="waves-effect waves-light btn land" type="submit">
                            <span id="walkThru">Sign-up</span>
                        </button>
                        <div className="container">
                        <label>
                            <input type="checkbox" />Remember Me
                        </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default RegLog;