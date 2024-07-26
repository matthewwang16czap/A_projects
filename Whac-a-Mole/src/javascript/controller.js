import { State } from "./model.js";
import { View } from "./view.js";

// * ~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~
export const Controller = ((view) => {
	const state = new State(view);

	const init = () => {
		// reset state
		state.block_status = Array(12).fill(0).map(
			(cur,idx) => ({id: idx, content: ''})
		);
		state.score = 0;
		state.lefttime = 30;
		state.mole_num = 0;
	};

	const get_random_int = (min, max) => Math.floor(Math.random() * (max - min) + min);

	const click_to_find = () => {
		const content = document.querySelector(view.element_specifiers.grid_container);
		content.addEventListener("click", (e) => {
			// find, reset image to empty
			if (e.target.className.indexOf("thumbnail") != -1) {
				state.block_status = [+e.target.className.split("thumbnail block")[1], ""];
				state.score++;
				state.mole_num--;
			}
		});
	};

	const play_game = () => {
		const startbutton = document.querySelector(view.element_specifiers.startbutton);
		let game = null;
		startbutton.addEventListener("click", (e) => {
			if (e.target.innerText == "Start Game!") {
				// click button to start game
				// change the button to end game
				startbutton.innerText = "I Give Up.";
				game = setInterval(()=>{
					// if time up, end the game
					if (state.lefttime <= 0) {
						let final_score = state.score;
						clearInterval(game);
						init();
						alert(`You score is ${final_score}`);
					}
					else{
						// timing
						state.lefttime--;
						// generate a mole
						if (state.mole_num < 3) {
							let mole_idx = get_random_int(0,12);
							// successfully generate
							if (state.block_status[mole_idx]['content'] == '') {
								state.mole_num++;
								state.block_status = [mole_idx, 'mole'];
							}
						}
					}					
				}, 1000);
			}
			else {
				// end game and reset
				clearInterval(game);
				init();
				startbutton.innerText = "Start Game!";
			}
			
		});
		
	};

	const bootstrap = () => {
		init();
		click_to_find();
		play_game();
	};

	return { bootstrap };
})(View);
