import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import { updateStoreTest1 } from '../Store/actions';
import { addDataToStore } from '../Store/actions';
import store from '../Store/store';
class DataLoader extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        // };
        // this.updateStateTest()
        this.getDataSet()
    }

    getDataSet = () => {
        var dataOuterArray;
        var dataArray;
        const dataSet = 'https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/us-500.csv'
        
        fetch(dataSet)
        .then((response) => response.text())
        .then((data) => dataOuterArray = Papa.parse(data))
        .then(() => dataArray = dataOuterArray.data)
        // .then(() => console.log(dataArray[1]))
        .then(() => this.props.dispatch(addDataToStore(dataArray)))
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
    return <h2>data loader</h2>;
  }
}
function mapStateToProps(state) {
  return {
    testKey1: state.testKey1
  }
}

export default connect(mapStateToProps)(DataLoader);