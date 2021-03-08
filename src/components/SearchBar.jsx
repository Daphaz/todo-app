import React from "react";
import { RiSearch2Line } from "react-icons/ri";

export const SearchBar = () => {
	return (
		<div className="searchBar">
			<RiSearch2Line />
			<input type="text" name="search" placeholder="Search" />
		</div>
	);
};
