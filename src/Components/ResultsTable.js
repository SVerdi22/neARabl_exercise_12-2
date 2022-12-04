import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table' 
import { useTheme } from '@table-library/react-table-library/theme';

const ResultsTable = (props) => {
    // get data from props
    const header = props.headerVals
    const body = props.bodyData
    const data = {nodes: body};

    // format table
    const THEME = {
        HeaderRow: `
          font-size: 14px;
      
          background-color: #eaf5fd;

        `,
        Row: `
          font-size: 14px;
                
          &:nth-child(odd) {
            background-color: #d2e9fb;
          }
      
          &:nth-child(even) {
            background-color: #eaf5fd;

          }
        `,
            
        Cell: `
            font-color: black;

            width: auto;
        `,
        Table: `
        --data-table-library_grid-template-columns:  100% 100% 100% 100% minmax(300px, 1fr);
        width: 3500px;
        `,
      };
    const theme = useTheme(THEME)

    return(

        <div style={{overflow: "auto"}}>
    <Table data={data} theme ={theme} layout={{ horizontalScroll: true }}>
        {(tableList) => (
            <>
            <Header>
                <HeaderRow>
                    
                {/* //hard coded header values to make them more readable */}
                <HeaderCell style = {{textAlign: "center"}}>First Name</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Last Name</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Company Name</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Address</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>City</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>County</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>State</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Zip</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Phone1</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Phone2</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Email</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}>Web</HeaderCell>
                </HeaderRow>
            </Header> 
        <Body>
            {/* map through nested array of data, take each inner array and map through that to create row of cells  */}
            {tableList.map((item, index) => (
                <Row key={index} item={item}>
                      {item.map(ele => <Cell>{ele}</Cell>)}
              </Row>
            ))}
          </Body>
            </>
            )}
    </Table>


        </div>
    )
  }

//   make app state accessible with props
function mapStateToProps(state) {
  return {
    data: state.data,
    headerVals: state.headerVals
  }
}

export default connect(mapStateToProps)(ResultsTable);
