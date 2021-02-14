import React, {useState} from "react";
import { connect } from 'react-redux';
import '../assets/styles/components/ButtonsCRUD.scss';
import {Modal, Button, Form, Col, FormGroup, ModalBody, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {newProduct} from "../actions";

const ModalCreation = props => {

    const [form, setValues] = useState({})
    const { newProduct, ...rest } = props

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(form)
        props.product(form)
    }

    const keyElements = props.rendertable.map((element) => Object.keys(element)).slice(0,1)[0]

    const elementsForms =
        keyElements
            .map((element, index) =>
                <FormGroup key={index} as={Col} controlId={element} >
                    <Form.Label key={index}>{element}</Form.Label>
                    <Form.Control
                        name={element}
                        type="text"
                        placeholder="Ingrese información"
                        onChange={ handleInput }/>
                </FormGroup>)

    return (
        <Modal
            { ...rest }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Creación Producto
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={ handleSubmit }>
                    { elementsForms }
                    <Button type='submit'>Crear</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
};

const mapDispatchToProps = {
    newProduct,
}

export default connect(null, mapDispatchToProps)(ModalCreation)