<template>
  <div class="grid grid-cols-3 gap-6">
    <div
     v-for="i in 6" :key="i"
     class="flex flex-col justify-center items-center h-24 w-24 mx-auto"
    >
      <div
      class="flex flex-col justify-center items-center h-16 w-16 rounded-md bg-red-300 shadow-sm"
      >
      <p class="uppercase font-bold"
       v-if="i < projectNumber"
      >
        {{getInitial(project[i])}}
      </p>
      <p class="uppercase font-bold"
       v-else
      >
        {{project.length - projectNumber}}+
      </p>
      </div>
      <p class="text-xs text gray-200 mt-3 capitalize"
       v-if="i < projectNumber"
      >
        {{project[i]}}
      </p>
      <p class="text-xs text gray-200 mt-3 opacity-0"
       v-else
      >
         dont show
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    project:{
      type: Array,
    }
  },
  data(){
    return{
      projectNumber: 6,
    }
  },
  methods:{
    getInitial(name){
      let init = name.split(' ')
      return init[0][0]+init[1][0] 
    }
  }
}
</script>

<style>

</style>