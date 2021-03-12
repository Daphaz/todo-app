import {
	ADD_TODO,
	EDIT_TOGGLE,
	REMOVE_CLASS_TODO,
	EDIT_LABEL,
} from "./actionType";

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

export const editLabel = (id, label, color) => ({
	type: EDIT_LABEL,
	payload: {
		id,
		label,
		color,
	},
});
