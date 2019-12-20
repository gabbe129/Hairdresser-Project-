import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';




class BookingTreatment extends Component {
    state ={
        treatments:[]
    }
    getTreatments = async () => {
        const api_call = await fetch('https://bookingapihv.azurewebsites.net/api/treatments');
        const data = await api_call.json();
        console.log(data);
        
        let listItems = [];
        data.forEach(element => {
            listItems.push(element);
        });

        this.setState({
            treatments: listItems
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.getTreatments}>Show treatments</button>
                {this.state.treatments.map((item,key) =>
                    <div>
                        <p>{item.name}</p>
                        
                    </div>
                )}
            </div>
        )
    }
}
export default BookingTreatment;