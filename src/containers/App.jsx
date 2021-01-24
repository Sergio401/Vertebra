import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import '../assets/styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementType from "../components/ElementType";
import ButtonsCRUD from "../components/ButtonsCRUD";
import Menu from "../components/Menu";

const App = () => {
    const [ item, setItem ] = useState([{ products: [], provider: [], shops: [], inventory: []}])

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    console.log(item)

    return(
        <div className="App">
            <Header />
            <Menu>
                <ElementType />
                <ButtonsCRUD />
            </Menu>
        </div>
    )};

export default App;