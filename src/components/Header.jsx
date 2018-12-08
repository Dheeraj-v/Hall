import React, { Component } from 'react';
import { Drawer, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            current: window.location.pathname.substr(1) !== "" ? window.location.pathname.substr(1) : "home",
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
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
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a className="navbar-brand"><img src="/images/logo1.png" alt="logo" /></a> */}
                    <a className="navbar-brand"><span className="logo-style">Varthagar</span> <span>Thirumana Mandapam</span></a>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal" className="menuBar"
                    >
                        <Menu.Item key="home"><Link to={'/home'} className="nav-link">HOME </Link>

                        </Menu.Item>
                        <Menu.Item key="Gallery"><Link to={'/Gallery'} className="nav-link">GALLERY </Link>
                        </Menu.Item>
                        <Menu.Item key="ContactUs"><Link to={'/ContactUs'} className="nav-link">CONTACT US </Link>
                        </Menu.Item>
                    </Menu>
                    <Icon type="menu-fold" onClick={this.showDrawer} className="menu-icon" />
                    <Drawer
                        placement="right"
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to={'/home'} className="nav-link" onClick={this.onClose}>Home</Link></li>
                            <li className="nav-item"><Link to={'/Gallery'} className="nav-link" onClick={this.onClose}>Gallery</Link></li>
                            <li className="nav-item"><Link to={'/ContactUs'} className="nav-link" onClick={this.onClose}>Contact us</Link></li>
                        </ul>
                    </Drawer>
                </nav>

            </div>
        )
    }
}
HeaderComponent.propTypes = {
    location: PropTypes.any
}
export default HeaderComponent
