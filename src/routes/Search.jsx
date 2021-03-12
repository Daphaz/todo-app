import React from "react";
import { Layout } from "../components";
import { Todo } from "../components/Todo";
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

const Search = ({ todos, location, editToggle, ...props }) => {
	const { state: searchValue } = location;

	const reg = searchValue.match("/^[0-9]|[a-z]|[A-Z]$/")
		? new RegExp(`${searchValue}`, "i")
		: new RegExp("''", "i");
	const searchResults = todos.filter((t) => reg.test(t.placeholder));

	return (
		<Layout returnBtn {...props}>
			<motion.h1 transition={transition} exit={{ opacity: 0 }}>
				Search
			</motion.h1>
			<motion.div
				transition={transition}
				exit={{ opacity: 0 }}
				className="todo_list">
				{searchResults.length > 0 && searchValue !== "" ? (
					<>
						{searchResults.map((s) => (
							<Todo key={s.id} item={s} editToggle={editToggle} />
						))}
					</>
				) : (
					<h4>Sorry we don't find any matches for "{searchValue}"</h4>
				)}
			</motion.div>
		</Layout>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
