import { ADD_TODO, EDIT_TOGGLE, REMOVE_CLASS_TODO } from "./actionType";

export const addTodo = (color, classAnimation, label) => ({
	type: ADD_TODO,
	payload: {
		color,
		classAnimation,
		label,
	},
});

export const editToggle = (id) => ({
	type: EDIT_TOGGLE,
	payload: {
		id,
	},
});

export const removeClassTodo = () => ({
	type: REMOVE_CLASS_TODO,
});
