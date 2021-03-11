import { createStore } from "redux";
import { initialState, Reducer } from "./reducer";

export const ConfigStore = () => {
	const store = createStore(Reducer, initialState);

	return store;
};
