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
        this.getDataSet()
    }

    // fetch data from url and parse, then save in store and component state
    getDataSet = () => {
        var dataOuterArray;
        var dataArray;
        const dataSet = 'https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/us-500.csv'
        fetch(dataSet)
        .then((response) => response.text())
        .then((data) => dataOuterArray = Papa.parse(data))
        .then(() => dataArray = dataOuterArray.data)
        .then(() => this.props.dispatch(addDataToStore(dataArray)))
        .then(() => dataArray.shift())
        .then(() => this.setState({results: dataArray}))
    }

    render() {

    return (
        <div>


        </div>

    );
  }
}
function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(DataLoader);