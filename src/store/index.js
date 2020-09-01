import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    userDetail: {
      email: 'cacaca@gmo.com',
      password: '',
    },
    listUser:[],
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
    projectCollection:[
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
    selectedProject:'easy crypto'
  },
  mutations: {
  },
  actions: {
    getListUser(){
      
    }
  },
  modules: {
  }
})
