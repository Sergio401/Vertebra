import { createStore, compose } from "redux";
import state from '../../initialState.json'
import reducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = state


const saveToLocalStorage = state => {
    try {
        const { products, inventory, shops, provider } = state
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("shops", JSON.stringify(shops));
        localStorage.setItem("provider", JSON.stringify(provider));

    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = `{
            "products":${localStorage.getItem("products")},
            "provider":${localStorage.getItem("provider")},
            "shops":${localStorage.getItem("shops")},
            "inventory":${localStorage.getItem("inventory")}}`

        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

saveToLocalStorage(initialState)
const store = createStore(reducer, loadFromLocalStorage(), composeEnhancers());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;