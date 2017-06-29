'use strict'

const getPokeball = require('get-pokeball')

module.exports = async (hpMax, pokeball, hpCurrent) => {
  if (typeof hpMax !== 'number') {
    throw new TypeError('hpMax should be a number')
  }

  if (typeof hpCurrent !== 'number') {
    throw new TypeError('hpCurrent should be a number')
  }

  if (typeof pokeball !== 'string') {
    throw new TypeError('pokeball should be a string')
  }

  const ball = await getPokeball(pokeball)
  const f = Math.floor(hpMax * 255 * 4 / (hpCurrent * ball.value.f))

  if (f < 1 || f > 255) {
    throw new TypeError('An error occurred')
  }

  return f
}
