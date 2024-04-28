import { useReducer } from "react";
import { Fragment } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
	const [cart, dispatch] = useReducer(reducer, []);

	return (
		<Fragment>
			<CartContext.Provider value={cart}>
				<CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
			</CartContext.Provider>
		</Fragment>
	);
}

function reducer(state, action) {
	switch (action.type) {
		case "add": {
			const index = state.findIndex((item) => item.id === action.data.id);
			if (index !== -1) {
				return state.map((item, i) => (i === index ? { ...item, count: item.count + 1 } : item));
			}
			return [...state, { count: 1, ...action.data }];
		}
		case "remove": {
			return state.filter((item) => item.id !== action.id);
		}
		case "inc": {
			const index = state.findIndex((item) => item.id === action.id);
			return state.map((item, i) => (i === index ? { ...item, count: item.count + 1 } : item));
		}
		case "dec": {
			const index = state.findIndex((item) => item.id === action.id);
			if (state[index].count <= 1) {
				return state.filter((item) => item.id !== action.id);
			}
			return state.map((item, i) => (i === index ? { ...item, count: item.count - 1 } : item));
		}
	}
}
