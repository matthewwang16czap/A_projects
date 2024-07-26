export class State {
	#block_status = Array(12).fill(0).map(
		(cur,idx) => ({id: idx, content: ''})
	);
	#score = 0;
	#lefttime = 30;
	#mole_num = 0;

	constructor(view) {
		this.view = view;
	}

	get block_status() {
		return this.#block_status;
	}

	set block_status(update_info) {
		// update whole
		if (update_info.length > 2) {
			this.#block_status = update_info;
		}
		else {
			let [id, content] = update_info;
			this.#block_status[id]['content'] = content;
		}
		const template = this.view.create_content(this.#block_status);
		let element = document.querySelector(this.view.element_specifiers.grid_container);
		this.view.render(element, template);
	}

	get score() {
		return this.#score;
	}

	set score(num) {
		this.#score = num;
		const template = this.view.update_score(this.#score);
		let element = document.querySelector(this.view.element_specifiers.scoreboard);
		this.view.render(element, template);
	}

	get lefttime() {
		return this.#lefttime;
	}

	set lefttime(num) {
		this.#lefttime = num;
		const template = this.view.update_lefttime(this.#lefttime);
		let element = document.querySelector(this.view.element_specifiers.lefttime);
		this.view.render(element, template);
	}

	get mole_num() {
		return this.#mole_num;
	}

	set mole_num(num) {
		this.#mole_num = num;
	}
}
