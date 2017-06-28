# pokemon-f [![Build Status](https://travis-ci.org/bukinoshita/pokemon-f.svg?branch=master)](https://travis-ci.org/bukinoshita/pokemon-f)

> Algorithm to calculate `f` on capture pokemon method


## Install

```
$ npm install --save pokemon-f
```


## Usage
```js
const pokemonF = require('pokemon-f')

pokemonF(35, 255, 23)
// => 6
```


## API

### pokemonF(hpMax, pokeball, hpCurrent)

returns an `integer` between 1-255.

#### hpMax

Type: `number`<br/>
Required

Pokemon HPMax

#### pokeball

Type: `number`<br/>
Options:
- Pokeball: `255`
- Greatball: `200`
- Ultraball: `150`
- Safariball: `150`

Pokeball type value


#### hpCurrent

Type: `number`<br/>
Required

Pokemon current HP


## Related

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Pokemon game - Gotta catch 'em all
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake-quote) — Algorithm to determine how many times pokeball shakes


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
