import '../assets/styles/components/Table.scss'
import React from "react";
import { Table } from 'react-bootstrap'

const TableProducts = ({ name, description, sku, unit, quantity, freezer, relation }) => (
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Sku</th>
            <th>Unidad</th>
            <th>Cantidad por Unidad</th>
            <th>Refrigeración</th>
            <th>Relación con el producto</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>{ sku }</td>
            <td>{ unit }</td>
            <td>{ quantity }</td>
            <td>{ freezer }</td>
            <td>{ relation }</td>
        </tr>
        </tbody>
    </Table>
)

export default TableProducts