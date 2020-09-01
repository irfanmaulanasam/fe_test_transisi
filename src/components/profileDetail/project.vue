<template>
  <div class="grid grid-cols-3 gap-6">
    <div
      v-for="i in 6"
      :key="i"
      class="flex flex-col justify-center items-center h-24 w-24 mx-auto"
    >
      <div :class="{'border-2 border-red-300 p-1 rounded-lg':isSelectedProject(project[i])}">
        <div
          class="flex flex-col justify-center items-center h-16 w-16 rounded-md bg-red-300 shadow-sm"
        >
          <p class="uppercase font-bold" v-if="i < projectNumber">{{getInitial(project[i])}}</p>
          <p class="uppercase font-bold" v-else>{{project.length - (i+1)}}+</p>
        </div>
      </div>
      <p class="text-xs text gray-200 capitalize font-thin" 
          :class="{'mt-1':isSelectedProject(project[i]),'mt-3':!isSelectedProject(project[i])}"
       v-if="i < projectNumber">{{project[i]}}</p>
      <p class="text-xs text gray-200 mt-3 opacity-0" v-else>dont show</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Array
    }
  },
  data() {
    return {
      projectNumber: 6
    };
  },
  methods: {
    getInitial(name) {
      let init = name.split(" ");
      return init[0][0] + init[1][0];
    },
    isSelectedProject(name){
      if (this.selectedProject === name) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    selectedProject() {
      return this.$store.state.selectedProject;
    },
  }
};
</script>

<style>
</style>