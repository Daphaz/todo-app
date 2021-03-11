import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Footer } from "./Footer";

export const Layout = ({ todos, children, addTodo }) => {
	return (
		<div className="grid_container">
			<Header />
			<Sidebar todos={todos} addTodo={addTodo} />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};
