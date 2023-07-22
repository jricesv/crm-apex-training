# crm-apex-training
The goal of this project is to prepare a developer with practical experience using TypeScript and GraphQL to build a non-trivial application. In this case, we will be building a Pokédex web app. This app will have two (2) views: an index and a detail.

to run:
```npm install
node app.mjs
```

current output:
```$ node app.mjs
-----getAllPokemon-----
[
  {
    name: 'abra',
    types: [ 'psychic' ],
    id: 63,
    height: 35,
    weight: 43,
    stats: {
      hp: 25,
      attack: 20,
      defense: 15,
      'special-attack': 105,
      'special-defense': 55,
      speed: 90
    }
  },
  {
    name: 'kadabra',
    types: [ 'psychic' ],
    id: 64,
    height: 51,
    weight: 124.6,
    stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      'special-attack': 120,
      'special-defense': 70,
      speed: 105
    }
  },
  {
    name: 'alakazam',
    types: [ 'psychic' ],
    id: 65,
    height: 59,
    weight: 105.8,
    stats: {
      hp: 55,
      attack: 50,
      defense: 45,
      'special-attack': 135,
      'special-defense': 95,
      speed: 120
    }
  },
  {
    name: 'slowpoke',
    types: [ 'water', 'psychic' ],
    id: 79,
    height: 47,
    weight: 79.4,
    stats: {
      hp: 90,
      attack: 65,
      defense: 65,
      'special-attack': 40,
      'special-defense': 40,
      speed: 15
    }
  },
  {
    name: 'slowbro',
    types: [ 'water', 'psychic' ],
    id: 80,
    height: 63,
    weight: 173.1,
    stats: {
      hp: 95,
      attack: 75,
      defense: 110,
      'special-attack': 100,
      'special-defense': 80,
      speed: 30
    }
  },
  {
    name: 'drowzee',
    types: [ 'psychic' ],
    id: 96,
    height: 39,
    weight: 71.4,
    stats: {
      hp: 60,
      attack: 48,
      defense: 45,
      'special-attack': 43,
      'special-defense': 90,
      speed: 42
    }
  },
  {
    name: 'hypno',
    types: [ 'psychic' ],
    id: 97,
    height: 63,
    weight: 166.7,
    stats: {
      hp: 85,
      attack: 73,
      defense: 70,
      'special-attack': 73,
      'special-defense': 115,
      speed: 67
    }
  },
  {
    name: 'exeggcute',
    types: [ 'grass', 'psychic' ],
    id: 102,
    height: 16,
    weight: 5.5,
    stats: {
      hp: 60,
      attack: 40,
      defense: 80,
      'special-attack': 60,
      'special-defense': 45,
      speed: 40
    }
  },
  {
    name: 'exeggutor',
    types: [ 'grass', 'psychic' ],
    id: 103,
    height: 79,
    weight: 264.6,
    stats: {
      hp: 95,
      attack: 95,
      defense: 85,
      'special-attack': 125,
      'special-defense': 75,
      speed: 55
    }
  },
  {
    name: 'starmie',
    types: [ 'water', 'psychic' ],
    id: 121,
    height: 43,
    weight: 176.4,
    stats: {
      hp: 60,
      attack: 75,
      defense: 85,
      'special-attack': 100,
      'special-defense': 85,
      speed: 115
    }
  }
]
```
```
-----getPokemon-----
{
  name: 'golbat',
  types: [ 'poison', 'flying' ],
  id: 42,
  height: 63,
  weight: 121.3,
  stats: {
    hp: 75,
    attack: 80,
    defense: 70,
    'special-attack': 65,
    'special-defense': 75,
    speed: 90
  }
}
```
