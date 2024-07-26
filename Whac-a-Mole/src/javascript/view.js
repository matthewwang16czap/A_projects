export const View = (() => {
	const element_specifiers = {
		thumbnail: ".thumbnail",
		grid_container: ".grid-container",
		scoreboard: ".scoreboard",
		lefttime: ".lefttime",
	};

	const render = (element, template) => {
		element.innerHTML = template;
	};

	const create_content = (arr) => {
		return arr.reduce((acc, cur_status) => {
			acc += `<div id="${cur_status.id}" class="circle">`;
			if (cur_status.content != "") {
				acc += `<img class="thumbnail block${cur_status.id}" src="./src/img/${cur_status.content}.jpg">`;
			}
			acc += `</div>`;
			return acc;
		},"");
	};

	const update_score = (num) => {
		return `Let's go! Your total score is ${num}`;
	}

	const update_lefttime = (num) => {
		return `${num}`;
	}

	return {
		element_specifiers,
		render,
		create_content,
		update_score,
		update_lefttime
	};
})();