import React from "react";
import { Layout } from "../components";
import ListTodo from "../components/ListTodo";

const Home = () => {
	return (
		<Layout>
			<h1>Notes</h1>
			<ListTodo />
		</Layout>
	);
};

export default Home;
