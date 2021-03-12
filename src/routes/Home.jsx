import React from "react";
import { Layout } from "../components";
import ListTodo from "../components/ListTodo";

const Home = (props) => {
	return (
		<Layout {...props}>
			<ListTodo title="Notes" />
		</Layout>
	);
};

export default Home;
