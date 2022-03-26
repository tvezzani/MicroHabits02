import { createStore } from 'vuex'

export default createStore({
  namespaced: true,
  state() {
    return {
      //testing
      something: 'Hello bob',
      goals: [
        {
          id: 1,
          title: "Wash Dishes",
          description: "Wash the dishes daily.",
          prompt: "Did you wash the dishes?",
          correctAnswer: true,
          daysSuccessful: 3,
          daysTotal: 23,
        },
        {
          id: 2,
          title: "Read Book",
          description: "Read a book to gain more knowledge.",
          prompt: "Did you read a book?",
          correctAnswer: true,
          daysSuccessful: 9,
          daysTotal: 12,
        },
        {
          id: 3,
          title: "Avoid Junkfood",
          description: "Do you really need that chocolate dougnut?",
          prompt: "Did you avoid junkfood?",
          correctAnswer: false,
          daysSuccessful: 14,
          daysTotal: 15,
        },
      ],
    }
  },
  getters: {
    displayGoals: (state) => state.goals,
    displaySomething: (state) => state.something
  },
  mutations: {
    setSomething(state, something) {
      // example of modifying before storing
      state.something = String(something)
    },
    setGoals(state, goals) {
      state.goals = goals
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
      return fetch('http://localhost:3000/goals/')
        .then(response => response.json())
        .then(goals => {
          console.log(goals);
          goals = goals.map(goal => {
            return {correctAnswer:true, daysSuccessful:0, daysTotal:0, ...goal}
          })
          store.commit('setGoals', goals)
          return store.state.goals
        })
    }
  },
  modules: {
  }
})
