import React from "react";
import { Layout } from "../components";
import { Todo } from "../components/Todo";

const Home = ({ todos, addTodo, editToggle }) => {
	return (
		<Layout todos={todos} addTodo={addTodo}>
			<h1>Notes</h1>
			<div className="todo_list">
				{todos.map((t) => (
					<Todo key={t.id} item={t} editToggle={editToggle} />
				))}
			</div>
		</Layout>
	);
};

export default Home;
