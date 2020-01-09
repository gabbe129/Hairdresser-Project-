import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class ConfirmBooking extends Component {
   constructor(props){
       super(props);
    
     this.state ={
         
     }
   }
   getAlert(){
       alert("Booking is confirmed");
   }
    render()
        {
        return (
            <div className="centerAll">
                <div>
                    <span className="page done">1</span>
                    <span className="page done">2</span>
                    <span className="page done">3</span>
                    <span className="page active">4</span>
                </div>
                <div className="displayBooking">
                    <p>Treatment: chosen treatment</p>
                    <p>Hairdresser: chosen hairdresser</p>
                    <p>Day: chosen day</p>
                    <p>Time: chosen time</p>
                </div>
                <div className="FormField">
                    <input type="text" id="fName" className="confirmForm" placeholder="Enter your first name..." name="fName"/>
                </div>
                <div className="FormField">
                    <input type="text" id="lName" className="confirmForm" placeholder="Enter your last name..." name="lName" />
                </div>
                <div className="FormField">
                    <input type="text" id="lName" className="confirmForm" placeholder="Enter phonenumber..." name="phonenumber" />
                </div>
                <div className="FormField">
                    <input type="text" id="lName" className="confirmForm" placeholder="Enter email..." name="email" />
                </div>
               <Link to="/"><button className="ConfirmBtn" onClick={this.getAlert}>Confirm</button></Link>
            </div>
        )
    }
}
export default ConfirmBooking;