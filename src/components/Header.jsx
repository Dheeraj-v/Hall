import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">React Express App</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to={'/AboutUs'} className="nav-link">About us</Link></li>
                        <li className="nav-item"><Link to={'/ContactUs'} className="nav-link">Contact us</Link></li>
                    </ul>
                    <hr />
                </div>
                <Icon type="menu-fold" onClick={this.showDrawer} className="menu-icon" />
                <Drawer
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to={'/'} className="nav-link" onClick={this.onClose}>Home</Link></li>
                        <li className="nav-item"><Link to={'/AboutUs'} className="nav-link" onClick={this.onClose}>About us</Link></li>
                        <li className="nav-item"><Link to={'/ContactUs'} className="nav-link" onClick={this.onClose}>Contact us</Link></li>
                    </ul>
                </Drawer>
            </nav>
        )
    }
}

export default HeaderComponent
