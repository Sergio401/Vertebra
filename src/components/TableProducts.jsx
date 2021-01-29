import '../assets/styles/components/Table.scss'
import React from "react";
import { Table } from 'react-bootstrap'

const TableProducts = (props) => {

    const keys =
        props.renderTable
            .map((element) => Object.keys(element)).slice(0,1)[0]
            .map((element, index) => <th key={index}>{element}</th>)


    let renderElementTable =
        props.renderTable.map((item, index) => (
            <tr key={index}>
                {Object.values(item).map((val, index) =>
                    <td key={index}>{val}</td>
                )}
            </tr>
        ))


    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                { keys }
            </tr>
            </thead>
            <tbody>
                { renderElementTable }
            </tbody>
        </Table>

)};

export default TableProducts