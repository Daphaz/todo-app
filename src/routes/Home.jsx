import React from "react";
import { Layout } from "../components";
import ListTodo from "../components/ListTodo";

const Home = () => {
	return (
		<Layout>
			<ListTodo title="Notes" />
		</Layout>
	);
};

export default Home;
