import '../assets/styles/components/Table.scss'
import React from "react";
import { Table } from 'react-bootstrap'

const TableProducts = (props) => {

    const keys =
        Object
            .keys(props.renderTable)
            .map((element, index) => <th key={index}>{element}</th>)

    const valuesTable =
        Object
            .values(props.renderTable)
            .map((element, index) => <td key={index}>{element}</td>)

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                { keys }
            </tr>
            </thead>
            <tbody>
            <tr>
                { valuesTable }
            </tr>
            </tbody>
        </Table>
)};

export default TableProducts