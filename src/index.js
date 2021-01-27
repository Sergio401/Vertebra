import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const initialState = {
    "products":
        {
            "Nombre": "Chocorramo",
            "descripción": "Gala con chocolate",
            "SKU": "DEPOR-XYZ-BLN-41",
            "Unidad": "gramo",
            "Cantidad por unidad": 2,
            "Refrigerado": "true",
            "Relación con proveedores": "simple"
        },
    "provider":
        {
            "Nit": 42342345434534,
            "Nombre": "Vlog de Vlacho",
            "Representante legal": "Vladimir",
            "Dirección": "Cra 12 #36-63"
        },
    "shops":
        {
            "Nombre": "Doña Ceci",
            "Dirección": "Cra 12 #36-63",
            "Manager": "Cecilia Jaramillo",
            "Número de neveras": 2,
            "Número de pasillos": 2,
            "Número de cajas": 30,
            "Número de pisos": 1,
            "Metros cuadrados": 148,
            "Servicios extra": "pago servicios"
        },
    "inventory":
        {
            "Relación con producto": "simple",
            "Cantidad": 30,
            "Fecha de Vencimiento": "02/02/2022",
            "Fecha de Compra": "02/02/2021",
            "Descuento": 20
        }
}

const store = createStore(reducer, initialState)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app'));
