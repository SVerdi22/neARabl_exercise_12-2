import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table' 
import { useTheme } from '@table-library/react-table-library/theme';

const ResultsTable = (props) => {

    // console.log(inner)
    const header = props.headerVals
    const body = props.bodyData
    const data = {nodes: body};
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
    <h2>tttable here</h2>;
    <Table data={data} theme ={theme} layout={{ horizontalScroll: true }}>
        {(tableList) => (
            <>
            <Header>
                <HeaderRow>
                    {/* {header.map(val => <HeaderCell>{val}</HeaderCell>)} */}
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
            {tableList.map((item, index) => (
                <Row key={index} item={item}>
                <Cell>{item[0]}</Cell>
                <Cell>{item[1]}</Cell>
                <Cell>{item[2]}</Cell>
                <Cell>{item[3]}</Cell>
                <Cell>{item[4]}</Cell>
                <Cell>{item[5]}</Cell>
                <Cell>{item[6]}</Cell>
                <Cell>{item[7]}</Cell>
                <Cell>{item[8]}</Cell>
                <Cell>{item[9]}</Cell>
                <Cell>{item[10]}</Cell>
                <Cell>{item[11]}</Cell>
              </Row>
            ))}
          </Body>
            </>
            )}
    </Table>
    {/* <h2>header: {header}</h2> */}

    {/* <h2>body: {body}</h2> */}

        </div>
    )
  }

// function mapStateToProps(state) {
//   return {
//     data: state.data
//   }
// }

// export default connect(mapStateToProps)(ResultsTable);
export default ResultsTable;