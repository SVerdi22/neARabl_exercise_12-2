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
        // this.setState({input: event.target.value})
        this.setSearchInput(event.target.value)
    }
    setSearchInput = async (selection) => {
        await this.setState({value: selection})
        this.props.dispatch(updateFieldSelection(this.state.value))
        }
    // submitInput = () => {
    //     console.log("submitting", this.state.value)
    // }

  render() {
    const data = this.props.data
    // console.log(inner)
    return (
        <>
        <h2>dropdown here</h2>
        <select value={this.state.value} onChange={this.handleChange}>
            <option disabled={true} value="">select search field</option>
            <option value="0">a select</option>
            <option value="1">b select</option>
            <option value="2">b select</option>
        </select>
        {/* <input
        type="submit"
        value="Submit"
        onClick={this.submitInput}
        /> */}
        
        </>
        )
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(SearchFieldDropdown);