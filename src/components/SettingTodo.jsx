import React, { useState } from "react";
import { BiLabel, BiBadgeCheck, BiCog } from "react-icons/bi";
import animejs from "animejs";

export const SettingTodo = ({ idTodo, editLabel, todoDone }) => {
	const [toggle, setToggle] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleClick = () => {
		const tl = animejs.timeline();
		const el = document.querySelector(".toolkit");
		el.style.width = "0%";
		setToggleMenu(false);
		if (!toggle) {
			tl.add({
				targets: ".btn_set",
				rotate: "0.5turn",
				duration: 300,
				easing: "easeInOutSine",
			})
				.add(
					{
						targets: ".label",
						top: "-60%",
						left: "-100%",
						opacity: 1,
						duration: 150,
						easing: "easeInOutExpo",
					},
					"-=250"
				)
				.add(
					{
						targets: ".done",
						top: "-115%",
						opacity: 1,
						duration: 150,
						easing: "easeInOutExpo",
					},
					"-=75"
				);
		} else {
			tl.add({
				targets: ".btn_set",
				rotate: 0,
				duration: 300,
				easing: "easeInOutSine",
			})
				.add(
					{
						targets: ".done",
						top: "2",
						left: "2",
						opacity: 0,
						duration: 150,
						easing: "easeInOutExpo",
					},
					"-=250"
				)
				.add(
					{
						targets: ".label",
						top: "2",
						left: "2",
						opacity: 0,
						duration: 150,
						easing: "easeInOutExpo",
					},
					"-=75"
				);
		}

		setToggle(!toggle);
	};

	const handleMenu = () => {
		const tl = animejs.timeline();
		if (!toggleMenu) {
			tl.add({
				targets: ".toolkit",
				width: "350%",
				duration: 300,
				easing: "spring(1, 80, 10, 0)",
			});
		} else {
			tl.add({
				targets: ".toolkit",
				width: "0%",
				duration: 300,
				easing: "easeInExpo",
			});
		}
		setToggleMenu(!toggleMenu);
	};

	const handleChangeLabel = (label, color) => {
		editLabel(idTodo, label, color);
	};

	return (
		<div className="container_set">
			<div className="btn_set" onClick={handleClick}>
				<BiCog />
			</div>
			<div className="item label" onClick={handleMenu}>
				<ul className="toolkit">
					<li
						onClick={() =>
							handleChangeLabel("important", "var(--orange-color)")
						}>
						Important
					</li>
					<li
						onClick={() =>
							handleChangeLabel("shopping", "var(--yellow-color)")
						}>
						Shopping
					</li>
					<li onClick={() => handleChangeLabel("sport", "var(--green-color)")}>
						Sport
					</li>
					<li onClick={() => handleChangeLabel("work", "var(--blue-color)")}>
						Work
					</li>
					<li
						onClick={() =>
							handleChangeLabel("personal", "var(--purple-color)")
						}>
						Personal
					</li>
				</ul>
				<BiLabel />
			</div>
			<div className="item done" onClick={() => todoDone(idTodo)}>
				<BiBadgeCheck />
			</div>
		</div>
	);
};
