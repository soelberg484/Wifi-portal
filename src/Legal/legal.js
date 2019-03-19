import React, { Component } from 'react';
import './legal.scss'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import PrivacyPolicy from '../Legal/privacy-policy'
import TermsOfService from '../Legal/terms-of-service'


class Legal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.activeTab,
            tabItem1: '',
            tabItem2: '',
        };
        
        //set active tab
        if (this.state.key === 'tabItem1') {
            this.state.tabItem1 = 'Tab-active'
            this.state.tabItem2 = 'Tab-inactive-right'
        } else {
             this.state.tabItem1 = 'Tab-inactive-left'
             this.state.tabItem2 = 'Tab-active'
        }
    }

    render() {
        return (
            <div className="Legal">

                <Tab.Container
                    className="Tabs"
                    activeKey={this.state.key}
                    onSelect={key => key === 'tabItem1' ?
                        this.setState({ tabItem1: 'Tab-active', tabItem2: 'Tab-inactive-right', key: 'tabItem1' }) :
                        this.setState({ tabItem1: 'Tab-inactive-left', tabItem2: 'Tab-active', key: 'tabItem2' })}>

                    <Nav.Item eventKey="tabItem1">
                        <Nav.Link className={this.state.tabItem1} eventKey="tabItem1">Privacy policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item eventKey="tabItem2">
                        <Nav.Link className={this.state.tabItem2} eventKey="tabItem2">Terms of service</Nav.Link>
                    </Nav.Item>

                    <Tab.Content className="Tabs">

                        <Tab.Pane eventKey="tabItem1">
                            <PrivacyPolicy backButton={this.props.passedFunction} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tabItem2">
                            <TermsOfService backButton={this.props.passedFunction} />
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>

            </div>

        );
    }

}
export default Legal;