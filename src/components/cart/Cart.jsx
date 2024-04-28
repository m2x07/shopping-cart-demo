import { useContext } from "react";
import "./cart.css";
import { CartContext, CartDispatchContext } from "../CartProvider";

export default function Cart() {
	const cart = useContext(CartContext);

	return (
		<div className="container">
			<h4>My Cart</h4>
			{cart.map((item) => (
				<Item item={item} key={item.id} />
			))}
		</div>
	);
}

function Item({ item }) {
	const dispatch = useContext(CartDispatchContext);
	return (
		<div className="item">
			<div className="item_info">
				<div className="item_name">{item.name}</div>
				<div className="item_price">${item.price}</div>
			</div>
			<button
				onClick={() => {
					dispatch({
						type: "dec",
						id: item.id,
					});
				}}>
				{" "}
				-{" "}
			</button>
			<span> {item.count} </span>
			<button
				onClick={() => {
					dispatch({
						type: "inc",
						id: item.id,
					});
				}}>
				{" "}
				+{" "}
			</button>
			&nbsp;
			<button
				onClick={() => {
					dispatch({
						type: "remove",
						id: item.id,
					});
				}}>
				Remove Item
			</button>
		</div>
	);
}
