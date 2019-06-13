import React, { Component } from 'react';
import './login.scss'
import wifi from '../img/wifi-svg.svg'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custId: '',
            errorMsg: '',
            errorStyle: '',
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTabSelected = this.handleTabSelected.bind(this);
    }

    handleChange(event) {
        this.setState({ custId: event.target.value })
    }

    handleTabSelected(event) {
        const activeTab = event.target.id;
        this.props.onClick(activeTab);
    }


    handleSubmit(event) {
        //this.validateId(this.state.custId);

        
        //prevent from redireting 
        //alert("You clicked on connect")
        //event.preventDefault();

        //to reset input after submit (only used when cutomerId entry field is enabled)
        //this.setState({custId: ''})
    }
    
    
    /* ##Handle customer id validation on submit##
    validateId(id, event) {
        //dummy method to illustrate error msg when submitting id
        if (id === "") {
            this.setState({ errorMsg: 'Please enter your customer Id' })
            this.setState({ errorStyle: "1px solid red" })
        } else if (['1', '2', '3', '4'].includes(id)) {
            this.setState({ errorMsg: '' })
            this.setState({ errorStyle: "" })
            alert('correct id')
        } else {
            this.setState({ errorMsg: 'Invalid customer Id' })
            this.setState({ errorStyle: "1px solid red" })
        };
    } */

    render() {
        /* This is only used for customer id entry field
        const errorStyle = {
            border: this.state.errorStyle
        }*/
        return (

            <div className="Login">

                <div className="img-wifi">
                    <img src={wifi} className="Wifi-SVG" alt="wifi-logo" />
                </div>
                <div className="text-container-login">
                    <h1 className="Free-Wi-Fi">Free Wi-Fi</h1>
                    <p className="Welcome-Onboard">Welcome Onboard </p><br />
                </div>

                <form className="form-container"  onSubmit={this.handleSubmit}>

                    {/* ##This code will add a entry field for customer id##
                    <label htmlFor="Customer_Id">Customer Id</label><br />

                    <input type="text" id="Customer_Id" placeholder="Printed on your boarding card" style={errorStyle} value={this.state.custId} onChange={this.handleChange} />


                    <span id="Validation">
                        {this.state.errorMsg}
                    </span>
                    */}
                    <p ><br /> I agree to the <span onClick={this.handleTabSelected} id='tabItem2'>terms of service </span>
                        and have reviewed the DFDS <span onClick={this.handleTabSelected} id='tabItem1' >privacy policy</span></p>


                    <button className="submit-button" formAction='dologin.html' >accept and connect</button>
                </form>
            </div>

        );
    }
}

export default Login;