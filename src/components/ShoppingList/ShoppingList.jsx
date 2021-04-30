import Item from '../Item/Item';

function ShoppingList (props){
    console.log('Shopping list props:', props);
    return(
        <div>
            <h2>Shopping List</h2>
            <button onChange=''>Reset</button>
            <button onChange=''>Clear</button>
            <div>
                {props.shoppingList.map(item => 
                (<Item key={item.id} item={item} />)
                )} 
            </div>
        </div>
    )//end return/render
}//end ShoppingList

export default ShoppingList;