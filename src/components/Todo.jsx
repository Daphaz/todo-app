import React from "react";
import { AiFillEdit, AiFillSave, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Todo = ({ item, editToggle }) => {
	const handleClick = () => {
		editToggle(item.id);
	};

	return (
		<div
			className={`todo ${item.classAnimation}`}
			id={`todo${item.id}`}
			style={{ backgroundColor: item.color, order: -item.id }}>
			<span className="todo_label">
				<svg viewBox="0 0 500 500">
					<path
						fill="transparent"
						id="curve"
						d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
					/>
					<text width="500">
						<textPath href="#curve" fill="#ffffff80">
							{item.label}
						</textPath>
					</text>
				</svg>
			</span>
			<textarea
				name="text"
				minLength="1"
				maxLength="500"
				placeholder={item.placeholder}
				disabled={!item.edit}></textarea>
			<footer>
				<div className="date_todo">{item.createdAt}</div>
				<Link to={`/home/${item.id}`}>
					<div className="show_todo">
						<AiOutlineEye />
					</div>
				</Link>
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
