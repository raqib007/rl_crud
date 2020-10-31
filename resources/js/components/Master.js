import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Master extends Component {
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">DOOM</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li >
                                <NavLink className="nav-item" activeClassName="active" to={"/"}>Home</NavLink>
                            </li>
                            <li >
                                <NavLink className="nav-item" activeClassName="active" to={"add-item"}>Create Product</NavLink>
                            </li>
                            <li >
                                <NavLink className="nav-item" activeClassName="active" to={"display-item"}>Display Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="pt-4">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Master;
