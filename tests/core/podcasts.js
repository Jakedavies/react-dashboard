import {List, Map} from 'immutable'
import {expect} from 'chai'

import {setEntries} from '../src/core'

describe('podcast logic', () => {
  describe('setPodcasts', () => {
    it('adds the podcasts to the state', () => {
      const state = Map()
      const entries = List.of('Trainspotting', '28 Days Later')
      const nextState = setEntries(state, entries)
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })
  })
})
