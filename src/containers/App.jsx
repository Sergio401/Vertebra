import React from "react";
import { connect } from 'react-redux';
import Header from "../components/Header";
import '../assets/styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementType from "../components/ElementType";
import ButtonsCRUD from "../components/ButtonsCRUD";
import TableProducts from "../components/TableProducts";

const App = (state) => {

    const elements = Object.keys(state).slice(0, 4);

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
            default: console.log("Pending to choose")
        }
    }

    let renderTable = chooseTable(state.option, elements)

    return(
        <div className="App">
            <Header />
            <div className="container menu mt-5">
                <ElementType elements = {elements}/>
                <ButtonsCRUD />
            </div>
            <div className="container mt-5">
                <TableProducts renderTable = {renderTable || ""} />
            </div>

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