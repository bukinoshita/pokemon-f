'use strict'

import test from 'ava'
import m from './'

test('pass', async t => {
  const hpMax = 35
  const hpCurrent = 23
  t.true(Number.isInteger(await m(hpMax, 'pokeball', hpCurrent)))
})

test('hpMax error', async t => {
  const hpMax = 'a'
  const hpCurrent = 23
  const error = await t.throws(m(hpMax, 'pokeball', hpCurrent))

  t.is(error.message, 'hpMax should be a number')
})

test('hpCurrent error', async t => {
  const hpMax = 35
  const hpCurrent = '23'
  const error = await t.throws(m(hpMax, 'pokeball', hpCurrent))

  t.is(error.message, 'hpCurrent should be a number')
})

test('pokeball error', async t => {
  const hpMax = 35
  const hpCurrent = 23
  const error = await t.throws(m(hpMax, 2, hpCurrent))

  t.is(error.message, 'pokeball should be a string')
})

test('pokeball not found', async t => {
  const hpMax = 35
  const hpCurrent = 23
  const error = await t.throws(m(hpMax, 'nice', hpCurrent))

  t.is(error.message, 'Pokeball not found')
})
