import Vuex from 'vuex'
import index from '../../store'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('mutation', () => {
    test('increment ミューテーションがコミットされると、const ステートが +1 される', () => {
      expect(store.getters['count']).toBe(0)
      store.commit('increment')
      expect(store.getters['count']).toBe(1)
    })
  })

  describe('action', () => {
    test('increment アクションを dispatch する度に increment ミューテーションがコミットされる', () => {
      expect(store.getters['count']).toBe(0)
      store.dispatch('increment')
      expect(store.getters['count']).toBe(1)
    })
  })
})

