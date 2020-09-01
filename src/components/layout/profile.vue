<template>
 <div>
    <submenu class="w-6 h-6 mt-6 ml-6"/>	
    <div class="p-4 md:p-12 text-center lg:text-left text-white">		
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">HI Samanta</h1>
        <p class="text-sm">Welcome Back to the workspace, we miss you!</p>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
        <searchProject/>
        <div class="flex items-end space-around w-1/2 ">
          <div class="text-xl font-bold pt-8 lg:pt-0 mr-3 capitalize">
            project
          </div>
          <p class="text-gray-700 ">
            ({{projectCollection.length}})
          </p>
        </div>
        <project :project="projectCollection"/>
    </div>
 </div>
</template>

<script>
import submenu from '@/components/profileDetail/submenu'
import project from '@/components/profileDetail/project'
import searchProject from '@/components/profileDetail/searchProject'
export default {
  components:{
    project,
    submenu,
    searchProject
  },
  data(){
    return{
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
        ]
    }
  }
}
</script>

<style>

</style>