import anime from "animejs";

const AnimTodo = (setAdd, add) => {
	const pathcircle =
		"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z";
	const pathBig =
		"M283.5 300C281 300 20 300 18 300C11.5 300 0.499962 293 0 281C3.76701e-05 274.5 3.02792e-05 23.4055 3.02792e-05 16C3.02792e-05 7.16347 7.16347 1.12057e-05 16 1.12057e-05C22.1452 1.12057e-05 280 -3.05176e-05 280 -3.05176e-05C290.5 -3.05176e-05 300 9 300 18C300 25 300 280 300 283.5C298.821 293.171 289.5 298.5 283.5 300Z";
	const handleAddTodo = (color, dName) => {
		const tl = anime.timeline();
		const el = document.querySelector(dName);
		const X = el.getAttribute("data-x");
		const Y = el.getAttribute("data-y");
		setAdd([
			...add,
			{
				id: add[add.length - 1].id + 1,
				color,
				classAnimation: "start_animation",
			},
		]);

		const allReset = () => {
			const dot = document.querySelector(dName);
			const todo = document.querySelector(".todo.start_animation");
			const shape = document.querySelector(`${dName} .shape`);
			dot.style.transform = "translate(0,0)";
			todo.classList.remove("start_animation");
			shape.setAttribute("d", pathcircle);
		};

		tl.add({
			targets: dName,
			translateX: X,
			translateY: Y,
			duration: 600,
			easing: "easeInOutSine",
		}).add({
			targets: `${dName} .shape`,
			d: [{ value: pathBig }],
			duration: 750,
			easing: "easeOutExpo",
			complete: () => allReset(),
		});
	};
	return {
		handleAddTodo,
	};
};

export default AnimTodo;
