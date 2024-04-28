import "./products.css";
import products from "../../productList.js";
import { useContext } from "react";
import { CartDispatchContext } from "../CartProvider.jsx";

export default function Products() {
	return (
		<div className="container">
			<h4>Product List</h4>
			{products.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}

function Item({ item }) {
	const dispatch = useContext(CartDispatchContext);
	return (
		<div className="item">
			<span className="item_name">{item.name}</span>&nbsp;
			<span className="item_id">#{item.id}</span>
			<div className="item_price">${item.price}</div>
			<button
				onClick={() => {
					dispatch({
						type: "add",
						data: item,
					});
				}}>
				Add to Cart
			</button>
		</div>
	);
}
