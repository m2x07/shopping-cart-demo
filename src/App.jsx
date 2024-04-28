import "./App.css";
import { CartProvider } from "./components/CartProvider";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
	return (
		<div className="app">
			<h1>Shopping Cart using Context API & Reducer</h1>
			<CartProvider>
				<div className="wrapper">
					<Products />
					<Cart />
				</div>
			</CartProvider>
		</div>
	);
}

export default App;
