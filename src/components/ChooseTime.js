import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class ChooseTime extends Component {
   constructor(props){
       super(props);
    
     this.state ={
         bookings:[],
         timesList:["09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"],
         workingdaysList:["Mon", "Tue", "Wed", "Thu", "Fri"],
         choosenTime: ''
        //  hairdresser: props.hairdressers.lname
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
                    <span className="page active">3</span>
                    <span className="page">4</span>
                </div>
                <form>

               <table className="timeTable">
                   <thead>
                       <tr>
                       {this.state.workingdaysList.map((item) =>
                        <th value={item}>{item}</th>
                    )}
                       </tr>
                   </thead>
                   <tbody>
                        {this.state.workingdaysList.map(dayOfWeek=>
                            <td id={dayOfWeek}>
                                {this.state.timesList.map((item) =>
                                <tr value={item}><button class="times">{item}</button></tr>
                                )}
                            </td>
                        )}
                   </tbody>
               </table>
               </form>
               <Link to="/hairdresser"><button className="NxtBtn">Previous page</button></Link>
               <Link to="/confirm"><button className="NxtBtn">Confirm booking</button></Link>
            </div>
        )
    }
}
export default ChooseTime;