import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class ChooseHairdresser extends Component {
   constructor(props){
       super(props);
    
     this.state ={
         hairdressers:[]
     }
   }
    componentDidMount(){
        this.getHairdressers();
    }
    getHairdressers = async () => {
        const api_call = await fetch('https://bookingapihv.azurewebsites.net/api/hairdressers');
        const data = await api_call.json();
        
        
        let listItems = [];
        data.forEach(element => {
            listItems.push(element);
        });

        
            this.setState({
                hairdressers: listItems
            });
   
    }
    render()
        {
        return (
            <div>
                <div>
                    <span class="page done">1</span>
                    <span class="page active">2</span>
                    <span class="page">3</span>
                    <span class="page">4</span>
                </div>
                <form>
                    <select>
                        {this.state.hairdressers.map((item, key) =>
        <option key={item.id}>{item.fname} {item.lname}</option>
                        )}
                    </select>
                </form>
                  <Link to="/time"><button className="NxtBtn">Next page</button></Link>
            </div>         
        )
    }
}
export default ChooseHairdresser;