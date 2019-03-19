import React, { Component } from 'react';
import './white-surface.scss';

import Login from './Login/login.js';
import Legal from './Legal/legal.js';

import logo from './img/logo.svg';
import actionblue from './img/action-blue.svg'



class WhiteSurface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comp: '',
            isLogin: true,
            hidden: true,
            activeTab: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeActiveTab = this.changeActiveTab.bind(this);
        
        this.state.comp = <Login onClick={this.changeActiveTab} />
    }
    
    handleClick() {
        this.state.isLogin ?
            this.setState({ comp: <Legal passedFunction={this.handleClick} activeTab={this.state.activeTab}  />, isLogin: false, hidden: false }) : 
            this.setState({ comp: <Login onClick={this.changeActiveTab} />, isLogin: true, hidden: true })
    }

    changeActiveTab(tabSelected) {
        this.setState({activeTab: tabSelected}, this.handleClick);
    }

    render() {
        return (
                <div className="White-Surface White-Surface-T White-Surface-D">
                    <div className="header">
                        <img className="logo" src={logo} alt="dfds-logo" />
                        {!this.state.hidden && 
                        <img className="Action-Blue" src={actionblue} alt="close-icon" onClick={this.handleClick} />}
                    </div>
                    {this.state.comp}
                </div>
        );
    }
}

export default WhiteSurface;