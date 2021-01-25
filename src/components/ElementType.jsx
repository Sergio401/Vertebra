import React from 'react';
import '../assets/styles/components/ElementType.scss';
import { Form, FormControl, FormGroup, FormLabel, Col, Row  } from 'react-bootstrap';

const ElementType = (props) => {

    return(
    <div className='elementType'>
        <Form>
            <FormGroup as={Row} controlId="formPlaintextEmail">
                <FormLabel column sm="4">
                    Elemento
                </FormLabel>
                <Col sm="8">
                    <FormControl as="select">
                        { elements }
                    </FormControl>
                </Col>
            </FormGroup>
        </Form>
    </div>
)};

export default ElementType