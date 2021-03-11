import React from "react";
import { AiFillEdit, AiFillSave } from "react-icons/ai";

export const Todo = ({ item, editToggle }) => {
	const handleClick = () => {
		editToggle(item.id);
	};

	return (
		<div
			className={`todo ${item.classAnimation}`}
			id={`todo${item.id}`}
			style={{ backgroundColor: item.color, order: -item.id }}>
			<textarea
				name="text"
				minLength="1"
				maxLength="500"
				placeholder={item.placeholder}
				disabled={!item.edit}></textarea>
			<footer>
				<div>{item.createdAt}</div>
				<button
					className="btn btn_edit"
					aria-label="edit task"
					onClick={handleClick}>
					{!item.edit ? <AiFillEdit /> : <AiFillSave />}
				</button>
			</footer>
		</div>
	);
};
