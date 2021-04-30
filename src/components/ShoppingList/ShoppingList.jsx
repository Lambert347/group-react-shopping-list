import Item from '../Item/Item';


function ShoppingList (props){
    console.log('Shopping list props:', props);

    const reset = () => {
        
    }

    const clear = () => {

    }

    return(
        <div>
            <h2>Shopping List</h2>
            <button onChange={reset}>Reset</button>
            <button onChange={clear}>Clear</button>
            <div>
                {props.array.map(item => 
                    (<Item key={item.id} item={item} />)
                )} 
            </div>
        </div>
    )//end return/render
}//end ShoppingList

export default ShoppingList;