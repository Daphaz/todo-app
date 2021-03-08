import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = () => {
	return (
		<header className="header">
			<div className="warpper">
				<SearchBar />
			</div>
		</header>
	);
};
