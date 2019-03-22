import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

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
    ],
    events: [],
    eventsTotal: 0,
    event: null
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    UPDATE_EVENT_TOTAL(state, count) {
      state.eventsTotal = count
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent: ({ commit }, event) => {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvent: ({ commit, getters }, id) => {
      var event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    fetchEvents: ({ commit }, { perPage, page }) => {
      return EventService.getEvents(perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data)
          commit('UPDATE_EVENT_TOTAL', response.headers['x-total-count'])
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
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
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
