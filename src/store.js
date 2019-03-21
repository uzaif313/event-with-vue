import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: '13', name: 'Uzaif Nilger' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '....', done: true },
      { id: 2, text: '....', done: true },
      { id: 3, text: '....', done: true },
      { id: 4, text: '....', done: true },
      { id: 5, text: '....', done: true }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodos: (state, getters) => {
      // return state.todos.filter(todo => !todo.done).length
      return state.todos.length - getters.doneTodos.length
    }
  }
})
