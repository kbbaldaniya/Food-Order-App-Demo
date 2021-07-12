import "./CartItem.css";
const CartItem = (props) => {
  return (
    <li className="_cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="_summary">
          <span className="_price">{props.price.toFixed(2)}</span>
          <span className="_amount">x {props.amount}</span>
        </div>
      </div>
      <div className="_actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
