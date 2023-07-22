// pokedex

// filters (page+pagelimit, poketype, sortorder/direction, [pokemon id])
const filters = { 
	pagelimit: 10, 
	page: 1,
	poketype: 'psychic',
	sortorder: 'id', //'id' or 'name'
	sortdir: 'asc'
};

// graphql endpoint
const pokeapi = "https://beta.pokeapi.co/graphql/v1beta";

//----------------------- TEST THE CODE

console.log('-----getAllPokemon-----');
let allpokes = await getAllPokemon(filters);
console.log(allpokes);

console.log('-----getPokemon-----');
let onepoke = await getPokemon(42); // golbat
console.log(onepoke);

//----------------------- FUNCTIONS

// builds graphql query w/ filters, queris the endpoint, & organizes the returned data for pokes
function getAllPokemon(filters) {
	
	// where clause (if poketype is defined)
	let whereClause = '';
	if (filters.poketype !== undefined) {
		whereClause = `, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${filters.poketype}}}}}`;
	}

	// order by (if sort order & direction are defined)
	let orderBy = '';
	if (filters.sortorder !== undefined && filters.sortdir !== undefined) {
		orderBy = `, order_by: {${filters.sortorder}: ${filters.sortdir}}`;
	}

	// calculate offset
	let offset = (filters.page-1)*filters.pagelimit;

	// build graphql query
	const qry = `
	query getPokes {
		pokes: pokemon_v2_pokemon(limit: ${filters.pagelimit}, offset: ${offset} ${whereClause} ${orderBy}) {
			name
			pokemon_v2_pokemontypes {pokemon_v2_type{id name}}
			id
			height
			weight
			pokemon_v2_pokemonstats {pokemon_v2_stat{name} base_stat}
		}
	}`;
	
	//fetch the data from the graphql api
	let qrydata = fetch(pokeapi, { method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({query: qry})
	}).then(x => x.json()).then(x => {
		const allpokedata = x.data.pokes.map(poke => { 
			const pokedata = { 
				name: poke.name,
				types: poke.pokemon_v2_pokemontypes.map(pktypes => pktypes.pokemon_v2_type.name), 
				id: poke.id,
				height: Math.round(poke.height*3.937), // decimeters -> inches
				weight: Math.round(poke.weight*2.20462)/10, // hectograms -> pounds 
				stats: {} //populated after
			};

			//bring the pokemon stats into struct
			poke.pokemon_v2_pokemonstats.forEach(
				pkstats => { pokedata.stats[pkstats.pokemon_v2_stat.name] = pkstats.base_stat }
			);

			return pokedata;
		});
		return allpokedata;
	});

	return qrydata;
}

// grabs an individual pokemon's data (structure should match getAllPokemon)
function getPokemon(pokeid) {
	// build graphql query to get single poke based on id
	const qry = `
	query getPoke {
		poke: pokemon_v2_pokemon(limit: 1, where: {id: {_eq: ${pokeid}}}) {
			name
			pokemon_v2_pokemontypes {pokemon_v2_type{id name}}
			id
			height
			weight
			pokemon_v2_pokemonstats {pokemon_v2_stat{name} base_stat}
		}
	}`;
	
	//fetch the data from the graphql api
	let qrydata = fetch(pokeapi, { method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({query: qry})
	}).then(x => x.json()).then(x => {
		const allpokedata = x.data.poke.map(poke => { 
			const pokedata = { 
				name: poke.name,
				types: poke.pokemon_v2_pokemontypes.map(pktypes => pktypes.pokemon_v2_type.name), 
				id: poke.id,
				height: Math.round(poke.height*3.937), // decimeters -> inches
				weight: Math.round(poke.weight*2.20462)/10, // hectograms -> pounds 
				stats: {} //populated after
			};

			//bring the pokemon stats into struct
			poke.pokemon_v2_pokemonstats.forEach(
				pkstats => { pokedata.stats[pkstats.pokemon_v2_stat.name] = pkstats.base_stat }
			);

			return pokedata;
		});
		return allpokedata[0];
	});

	return qrydata;
}
