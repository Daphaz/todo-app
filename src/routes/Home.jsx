import React from "react";
import { Layout } from "../components";
import ListTodo from "../components/ListTodo";

const Home = (props) => {
	return (
		<Layout>
			<ListTodo title="Notes" {...props} />
		</Layout>
	);
};

export default Home;
