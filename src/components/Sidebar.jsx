import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import anime from "animejs";

export const Sidebar = () => {
	const [toggle, setToggle] = useState(true);
	const [btnDisable, setBtnDisable] = useState(false);

	const handleDisable = () => {
		setBtnDisable(false);
	};

	const handleClick = () => {
		const tl = anime.timeline();
		if (toggle) {
			tl.add({
				targets: ".add_todo",
				translateY: [0, -12, 0],
				scale: [1, 0.85, 1],
				rotate: 316,
				duration: 600,
				easing: "easeInOutSine",
				begin: () => setBtnDisable(true),
			})
				.add(
					{
						targets: ".d1",
						translateY: [0, 80],
						duration: 3200,
						scaleY: [1.8, 1],
					},
					"-=400"
				)
				.add(
					{
						targets: ".other",
						translateY: function (el) {
							return [el.getAttribute("data-from"), el.getAttribute("data-to")];
						},
						scaleY: [0, 1],
						duration: 1600,
						opacity: {
							value: 1,
							duration: 10,
						},
						delay: anime.stagger(240),
						complete: handleDisable,
					},
					"-=2600"
				);
		} else {
			tl.add({
				targets: ".add_todo",
				rotate: 0,
				duration: 800,
				easing: "easeInOutSine",
				begin: () => setBtnDisable(true),
			}).add(
				{
					targets: ".dot",
					translateY: function (el) {
						return [el.getAttribute("data-to"), 0];
					},
					duration: 400,
					delay: anime.stagger(60),
					easing: "easeInOutSine",
					complete: handleDisable,
				},
				"-=700"
			);
		}
		setToggle(!toggle);
	};

	return (
		<aside className="sidebar">
			<div className="logo">
				<Link to="/home">Docket</Link>
			</div>
			<div className="color_items">
				<div className="dots_container">
					<button
						className="btn add_todo"
						aria-label="add new task"
						onClick={handleClick}
						disabled={btnDisable}>
						<RiAddLine />
					</button>
					<div className="dots">
						<div className="dot d1" data-from="0" data-to="80"></div>
						<div className="dot d2 other" data-from="100" data-to="140"></div>
						<div className="dot d3 other" data-from="160" data-to="200"></div>
						<div className="dot d4 other" data-from="220" data-to="260"></div>
						<div className="dot d5 other" data-from="280" data-to="320"></div>
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
		</aside>
	);
};
