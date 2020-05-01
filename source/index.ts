import { getPokeball, Pokeballs } from 'get-pokeball'

export function pokemonF(hpMax: number, pokeball: Pokeballs, hpCurrent: number) {
  const { value } = getPokeball(pokeball)
  const f = Math.floor((hpMax * 255 * 4) / (hpCurrent * value.f))

  if (f < 1 || f > 255) {
    return new TypeError('An error occurred')
  }

  return f
}
