import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./routes/Todo";
import { AnimatePresence } from "framer-motion";

const divDimensions = {
	width: 300,
	height: 300,
};

const Main = () => {
	return (
		<Route
			render={({ location }) => (
				<AnimatePresence initial={false} exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route
							exact
							path="/home"
							render={(props) => (
								<Home divDimensions={divDimensions} {...props} />
							)}
						/>
						<Route
							exact
							path="/home/:id"
							render={(props) => (
								<Todo divDimensions={divDimensions} {...props} />
							)}
						/>
						<Redirect from="/" to="/home" />
					</Switch>
				</AnimatePresence>
			)}
		/>
	);
};

export default Main;
