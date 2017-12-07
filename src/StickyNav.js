import React from 'react';


class Sticky extends React.Component {
    render() {
        return (
            <div>
                 <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <a className="brand-logo center-align">
                        
                              <span className="title">Trackify</span>
                        
                        </a>
                        <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons menu">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a>Author</a></li>
                            <li><a>Feedback</a></li>
                           
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a className="sideMob">Author</a></li>
                            <li><a className="sideMob">Feedback</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Sticky;