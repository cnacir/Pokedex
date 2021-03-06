var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var apiUrl2 = "https://fizal.me/pokeapi/api/v2/name/"
var pokeName = document.querySelector("body").id;
var nameStat = document.querySelector(".name");
var hpStat = document.querySelector(".hp");
var attackStat = document.querySelector(".attack");
var defenseStat = document.querySelector(".defense");
var abilitiesStat = document.querySelector(".abilities");
var input = document.querySelector("input");
var button = document.querySelector("button");

// var frame = document.querySelectorAll(".frames");
// var balls = document.querySelectorAll(".balls");


function pokemonData(pokeName) {
	axios.get(apiUrl2 + pokeName + ".json")
		.then(response => {
			var data = response.data;
			var stat = data.stats;
			var moniker = data.name;
			var abilities = data.abilities;


			newPokemon = new Pokemon(moniker, stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, abilities);

			nameStat.innerHTML = `NAME: ${newPokemon.name}`
			hpStat.innerHTML = `HP: ${newPokemon.hp}`
			attackStat.innerHTML = `ATTACK: ${newPokemon.attack}`
			defenseStat.innerHTML = `DEFENSE: ${newPokemon.defense}`

			var loopsicle = [];
			for (i = 0; i < newPokemon.abilities.length; i++) {
				loopsicle += "<br /> <br />" + abilities[i].ability.name;
			};

			abilitiesStat.innerHTML = `ABILITIES: ${loopsicle}`
		});
}

document.addEventListener("DOMContentLoaded", (event) => {
	pokemonData(pokeName);
});
button.addEventListener("click", (event) => {
	alert(`Hi, ${input.value}! Are you ready for your first pokemon team?\n Please click each pokeball to meet your new friends!`)
});


// 	balls[0].addEventListener("mouseover", (event) => {
// 		frame[0].classList.add("show");
// 	});
//
// 	balls[0l].addEventListener("mouseout", (event) => {
// 		frame[0].classList.remove("show");
// 	});
// };
