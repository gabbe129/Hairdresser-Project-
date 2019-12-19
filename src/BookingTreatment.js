import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import PopperJs from "popper.js";


class BookingTreatment extends Component {
    render() {
        return (
       <div>
           hallå ELller tja
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
       </div>
        );
    }
}
export default BookingTreatment;