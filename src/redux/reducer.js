import { ADD_TODO, EDIT_TOGGLE } from "./actionType";
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
		case EDIT_TOGGLE:
			return {
				todos: state.todos.map((t) =>
					t.id === action.payload.id ? { ...t, edit: !t.edit } : t
				),
			};
		default:
			return state;
	}
};
