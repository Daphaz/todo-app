import "./sass/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import { Provider } from "react-redux";
import { ConfigStore } from "./redux/configStore";

const store = ConfigStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Main />
		</Router>
	</Provider>,
	document.getElementById("react")
);
