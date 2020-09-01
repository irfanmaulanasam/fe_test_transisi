<template>
  <div class="bg-white rounded m-2 px-2">
    <div class="flex">
      <div class="m-2">
        <h4 class="text-xl font-bold pt-8 lg:pt-0 capitalize">{{selectedProject}}</h4>
        <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi nemo, </p>
      </div>
      <avatar/>
    </div>
    <div class="flex mt-5">
        <h4 class="text-xl font-bold items-start w-3/4">Today</h4>
        <div class="flex flex-col w-1/4 pr-3 items-end">
          <p class="text-2xl">
            ...
          </p>
        </div>
    </div>
    <div class="mx-auto lg:mx-0 w-full border-b-2 border-blue-500 opacity-25"></div>
    <task/>
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
  computed:{
    selectedProject() {
      return this.$store.state.selectedProject;
    },
  }
}
</script>

<style>

</style>