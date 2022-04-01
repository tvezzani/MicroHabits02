import { AuthState } from '@/utils/useAuth0'
import { createStore } from 'vuex'

export default createStore({
  namespaced: true,
  state() {
    return {
      //testing
      something: 'Hello bob',
      goals: [],
      username: 'admin'
    }
  },
  getters: {
    displayGoals: (state) => state.goals,
    displaySomething: (state) => state.something,
    authenticated(state) {
      return !!state.user;
    }
  },
  mutations: {
    setSomething(state, something) {
      // example of modifying before storing
      state.something = String(something)
    },
    setGoals(state, goals) {
      state.goals = goals
    },
    setUser(state) {
      state.username = AuthState.user.name
    }
  },
  actions: {
    fetchSomething(store) {
      return (new Promise((resolve, reject) => {
        return resolve({ something: "hello dad" });
      }))
        .then(data => {
          store.commit('setSomething', data.something)
          return store.state.something
        })
    },
    fetchGoals(store) {
      return fetch(`http://localhost:3000/goals/${this.state.username}`)
        .then(response => response.json())
        .then(goals => {
          console.log(goals);
          goals = goals.map(goal => {
            return { correctAnswer: true, daysSuccessful: 0, daysTotal: 0, ...goal }
          })
          store.commit('setGoals', goals)
          return store.state.goals
        })
    }
  },
  modules: {
  }
})
