import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class ConfirmBooking extends Component {
   constructor(props){
       super(props);
    
     this.state ={
         
     }
   }
    componentDidMount(){
        this.getBookings();
    }
    getBookings = async () => {
        const api_call = await fetch('https://bookingapihv.azurewebsites.net/api/bookings');
        const data = await api_call.json();
        
        
        let listItems = [];
        data.forEach(element => {
            listItems.push(element);
        });
            this.setState({
                bookings: listItems
            });

    
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
                
               <Link to="/"><button className="NxtBtn">Confirm</button></Link>
            </div>
        )
    }
}
export default ConfirmBooking;