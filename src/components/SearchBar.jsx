import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

export const SearchBar = ({ history }) => {
	const [searchValue, setSearchValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		history.push("/search", searchValue);
	};

	return (
		<form className="searchBar" onSubmit={onSubmit}>
			<button type="submit" className="btn" aria-label="search button">
				<RiSearch2Line />
			</button>
			<input
				type="text"
				name="search"
				placeholder="Search"
				onChange={(e) => setSearchValue(e.target.value)}
			/>
		</form>
	);
};
