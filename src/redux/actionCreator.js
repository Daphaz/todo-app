import { ADD_TODO, EDIT_TOGGLE } from "./actionType";

export const addTodo = (color, classAnimation, label) => ({
	type: ADD_TODO,
	payload: {
		color,
		classAnimation,
		label,
		placeholder:
			"The beginning of screenless design: UI jobs to be take over by Solution Architect",
	},
});

export const editToggle = (id) => ({
	type: EDIT_TOGGLE,
	payload: {
		id,
	},
});
