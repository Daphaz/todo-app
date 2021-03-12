import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = (props) => {
	return (
		<header className="header">
			<div className="warpper">
				<SearchBar {...props} />
			</div>
		</header>
	);
};
