import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const initialState = {
    "products": [
        {
            "ID": 1,
            "Nombre": "Chocorramo",
            "Descripción": "Gala con chocolate",
            "SKU": "DEPOR-XYZ-BLN-41",
            "Unidad": "gramo",
            "Cantidad": 2,
            "Refrigerado": "true",
            "Relación": "simple"
        },
        {
            "ID": 2,
            "Nombre": "Chocorramo",
            "Descripción": "Gala con chocolate",
            "SKU": "DEPOR-XYZ-BLN-41",
            "Unidad": "gramo",
            "Cantidad": 2,
            "Refrigerado": "true",
            "Relación": "simple"
        }
    ],
    "provider": [
        {
            "Nit": 42342345434534,
            "Nombre": "Vlog de Vlacho",
            "Representante legal": "Vladimir",
            "Dirección": "Cra 12 #36-63"
        }
    ],
    "shops": [
        {
            "Nombre": "Doña Ceci",
            "Dirección": "Cra 12 #36-63",
            "Manager": "Cecilia Jaramillo",
            "No neveras": 2,
            "No pasillos": 2,
            "No de cajas": 30,
            "No pisos": 1,
            "Metros cuadrados": 148,
            "Servicios extra": "pago servicios"
        }
    ],
    "inventory": [
        {
            "Relación con producto": "simple",
            "Cantidad": 30,
            "Fecha de Vencimiento": "02/02/2022",
            "Fecha de Compra": "02/02/2021",
            "Descuento": 20
        }
    ]
}

const store = createStore(reducer, initialState)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app'));
