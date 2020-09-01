<template>
  <div class="bg-gray-700">
    <div class="flex max-w-4xl  items-center h-auto lg:h-screen flex-wrap mx-auto my-auto">
      <div 
        id="profile" 
        class="flex flex-col lg:flex-row w-full  h-auto justify-between rounded-lg shadow-2xl bg-white mx-6 lg:mx-0 bg-gray-900"
      >  
        <profile/>
        <todo/>
      </div>	
    </div>	
  </div>
</template>

<script>
import profile from '@/components/layout/profile.vue';
import todo from '@/components/layout/todo.vue';
export default {
  components:{
    profile,
    todo
  }

}
</script>
<style>
/* .app{
  background-color: silver;
  align-content: center;
} */
/* .container{
  background-color: blueviolet;
  display: flex;
  height: 450px;
  width: 75%;

}
.main{
  background-color: transparent;
}
.section{
  background-color: whitesmoke;
} */
</style>