import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export const Todo = () => {
	const [edit, setEdit] = useState(true);

	const handleClick = () => {
		setEdit(!edit);
	};

	return (
		<div className="todo">
			<textarea
				name="text"
				minLength="1"
				maxLength="500"
				placeholder="The beginning of screenless design: UI jobs to be take over by Solution Architect"
				disabled={edit}></textarea>
			<footer>
				<div>March 09,2021</div>
				<button
					className="btn btn_edit"
					aria-label="edit task"
					onClick={handleClick}>
					<AiFillEdit />
				</button>
			</footer>
		</div>
	);
};
