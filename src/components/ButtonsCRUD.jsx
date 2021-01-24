import '../assets/styles/components/ButtonsCRUD.scss';
import {Button, Row} from "react-bootstrap";
import React from "react";

const ButtonsCRUD = () => (
    <Row>
        <Button variant="outline-success">Crear</Button>
        <Button variant="outline-primary">Editar</Button>
        <Button variant="outline-danger">Eliminar</Button>
    </Row>
);

export default ButtonsCRUD