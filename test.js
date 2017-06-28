'use strict'

import test from 'ava'
import m from './'

test(t => {
  const hpMax = 35
  const pokeball = 12
  const hpCurrent = 23
  t.true(Number.isInteger(m(hpMax, pokeball, hpCurrent)))
})
