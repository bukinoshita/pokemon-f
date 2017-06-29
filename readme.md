# pokemon-f [![Build Status](https://travis-ci.org/bukinoshita/pokemon-f.svg?branch=master)](https://travis-ci.org/bukinoshita/pokemon-f)

> Algorithm to calculate `f` on capture pokemon method


## Install

```
$ npm install --save pokemon-f
```


## Usage
```js
const pokemonF = require('pokemon-f')

pokemonF(35, 'pokeball', 23)
// => 129
```


## API

### pokemonF(hpMax, pokeball, hpCurrent)

returns a `promise`

#### hpMax

Type: `number`<br/>
Required

Pokemon HPMax

#### pokeball

Type: `string`<br/>
Required<br/>
Options: `pokeball`, `greatball`, `ultraball` and `safariball`

Pokeball's name


#### hpCurrent

Type: `number`<br/>
Required

Pokemon current HP


## Related

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
