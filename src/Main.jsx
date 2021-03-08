import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";

const Main = () => {
	return (
		<Switch>
			<Route exact path="/home" component={Home} />
			<Redirect exact from="/" to="/home" />
		</Switch>
	);
};

export default Main;
