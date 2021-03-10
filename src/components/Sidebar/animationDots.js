import { useState } from "react";
import anime from "animejs";

const AnimationDots = () => {
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
	return {
		handleClick,
		btnDisable,
	};
};

export default AnimationDots;
