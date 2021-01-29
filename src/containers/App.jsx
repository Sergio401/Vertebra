import React from "react";
import { connect } from 'react-redux';
import '../assets/styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/Header";
import TableProducts from "../components/TableProducts";
import ElementType from "../components/ElementType";
import ModalCreation from "../components/ModalCreation";
import {Button, Row} from "react-bootstrap";


const App = (state) => {

    const elements = Object.keys(state).slice(0, 4);
    const [modalShow, setModalShow] = React.useState(false);

    const chooseTable = (selector, arrayKey) => {
        switch (selector){
            case arrayKey[0]:
                return state.Productos
            case arrayKey[1]:
                return state.Proveedor
            case arrayKey[2]:
                return state.Tiendas
            case arrayKey[3]:
                return state.Inventario
        }
    }

    let renderTable = chooseTable(state.option, elements)

    return(
        <div className="App">
            <Header />
            <div className="container menu mt-5">
                <ElementType elements = {elements}/>
                <Row>
                    <Button
                        onClick={() => setModalShow(true)}
                        variant="outline-success">Crear</Button>
                </Row>
            </div>
            <div className="container mt-5">
                <TableProducts renderTable = {renderTable || state.Productos}/>
            </div>

            <ModalCreation
                show={modalShow}
                onHide={() => setModalShow(false)}
                elements = {elements}
                renderTable = {renderTable || state.Productos}
            />
        </div>
    )};


const mapStateToProps = state => {
    return {
        Productos: state.products,
        Proveedor: state.provider,
        Tiendas: state.shops,
        Inventario: state.inventory,
        option: state.option
    }
}

export default connect(mapStateToProps, null)(App)