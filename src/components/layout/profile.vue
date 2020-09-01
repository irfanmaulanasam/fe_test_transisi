<template>
 <div>
    <submenu class="w-6 h-6 mt-6 ml-6"/>	
    <div class="p-4 md:p-12 text-center lg:text-left text-white">		
        <h1 class="text-3xl font-bold pt-8 lg:pt-0 capitalize">Hi {{getUsername(email)}}</h1>
        <p class="text-xs text-gray-700">Welcome Back to the workspace, we miss you!</p>
        <div class="w-3/4 mt-6 mb-10">
          <searchProject/>
        </div>
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
    }
  },
  methods:{
    getUsername(email){
      if (email) {
        return email.split('@')[0]
      } else {
        return 'stranger'
      }
    }
  },
  computed:{
    email(){
      return this.$store.state.userDetail.email
    },
    projectCollection(){
      return this.$store.state.projectCollection
    }
  }
}
</script>

<style>

</style>