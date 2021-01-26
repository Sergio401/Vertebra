import React from "react";
import { connect } from 'react-redux';
import Header from "../components/Header";
import '../assets/styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementType from "../components/ElementType";
import ButtonsCRUD from "../components/ButtonsCRUD";
import Menu from "../components/Menu";

const App = (state) => {

    const elements = Object.keys(state);
    elements.pop(); elements.pop();

    console.log(state)
    console.log(state.option)

    return(
        <div className="App">
            <Header />
            <Menu>
                <ElementType elements = { elements } />
                <ButtonsCRUD />
            </Menu>
        </div>
    )};


const mapStateToProps = state => {
    return {
        Productos: state.products,
        Proveedor: state.provider,
        Tiendas: state.shops,
        Inventario: state.inventory,
        option: state.option,
    }
}

export default connect(mapStateToProps, null)(App)