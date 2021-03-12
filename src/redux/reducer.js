import {
	ADD_TODO,
	EDIT_TOGGLE,
	REMOVE_CLASS_TODO,
	EDIT_LABEL,
	TODO_DONE,
} from "./actionType";
import { TODO } from "../shared/todo";
import dayjs from "dayjs";
import { randomQuote } from "../shared/quotes";

export const initialState = {
	todos: TODO,
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const date = dayjs().format("MMMM DD,YYYY");
			const todo = action.payload;
			todo.id = state.todos.length;
			todo.edit = false;
			todo.isDo = false;
			todo.createdAt = date;
			todo.placeholder = randomQuote();
			return { todos: [...state.todos, todo] };
		case REMOVE_CLASS_TODO:
			return {
				todos: state.todos.map((t) => ({ ...t, classAnimation: "" })),
			};
		case EDIT_TOGGLE:
			return {
				todos: state.todos.map((t) =>
					t.id === action.payload.id ? { ...t, edit: !t.edit } : t
				),
			};
		case EDIT_LABEL:
			const { id, label, color } = action.payload;
			return {
				todos: state.todos.map((t) =>
					t.id === id ? { ...t, color, label } : t
				),
			};
		case TODO_DONE:
			return {
				todos: state.todos.map((t) =>
					t.id === action.payload.id ? { ...t, isDo: !t.isDo } : t
				),
			};
		default:
			return state;
	}
};
