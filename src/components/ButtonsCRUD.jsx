import '../assets/styles/components/ButtonsCRUD.scss';
import {Button, Row} from "react-bootstrap";
import React from "react";

const ButtonsCRUD = (props) => (
    <Row>
        <Button onClick={()=>props.setModal} variant="outline-success">Crear</Button>
    </Row>
);

export default ButtonsCRUD