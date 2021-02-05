import React from "react";
import { connect } from 'react-redux';
import '../assets/styles/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableProducts from "../components/TableProducts";
import ElementType from "../components/ElementType";
import ModalCreation from "../components/ModalCreation";
import {Button, Row} from "react-bootstrap";

const Home = ({ products, provider, inventory, shops, option }) => {

    // Render Table
    const elements = ["Productos", "Proveedor", "Tiendas", "Invetario"]
    const chooseTable = (selector, arrayKey) => {
        switch (selector){
            case arrayKey[0]:
                return products
            case arrayKey[1]:
                return provider
            case arrayKey[2]:
                return shops
            case arrayKey[3]:
                return inventory
        }
    }

    let renderTable = chooseTable(option, elements)

    //Modal
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <div className="container menu mt-5">
                <ElementType elements = {elements}/>
                <Row>
                    <Button
                        onClick={() => setModalShow(true)}
                        variant="outline-success">Crear</Button>
                </Row>
            </div>
            <div className="container mt-5">
                <TableProducts renderTable = {renderTable || products}/>
            </div>

            <ModalCreation
                show={modalShow}
                onHide={() => setModalShow(false)}
                elements = {elements}
                rendertable = {renderTable || products}
            />
        </>
    )};


const mapStateToProps = state => {
    return {
        products: state.products,
        provider: state.provider,
        shops: state.shops,
        inventory: state.inventory,
        option: state.option,
    }
}


export default connect(mapStateToProps, null)(Home)