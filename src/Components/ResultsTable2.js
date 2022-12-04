import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table' 
import { useTheme } from '@table-library/react-table-library/theme';

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    const header = {nodes: this.props.headerVals}
    const body = this.props.bodyData
    const data = {nodes: body};
    const theme = useTheme(THEME)

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
      };
    // console.log(inner)
    return(
        <div>
    <h2>Table here</h2>;
    <Table data={data} theme = {theme}>
        {(tableList) => (
            <>
            <Header>
                <HeaderRow>
                    {/* {header.map(val => <HeaderCell>{val}</HeaderCell>)} */}
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
                <HeaderCell>header cell</HeaderCell>
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
}
// function mapStateToProps(state) {
//   return {
//     data: state.data
//   }
// }

// export default connect(mapStateToProps)(ResultsTable);
export default ResultsTable;