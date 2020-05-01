import { Pokeballs } from 'get-pokeball'

import { pokemonF } from '../source'

test('pokemon f', () => {
  const hpMax = 35
  const hpCurrent = 23
  const F = pokemonF(hpMax, Pokeballs.Pokeball, hpCurrent)

  expect(F).toBeTruthy()
})
