import React from "react";
import { Layout } from "../components";
import { connect } from "react-redux";
import { editToggle } from "../redux/actionCreator";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { Redirect } from "react-router-dom";

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
					<h1 style={{ color: todo[0].color }}>{todo[0].label}</h1>
					<div className="container_todo">
						<div
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
						</div>
					</div>
				</Layout>
			) : (
				<Redirect to="/home" />
			)}
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
