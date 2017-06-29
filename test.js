'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const hpMax = 35
  const hpCurrent = 23
  t.true(Number.isInteger(await m(hpMax, 'pokeball', hpCurrent)))
})
