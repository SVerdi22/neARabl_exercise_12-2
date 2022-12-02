import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';

class TargetValueSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: " "
        };
    }
    handleChange = (event) => {
        event.preventDefault();
    // this.setState({input: event.target.value})
    this.setSearchInput(event.target.value)
}
    setSearchInput = async (input) => {
        await this.setState({input: input})
        console.log("typed", this.state.input)

    }
    submitInput = () => {
        console.log("submitting", this.state.input)
    }
    
  render() {
    const data = this.props.data
    // console.log(inner)
    return(
        <>
        <h2>search field here</h2>
        <input 
        type="text"
        placeholder="Search here"
        onChange={this.handleChange}
        value={this.state.input}
        />
        <input
        type="submit"
        value="Submit"
        onClick={this.submitInput}
        />
        </>

    ) 
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(TargetValueSearchBar);