import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class BookingTreatment extends Component {
   constructor(props){
       super(props);
    
     this.state ={
         treatments:[]
     }
   }
    componentDidMount(){
        this.getTreatments();
    }
    getTreatments = async () => {
        const api_call = await fetch('https://bookingapihv.azurewebsites.net/api/treatments');
        const data = await api_call.json();
        
        
        let listItems = [];
        data.forEach(element => {
            listItems.push(element);
        });

        
            this.setState({
                treatments: listItems
            });
   
    }
    render()
        {
        return (
            <div>
                <div>
                    <span class="page active">1</span>
                    <span class="page">2</span>
                    <span class="page">3</span>
                    <span class="page">4</span>
                </div>
                <form>
                    <select>
                        {this.state.treatments.map((item, key) =>
        <option key={item.id}>{item.name}, {item.price}kr</option>
                        )}
                    </select>
                </form>              
                <Link to="/hairdresser"><button className="NxtBtn">Next page</button></Link>
            </div>         
        )
    }
}
export default BookingTreatment;