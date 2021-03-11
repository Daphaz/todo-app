import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";

const Main = () => {
	return (
		<Switch>
			<Route exact path="/home" component={Home} />
			<Route exact path="/home/:id" component={Todo} />
			<Redirect from="/" to="/home" />
		</Switch>
	);
};

export default Main;
