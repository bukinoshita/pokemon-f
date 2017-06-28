'use strict'

module.exports = (hpMax, ball, hpCurrent) => {
  if (
    typeof hpMax !== 'number' ||
    typeof ball !== 'number' ||
    typeof hpCurrent !== 'number'
  ) {
    throw new TypeError('Parameter must be a number')
  }

  const f = Math.floor(hpMax * 255 * 4 / (hpCurrent * ball))

  if (f < 1 || f > 255) {
    throw new TypeError('An error occurred')
  }

  return f
}
