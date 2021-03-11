import React from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Content } from "./Content";
import { Footer } from "./Footer";

export const Layout = ({ children, returnBtn }) => {
	return (
		<div className="grid_container">
			<Header />
			<Sidebar returnBtn={returnBtn} />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};
