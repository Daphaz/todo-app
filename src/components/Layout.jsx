import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Footer } from "./Footer";

export const Layout = ({ children, setAdd, add }) => {
	return (
		<div className="grid_container">
			<Header />
			<Sidebar setAdd={setAdd} add={add} />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};
