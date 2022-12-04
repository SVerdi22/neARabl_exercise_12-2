import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import Flexbox from 'flexbox-react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ResultsTable from './ResultsTable';
class TargetValueSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerArr: [],
            input: "",
            results: []
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
    submitInput = async () => {
      var selectedField = await this.props.field
      console.log("search", this.state.input, "in", selectedField)
    this.search(selectedField, this.state.input)
    }

    search = async(field, value) => {
      console.log(value)
      var data = this.props.data
      await this.setState({headerArr: data[0]})
      console.log(data[105][field])
      var resultRows = data.filter(row => row[field] === value)
      console.log("result rows", resultRows)
      // var results = resultRows.map(r => `${r[0], r[1], r[field]}`)
      // console.log(results)
    
      this.setState({results: resultRows})
    }
    
  render() {
    // const headerRow = this.props.data[0]
    // console.log("data in render", headerRow)
    console.log(this.state)
    const styles = {
      // border: "1px solid black",
      width: "75%",
      marginRight: "500px",
      marginBottom: "200px",
      marginLeft: "500px",
      justifyContent: "center"
      
    }
    const container2 = {
      width: "300px"
    }
    return(
        <>
        <div>

        <Container
          style={{
            backgroundColor: 'green',
            width: "200px"
          }}>
        <h2>search field here</h2>
        </Container>
          </div>
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
        {/* <ul>{this.state.results}</ul> */}
        {this.state.results.length == 1 && this.props.field == 0? <div>
          <img
          src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/user.png"
          alt="user icon"
          />
          {this.state.results.map(row => <tr>{row.map(val => <td>{val}</td>)}</tr> )}

        </div>
        : null}
        {this.state.results.length == 1 && this.props.field == 2? <div>
          <h2>company video here</h2>
          <video controls width="100%">
          <source src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/
neARabl.mp4" type="video/mp4" />
 <source src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/
neARabl.mp4" type="video/webm" />
            </video>
            {this.state.results.map(row => <tr>{row.map(val => <td>{val}</td>)}</tr> )}

          </div>
          : null}
        {this.state.results.length > 1 || this.props.field == 1 || this.props.field > 2? <div style={styles}> 
        {this.props.field == 6 && this.state.results.length > 0? <div>{this.state.results.length} people in {this.state.results[0][6]}</div> : null}

          
            <div>
        {/* <Flexbox> */}
        <ResultsTable headerVals = {this.state.headerArr} bodyData = {this.state.results.map(row => row)}/>
            {/* {this.state.headerArr.map(val=> <td>{val}</td>)}
            {this.state.results.map(row => <tr>{row.map(val => <td>{val}</td>)}</tr> )} */}

         </div> 
        
        </div>
         :null}
          
        </>

    ) 
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
    field: state.field
  }
}

export default connect(mapStateToProps)(TargetValueSearchBar);