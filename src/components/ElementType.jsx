import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/ElementType.scss';
import { Form, FormControl, FormGroup, FormLabel, Col, Row  } from 'react-bootstrap';
import {elementTypeRequest} from "../actions";

const ElementType = (props) => {

    const handleChange = event => {
        props.elementTypeRequest(event.target.value)
    }

    const elements = props.elements.map((element, index) => <option key={index}>{element}</option>)

    return(
        <div className='elementType'>
            <Form>
                <FormGroup as={Row} controlId="formPlaintextEmail">
                    <FormLabel column sm="4">
                        Elemento
                    </FormLabel>
                    <Col sm="8">
                        <FormControl as="select" name="option" onChange={handleChange}>
                            <option hidden>Selecciona un elemento</option>
                            { elements }
                        </FormControl>
                    </Col>
                </FormGroup>

            </Form>
        </div>
)};

const mapDispatchToProps = {
    elementTypeRequest
}

export default connect(null, mapDispatchToProps)(ElementType)