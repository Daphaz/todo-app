import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import { connect } from "react-redux";
import { addTodo, editToggle } from "./redux/actionCreator";

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (color, classAnimation, label) =>
			dispatch(addTodo(color, classAnimation, label)),
		editToggle: (id) => dispatch(editToggle(id)),
	};
};

const Main = ({ todos, addTodo, editToggle }) => {
	return (
		<Switch>
			<Route
				exact
				path="/home"
				component={(props) => (
					<Home
						todos={todos}
						addTodo={addTodo}
						editToggle={editToggle}
						{...props}
					/>
				)}
			/>
			<Redirect from="/" to="/home" />
		</Switch>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
