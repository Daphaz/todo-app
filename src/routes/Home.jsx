import React, { useState } from "react";
import { Layout } from "../components";
import { Todo } from "../components/Todo";

const Home = () => {
	const [add, setAdd] = useState([
		{ id: 0, color: "var(--orange-color)", classAnimation: "" },
	]);
	return (
		<Layout setAdd={setAdd} add={add}>
			<h1>Notes</h1>
			<div className="todo_list">
				{add.map((a) => (
					<Todo key={a.id} items={a} classAnimation={a.classAnimation} />
				))}
			</div>
		</Layout>
	);
};

export default Home;
