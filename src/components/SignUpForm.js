import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//This part of the code is inspired by a github repository
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            fName: '',
            lName: '',
            phoneNumber: '',

            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="fName">First name</label>
                <input type="text" id="fName" className="FormField__Input" placeholder="Enter your first name" name="fName" value={this.state.fName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="lName">Last name</label>
                <input type="text" id="lName" className="FormField__Input" placeholder="Enter your last name" name="lName" value={this.state.lName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phoneNumber">Phone</label>
                <input type="text" id="phoneNumber" className="FormField__Input" placeholder="Enter your phone number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Register</button>
                  <Link to="/sign-in" className="FormField__Link">Sign in page</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;