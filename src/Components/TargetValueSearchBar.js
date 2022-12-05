import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import Flexbox from 'flexbox-react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ResultsTable from './ResultsTable';
import OneResultTable from './OneResultTable';
import { updateCurrentlyDisplaying } from '../Store/actions';
import Visualization from './Visualization';
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
    this.setSearchInput(event.target.value)
}
    setSearchInput = async (input) => {
        await this.setState({input: input})
    }
    submitInput = async () => {
      var selectedField = await this.props.field
    this.search(selectedField, this.state.input)

    }
    showAll = async () => {
      var data = this.props.data
      await this.setState({headerArr: data[0]})
      this.setState({results: data})
        }

        // filter data to return arrays that match field and value selections, then set to component state
    search = async(field, value) => {
      var data = this.props.data
      await this.setState({headerArr: data[0]})
      var resultRows = data.filter(row => row[field] === value)
      await this.props.dispatch(updateCurrentlyDisplaying(field))
      console.log("selected field should be here", this.props)
      this.setState({results: resultRows})

    }
    
  render() {

    const styles = {
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

          </div>
 
        <input 
        type="text"
        placeholder="Search"
        onChange={this.handleChange}
        value={this.state.input}
        />
 
        <input
        type="submit"
        value="Submit"
        onClick={this.submitInput}
        />
          <Visualization />

          <input
          type="submit"
          value="Show Full Dataset"
          onClick={this.showAll}
          />

          {/* condition for part 2b of task
           if there is only one response, and the selected search field was first_name, display user icon, return OneResultTable component and pass search result as bodyData prop  */}
        {this.state.results.length == 1 && this.props.field == 0 && this.props.currentlySelected == 0? <div>
          <OneResultTable bodyData = {this.state.results.map(row => row)}/>
          <img
          src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/user.png"
          alt="user icon"
          style={{width: "200px", height: "200px"}}
          />

        </div>
        : null}
         {/* condition for part 2c of task
           if there is only one response, and the selected search field was company_name, display company video, return OneResultTable component and pass search result as bodyData prop  */}
        {this.state.results.length == 1 && this.props.field == 2 && this.props.currentlySelected == 2?  <div>
          
            <OneResultTable bodyData = {this.state.results.map(row => row)}/>

          <video controls width="50%">
          <source src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/
neARabl.mp4" type="video/mp4" />
 <source src="https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/
neARabl.mp4" type="video/webm" />
            </video>

          </div>
          : null}

           {/* condition for part 2a which excludes cases for 2b and 2c of task
           if there is more than one response, or the selected search field was anything other than first_name or company_name, move to inner conditional
              */}
        {this.state.results.length > 1 || this.props.field == 1 || this.props.field > 2? <div style={styles}> 
        
        {/* if search field is "state", show number of results  */}
        {this.props.field == 6 && this.state.results.length > 0 && this.props.currentlySelected == 6? <div>{this.state.results.length} people in {this.state.results[0][6]}</div> : null}

        {/* if there are any search results, return ResultsTable component and pass search result as headerVals and bodyData props */}
           {this.state.results.length > 0 && this.props.currentlySelected == this.props.field? <div>
        <ResultsTable headerVals = {this.state.headerArr} bodyData = {this.state.results.map(row => row)}/>
           
         </div> 
            :null} 
        
        </div>
         :null}
          
        </>

    ) 
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    field: state.field,
    currentlySelected: state.currentlySelected
  }
}

export default connect(mapStateToProps)(TargetValueSearchBar);