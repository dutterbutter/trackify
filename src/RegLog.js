import React from 'react';


class RegLog extends React.Component {
    render() {
        return (
            <div>

                <form>
                    <div className="container">
                    
                        <input type='text' placeholder="Enter Username" name="username" required />
                        <input type="text" placeholder="Enter Password" name="password" required />

                        <button className="waves-effect waves-light btn land">
                            <span id="walkThru">Login</span>
                        </button>
                        <button className="waves-effect waves-light btn land">
                            <span id="walkThru">Sign-up</span>
                        </button>
                        <label>
                            <input type="checkbox" />Remember Me
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}
export default RegLog;