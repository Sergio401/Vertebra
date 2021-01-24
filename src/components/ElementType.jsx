import React from 'react';
import '../assets/styles/components/ElementType.scss';
import { Form, FormControl, FormGroup, FormLabel, Col, Row  } from 'react-bootstrap';

const ElementType = () => (
    <div className='elementType'>
        <Form>
            <FormGroup as={Row} controlId="formPlaintextEmail">
                <FormLabel column sm="4">
                    Elemento
                </FormLabel>
                <Col sm="8">
                    <FormControl as="select">
                        <option>Productos</option>
                        <option>Proveedores</option>
                        <option>Tiendas</option>
                        <option>Inventario tienda</option>
                    </FormControl>
                </Col>
            </FormGroup>
        </Form>
    </div>
);

export default ElementType