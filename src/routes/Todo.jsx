import React from "react";
import { Layout } from "../components";
import { connect } from "react-redux";
import { editToggle } from "../redux/actionCreator";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

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

const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

const Todo = ({ todos, match, editToggle }) => {
	const id = parseInt(match.params.id);
	const todo = todos.filter((t) => t.id === id);

	const handleClick = () => {
		editToggle(id);
	};

	return (
		<>
			{todo.length > 0 ? (
				<Layout returnBtn>
					<motion.h1
						transition={transition}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{ color: todo[0].color }}>
						{todo[0].label}
					</motion.h1>
					<div className="container_todo">
						<motion.div
							transition={transition}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="todo one_todo"
							style={{ backgroundColor: todo[0].color }}>
							<textarea
								name="text"
								minLength="1"
								maxLength="500"
								placeholder={todo[0].placeholder}
								disabled={!todo[0].edit}></textarea>
							<footer>
								<div className="date_todo">{todo[0].createdAt}</div>
								<button
									className="btn btn_edit"
									aria-label="edit task"
									onClick={handleClick}>
									{!todo[0].edit ? <AiFillEdit /> : <AiFillSave />}
								</button>
							</footer>
						</motion.div>
					</div>
				</Layout>
			) : (
				<Redirect to="/home" />
			)}
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
