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
        console.log("data", data)
        var stateCodeMapper = data.map(row => stateCodesArr.includes(row[6])|| row[6] === "state" ? null : stateCodesArr.push(row[6]))
        
        console.log("state codes array from mapping", stateCodesArr)
        var stateCodesWithCounts = stateCodesArr.map(sc => [sc, 0])
        console.log("pre count", stateCodesWithCounts)
        stateCodesWithCounts.map(sc => data.map(row => row[6] === sc[0]? sc[1]++ : null))
        console.log("state codes count array", stateCodesWithCounts)
        this.setState({stateCounts: stateCodesWithCounts})
    }
    createZipTable = () => {
        var zipCodesArr = []
        var data = this.props.data
        console.log("data", data)
        var zipCodeMapper = data.map(row => zipCodesArr.includes(row[7])|| row[7] === "zip" ? null : zipCodesArr.push(row[7]))
        
        console.log("zip codes array from mapping", zipCodesArr)
        var zipCodesWithCounts = zipCodesArr.map(zc => [zc, 0])
        console.log("pre count", zipCodesWithCounts)
        zipCodesWithCounts.map(zc => data.map(row => row[7] === zc[0]? zc[1]++ : null))
        console.log("zip codes count array", zipCodesWithCounts)
        this.setState({zipCounts: zipCodesWithCounts})
    }
    sortByState = () => {
        console.log("sort by state")
        this.setState({sortBy: "State"})
        this.createStateTable()
    }
    sortByZip = () => {
        console.log("sort by Zip")
        this.setState({sortBy: "Zip"})
        this.createZipTable()
    }
  render() {
    const data = this.props.data
    // console.log(inner)
    return (
        <div>
            <input 
            type="submit"
            value="Sort by state"
            onClick={this.sortByState}
            />
            <input 
            type="submit"
            value="Sort by ZIP Code"
            onClick={this.sortByZip}
            />
            {this.state.sortBy === "State"? <ResultsTable2 header={"State"} bodyData = {this.state.stateCounts.map(row => row)}/> : null}
            {this.state.sortBy === "Zip"? <ResultsTable2 header={"Zip"} bodyData = {this.state.zipCounts.map(row => row)}/> : null}

    <h2>Visualization here</h2>;
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