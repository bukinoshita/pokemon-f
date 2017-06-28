'use strict'

import test from 'ava'
import m from './'

test(t => {
  const hpMax = 35
  const pokeball = 255
  const hpCurrent = 23
  console.log(m(hpMax, pokeball, hpCurrent))
  t.true(Number.isInteger(m(hpMax, pokeball, hpCurrent)))
})
