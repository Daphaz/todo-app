import React from "react";
import { Layout } from "../components";
import { Todo } from "../components/Todo";

const Home = () => {
	return (
		<Layout>
			<h1>Notes</h1>
			<div className="todo_list">
				<Todo />
			</div>
		</Layout>
	);
};

export default Home;
