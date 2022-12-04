import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import ResultsTable2 from './ResultsTable2';
class Visualization
 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "",
            stateCounts: []
        };
        
    }

    createStateTable = () => {
        var stateCodesArr = []
        var data = this.props.data
        // map through data and add state code values (row[6]) to stateCodesArr, unless the value has already been added or it is "state" (the header value)
        var stateCodeMapper = data.map(row => stateCodesArr.includes(row[6])|| row[6] === "state" ? null : stateCodesArr.push(row[6]))
        
        // turn each element in state codes arr to an array with 0 at index 1 (to use as counter)
        var stateCodesWithCounts = stateCodesArr.map(sc => [sc, 0])
        
        // map through counts array, on each state code map through original data array and if that value matches the state code, increment the counter in that state code's array 
        stateCodesWithCounts.map(sc => data.map(row => row[6] === sc[0]? sc[1]++ : null))
        
        // set new stateCodesWithCounts array to component state
        this.setState({stateCounts: stateCodesWithCounts})
    }
    createZipTable = () => {
        var zipCodesArr = []
        var data = this.props.data

        // map through data and add zip code values (row[7]) to zipCodesArr, unless the value has already been added or it is "zip" (the header value)
        var zipCodeMapper = data.map(row => zipCodesArr.includes(row[7])|| row[7] === "zip" ? null : zipCodesArr.push(row[7]))
        
        // turn each element in zip codes arr to an array with 0 at index 1 (to use as counter)
        var zipCodesWithCounts = zipCodesArr.map(zc => [zc, 0])

        // map through counts array, on each zip code map through original data array and if that value matches the zip code, increment the counter in that zip code's array 
        zipCodesWithCounts.map(zc => data.map(row => row[7] === zc[0]? zc[1]++ : null))
        
        // set new zipCodesWithCounts array to component state
        this.setState({zipCounts: zipCodesWithCounts})
    }

    // set component state based on sort selection
    sortByState = () => {
        this.setState({sortBy: "State"})
        this.createStateTable()
    }
    sortByZip = () => {
        this.setState({sortBy: "Zip"})
        this.createZipTable()
    }


  render() {
    const data = this.props.data
    return (
        <div>
            <input 
            type="submit"
            value="# of people by state"
            onClick={this.sortByState}
            />
            <input 
            type="submit"
            value="# of people by ZIP Code"
            onClick={this.sortByZip}
            />

            {/* render ResultsTable2 with either component state's stateCounts or zipCounts array based on sortBy value from component state */}
            {this.state.sortBy === "State"? <ResultsTable2 header={"State"} bodyData = {this.state.stateCounts.map(row => row)}/> : null}
            {this.state.sortBy === "Zip"? <ResultsTable2 header={"Zip"} bodyData = {this.state.zipCounts.map(row => row)}/> : null}

        </div>
    )

  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Visualization);