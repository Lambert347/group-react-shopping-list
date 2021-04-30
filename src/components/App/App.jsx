import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';





function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const getShopping = () => {
        axios({
            method: 'GET',
            url: '/item'
        })
        .then((response) => {
            console.log('Sending response data:', response.data);
            setShoppingList(response.data);
            console.log(shoppingList);
        })
        .catch(function (error) {
            console.log('Error on get', error);
        })
    }

    useEffect( () => {
        getShopping();
    }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm getShopping={getShopping}/>
                <ShoppingList array={shoppingList} />
            </main>
        </div>
    );
}

export default App;
