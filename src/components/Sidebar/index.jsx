import React from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import AnimationDots from "./animationDots";
import AnimTodo from "./animTodo";
import { connect } from "react-redux";
import { addTodo, removeClassTodo } from "../../redux/actionCreator";
import { AiOutlineUp } from "react-icons/ai";

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (color, classAnimation, label) =>
			dispatch(addTodo(color, classAnimation, label)),
		removeClassTodo: () => dispatch(removeClassTodo()),
	};
};

const Sidebar = ({ addTodo, removeClassTodo, returnBtn }) => {
	const { handleClick, btnDisable } = AnimationDots();
	const { handleAddTodo } = AnimTodo(addTodo, removeClassTodo);

	return (
		<aside className="sidebar">
			<div className="logo">
				<Link to="/home">Docket</Link>
			</div>
			{!returnBtn ? (
				<div className="color_items">
					<div className="dots_container">
						<button
							className="btn add_todo"
							aria-label="add new task"
							onClick={handleClick}
							disabled={btnDisable}>
							<RiAddLine />
						</button>
						<div
							className="dots"
							style={{ pointerEvents: btnDisable ? "none" : "visible" }}>
							<div
								className="dot d1"
								data-from="0"
								data-to="80"
								onClick={() => handleAddTodo("var(--yellow-color)", ".d1Svg")}>
								<div
									className="d1Svg"
									id="pointerSvg"
									data-x="138"
									data-y="-46"
									data-label="shopping">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											className="shape"
											d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
											fill="#ffd19c"
										/>
									</svg>
								</div>
							</div>
							<div
								className="dot d2 other"
								data-from="100"
								data-to="140"
								onClick={() => handleAddTodo("var(--orange-color)", ".d2Svg")}>
								<div
									className="d2Svg"
									id="pointerSvg"
									data-x="138"
									data-y="-106"
									data-label="important">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											className="shape"
											d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
											fill="#ffaa93"
										/>
									</svg>
								</div>
							</div>
							<div
								className="dot d3 other"
								data-from="160"
								data-to="200"
								onClick={() => handleAddTodo("var(--purple-color)", ".d3Svg")}>
								<div
									className="d3Svg"
									id="pointerSvg"
									data-x="138"
									data-y="-166"
									data-label="personal">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											className="shape"
											d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
											fill="#c0adff"
										/>
									</svg>
								</div>
							</div>
							<div
								className="dot d4 other"
								data-from="220"
								data-to="260"
								onClick={() => handleAddTodo("var(--blue-color)", ".d4Svg")}>
								<div
									className="d4Svg"
									id="pointerSvg"
									data-x="138"
									data-y="-226"
									data-label="work">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											className="shape"
											d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
											fill="#9fdcfd"
										/>
									</svg>
								</div>
							</div>
							<div
								className="dot d5 other"
								data-from="280"
								data-to="320"
								onClick={() => handleAddTodo("var(--green-color)", ".d5Svg")}>
								<div
									className="d5Svg"
									id="pointerSvg"
									data-x="138"
									data-y="-286"
									data-label="sport">
									<svg
										width="300"
										height="300"
										viewBox="0 0 300 300"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											className="shape"
											d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
											fill="#dae0ae"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
						<defs>
							<filter id="gooey-effect">
								<feGaussianBlur
									in="SourceGraphic"
									stdDeviation="10"
									result="blur"
								/>
								<feColorMatrix
									in="blur"
									mode="matrix"
									values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
									result="gooey-effect"
								/>
								<feComposite
									in="SourceGraphic"
									in2="gooey-effect"
									operator="atop"
								/>
							</filter>
						</defs>
					</svg>
				</div>
			) : (
				<Link className="return_btn" to="/home">
					<AiOutlineUp />
				</Link>
			)}
		</aside>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
