import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import { updateStoreTest1 } from '../Store/actions';
import { addDataToStore } from '../Store/actions';
import store from '../Store/store';
import ResultsTable from './ResultsTable';
class DataLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        // this.updateStateTest()
        this.getDataSet()
    }

    getDataSet = () => {
        var dataOuterArray;
        var dataArray;
        const dataSet = 'https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/us-500.csv'
        var dataNoFirstRow
        fetch(dataSet)
        .then((response) => response.text())
        .then((data) => dataOuterArray = Papa.parse(data))
        .then(() => dataArray = dataOuterArray.data)
        // .then(() => console.log(dataArray[1]))
        .then(() => this.props.dispatch(addDataToStore(dataArray)))
        .then(() => dataArray.shift())
        .then(() => this.setState({results: dataArray}))
    }

    // updateStateTest = async (val) => {
    //     await this.props.dispatch(updateStoreTest1("test value 1"))
    //     console.log("after update", store.getState())
    // }

    render() {
        // store.subscribe(() => {
        //     console.log("subscriber", store.getState())
        // })
        // const inner = this.props
    // console.log(store.getState())
    // console.log(inner)
    return (
        <div>

    {/* <h2>data loader</h2> */}
    {/* <ResultsTable bodyData = {this.state.results.map(row => row)}/> */}
        </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    testKey1: state.testKey1
  }
}

export default connect(mapStateToProps)(DataLoader);