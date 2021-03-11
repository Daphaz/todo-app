import React from "react";
import { Todo } from "./Todo";
import { connect } from "react-redux";
import { editToggle } from "../redux/actionCreator";
import { motion } from "framer-motion";

const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

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

const ListTodo = ({ todos, editToggle, title }) => {
	return (
		<>
			<motion.h1 transition={transition} exit={{ opacity: 0 }}>
				{title}
			</motion.h1>
			<motion.div
				transition={transition}
				exit={{ opacity: 0 }}
				className="todo_list">
				{todos.map((t) => (
					<Todo key={t.id} item={t} editToggle={editToggle} />
				))}
			</motion.div>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
