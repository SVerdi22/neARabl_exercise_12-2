import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';

class TestComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    const data = this.props.data
    // console.log(inner)
    return <h2>test component 1</h2>;
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(TestComponent1);