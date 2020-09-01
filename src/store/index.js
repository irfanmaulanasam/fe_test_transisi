import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userDetail: {
      email: '',
      password: '',
    },
    listUser: [],
    taskOrder: [
      {
        checklist: true,
        taskName: "Create initial layout for homepage",
        status: 3
      },
      {
        checklist: true,
        taskName: "Fixing Icons with transparent background",
        status: 1
      },
      {
        checklist: false,
        taskName: "Fixing Icons with transparent background",
        status: 1
      },
      {
        checklist: true,
        taskName: "Discussions regardin workflow improvement",
        status: 2
      },
      {
        checklist: false,
        taskName: "create quotation for app redesign project",
        status: 0
      }
    ],
    projectCollection: [
      'green house',
      'cyber punk',
      'easy crypto',
      'travel app',
      'landing page',
      'e commerce',
      'blog writing',
      'cullinary recipe',
      'iot',
      'over load',
      'nothing',
      'cullinary recipe',
      'iot',
      'over load',
      'nothing',
    ],
    selectedProject: 'easy crypto'
  },
  mutations: {
    setListUser(state, data) {
      state.listUser = data
    }
  },
  actions: {
    getListUser({ commit }) {
      Axios
        .get('https:/reqres.in/api/users?page=1')
        .then(res => res.data)
        .then(data => {
          commit('setListUser', data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    loginUser(context) {
      context.commit("LOGIN_USER")
    }
  },
  getters:{
    getUserDetails: state => {
      return state.userDetails.email
    }
  },
  modules: {
  }
})
