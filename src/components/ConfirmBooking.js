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
            <div>
                <div>
                    <span class="page done">1</span>
                    <span class="page done">2</span>
                    <span class="page done">3</span>
                    <span class="page active">4</span>
                </div>
                
               <Link to="/"><button className="NxtBtn">Confirm booking</button></Link>
            </div>
        )
    }
}
export default ConfirmBooking;