import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table' 
import { useTheme } from '@table-library/react-table-library/theme';

const OneResultTable = (props) => {
    // get table values from props
    const header = props.headerVals
    const body = props.bodyData
    // format data to usable object for table
    const data = {nodes: body};

    //format table
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
        `,
      };
    const theme = useTheme(THEME)
    return(
        <div>
    <Table data={data} theme ={theme}>
        {/* map through data from props to create table */}
        {(tableList) => (
            <>
        <Body>
            {tableList.map((item, index) => (
                <Row key={index} item={item}>
                    {/* map through item array and return cell for each element in array */}
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

export default OneResultTable;