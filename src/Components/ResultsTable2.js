import React, { Component } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import store from '../Store/store';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from '@table-library/react-table-library/table' 
import { useTheme } from '@table-library/react-table-library/theme';

const ResultsTable2 = (props) => {

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
        `,
      };
    const theme = useTheme(THEME)
    return(
        <div>
            {/* render 2-column table to show people per state / zip code depending on props */}
    <Table data={data} theme ={theme}>
        {(tableList) => (
            <>
            <Header>
                <HeaderRow>
                    {/* {header.map(val => <HeaderCell>{val}</HeaderCell>)} */}
                <HeaderCell style = {{textAlign: "center"}}>{props.header}</HeaderCell>
                <HeaderCell style = {{textAlign: "center"}}># of People</HeaderCell>
                </HeaderRow>
            </Header> 
        <Body>
            {tableList.map((item, index) => (
                <Row key={index} item={item}>
                <Cell>{item[0]}</Cell>
                <Cell>{item[1]}</Cell>
              </Row>
            ))}
          </Body>
            </>
            )}
    </Table>


        </div>
    )
  }

export default ResultsTable2;