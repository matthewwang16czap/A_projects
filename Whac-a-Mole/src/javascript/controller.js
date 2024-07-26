import { State } from "./model.js";
import { View } from "./view.js";

// * ~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~
export const Controller = ((view) => {
	const state = new State(view);

	const click_to_find = () => {
		const content = document.querySelector(view.element_specifiers.grid_container);
		content.addEventListener("click", (e) => {
			// find, reset image to empty
			if (e.target.className.indexOf("thumbnail") != -1) {
				state.block_status = [+e.target.className.split("thumbnail block")[1], ""];
				state.score++;
			}
		});
	};

	const init = () => {
		// reset state
		state.block_status = Array(12).fill(0).map(
			(cur,idx) => ({id: idx, content: ''})
		);
		state.score = 0;
		state.lefttime = 30;
	};

	const bootstrap = () => {
		init();
		click_to_find();
	};

	return { bootstrap };
})(View);
