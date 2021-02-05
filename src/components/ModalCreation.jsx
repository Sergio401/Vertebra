import React from "react";
import '../assets/styles/components/ButtonsCRUD.scss';
import {Modal, Button, Form, Col, FormGroup, ModalBody, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

const ModalCreation = (props) => {

    const elementsForms =
        props.rendertable
            .map((element) => Object.keys(element)).slice(0,1)[0]
            .map((element, index) =>
                <FormGroup key={index} as={Col} controlId={element}>
                    <Form.Label key={index}>{element}</Form.Label>
                    <Form.Control onChange={props.onChange} type="text" placeholder="Ingrese información" />
                </FormGroup>)

    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.value)
    }

    const handleChange = event => {
        console.log(event.target.value)
    }

    return (
        <Modal
            {...props}
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

export default ModalCreation