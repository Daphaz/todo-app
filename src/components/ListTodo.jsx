import React from "react";
import { Todo } from "./Todo";
import { connect } from "react-redux";
import { editToggle } from "../redux/actionCreator";

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editToggle: (id) => dispatch(editToggle(id)),
	};
};

const ListTodo = ({ todos, editToggle, title, history }) => {
	return (
		<>
			<h1>{title}</h1>
			<div className="todo_list">
				{todos.map((t) => (
					<Todo key={t.id} item={t} editToggle={editToggle} history={history} />
				))}
			</div>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
