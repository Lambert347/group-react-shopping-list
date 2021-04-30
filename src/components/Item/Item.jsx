
function Item(props){
    console.log('Shopping List item props are:', props);
    const item = props.item;
    return(
        <div>
            { item.name }
            { item.quantity } { item.unit }
            <button>Buy</button>
            <button>Remove</button>
        </div>
    )
}

export default Item;

console.log("Creature item Props are:", props);
    const creature = props.creature;
    return(
      <li > {creature.name} is from {creature.origin}.</li>
    )