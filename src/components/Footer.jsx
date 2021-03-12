import React from "react";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Daphaz/todo-app"
					target="_blank"
					rel="noreferrer">
					See on Github
				</a>
			</div>
			<div className="copy">
				<FaRegCopyright />
				&nbsp;{new Date().getFullYear()}&nbsp;Todo-App
			</div>
		</footer>
	);
};
