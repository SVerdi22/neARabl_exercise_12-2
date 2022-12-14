import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { updateFieldSelection } from '../Store/actions';

class SearchFieldDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        };
    
        handleChange = (event) => {
            event.preventDefault();
        this.setSearchInput(event.target.value)
    }
    setSearchInput = async (selection) => {
        // set state with selection from dropdown and dispatch action to send selection to store
        await this.setState({value: selection})
        this.props.dispatch(updateFieldSelection(this.state.value))
        }

  render() {
    const data = this.props.data
    return (
        <>
        {/* create selection list for dropdown menu */}
        <select value={this.state.value} onChange={this.handleChange}>
            <option disabled={true} value="">select search field</option>
            <option value="0">First Name</option>
            <option value="1">Last Name</option>
            <option value="2">Company Name</option>
            <option value="3">Address</option>
            <option value="4">City</option>
            <option value="5">County</option>
            <option value="6">State</option>
            <option value="7">Zip</option>
            <option value="8">Phone 1</option>
            <option value="9">Phone 2</option>
            <option value="10">Email</option>
            <option value="11">Web</option>
        </select>

        
        </>
        )
  }
}
// make app state accessible through props
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(SearchFieldDropdown);