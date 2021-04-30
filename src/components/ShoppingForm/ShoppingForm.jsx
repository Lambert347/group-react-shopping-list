import {useState} from 'react';
import axios from 'axios';

function ShoppingForm(props){
    const [newShoppingItem, setNewShoppingItem] = useState('');
    const [newShoppingQuantity, setNewShoppingQuantity] = useState(0);
    const [newShoppingUnit, setNewShoppingUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            //this might need to get changed later
            url: '/item',
            //
            data: {
                item: newShoppingItem,
                quantity: newShoppingQuantity,
                unit: newShoppingUnit,
            }
            .then((response) => {
                console.log(response);
                //might need to addressed earlier
                props.getShopping();
                //TODO: clear inputs and state
                setNewShoppingItem('');
                setNewShoppingQuantity('');
                setNewShoppingUnit('');
            })
            .catch(function(error) {
                console.log('Error on add:', error);
            })
        })
    }
    return (
        <>
        <h2>Add an Item</h2>
        <form onSubmit={handleSubmit}>
            <label>Item:</label>
            <input
            onChange={(event) => setNewShoppingItem(event.target.value)}
            value={newShoppingItem}
            />
            <label>Quantity</label>
            <input 
            onChange={(event) => setNewShoppingQuantity(event.target.value)}
            value={newShoppingQuantity}
            />
            <label>Unit:</label>
            <input
            onChange={(event) => setNewShoppingUnit(event.target.value)}
            value={newShoppingUnit}
            />
            <button type="save">Save</button>
        </form>
        </>

    )
}

export default ShoppingForm;