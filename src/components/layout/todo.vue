<template>
  <div class="bg-white rounded m-0 lg:m-2 px-2 relative">
    <div class="flex m-0 lg:m-1">
      <div class="flex flex-col">
          <h4 class="text-xl font-bold pt-8 lg:pt-0 capitalize">{{selectedProject}}</h4>
          <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi nemo, </p>
      </div>
      <avatar/>
    </div>
    <div class="flex justify-between w-full mt-5 px-2">
        <h4 class="text-xl font-bold items-start w-3/4">Today</h4>
        <div class="flex flex-col justify-center items-end">
          <!-- <p class="text-2xl">
            ...
          </p> -->
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="fill-current text-gray-400"
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
          >
            <path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
          </svg>
        </div>
    </div>
    <div class="h-1 mx-auto lg:mx-0 w-full border-b-2 border-gray-500 opacity-25"></div>
    <task
      :order="order"
    />
    <div
      class="absolute bottom-0 right-0 mb-2 mr-2"
    >
      <button class="flex justify-center items-center rounded-lg border h-10 w-10  bg-purple-600 shadow-lg"
        @click="addTask"
      >
        <svg 
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" viewBox="0 0 24 24"
        >
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import task from '@/components/task'
import avatar from '@/components/task/avatar'
export default {
  components:{
    task,
    avatar
  },
  methods:{
    addTask() {
      let data = this.order[this.getNumber(this.order.length-1)];
      this.order.push(data);
    },
    getNumber(number){
      return Math.floor(Math.random()*number)
    }
  },
  computed:{
    selectedProject() {
      return this.$store.state.selectedProject;
    },
    order(){
      return this.$store.state['taskOrder']
    }
  }
}
</script>

<style>

</style>