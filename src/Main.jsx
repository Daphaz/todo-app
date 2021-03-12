import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";
import Search from "./routes/Search";
import { AnimatePresence } from "framer-motion";

const Main = () => {
	return (
		<Route
			render={({ location }) => (
				<AnimatePresence initial={false} exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/home" component={Home} />
						<Route exact path="/home/:id" component={Todo} />
						<Route exact path="/search" component={Search} />
						<Redirect from="/" to="/home" />
					</Switch>
				</AnimatePresence>
			)}
		/>
	);
};

export default Main;
