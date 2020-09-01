<template>
  <div id="avatar">
    <div class="flex justify-center items-center m-2" v-if="listUser.length < 1">
      <img class="avatar object-cover z-40" src="http://placeimg.com/80/80/people">
      <img class="avatar object-cover z-20" src="http://placeimg.com/80/80/animals">
      <img class="avatar object-cover z-10" src="http://placeimg.com/80/80/tech">
      <img class="avatar object-cover z-0" src="http://placeimg.com/80/80/sport">
      <div class="flex justify-center items-center w-5 h-5 border-2 border-gray-400 rounded-full p-2 text-sm text-gray-500">
        +
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center m-2" v-else>
      <div class="border border-red-800">
        <img class="avatar object-cover z-40" :src="listUser[0].avatar">
        <img class="avatar object-cover z-20" :src="hlistUser[1].avatar">
        <img class="avatar object-cover z-10" :src="listUser[2].avatar">
        <img class="avatar object-cover z-0" :src="listUser[3].avatar">
        <div class="flex justify-center items-center w-5 h-5 border-2 border-gray-400 rounded-full p-2 text-sm text-gray-500">
        +
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('getListUser')
  },
  computed:{
    listUser(){
      return this.$store.state.listUser
    }
  }
}
</script>

<style>
.avatar {
	width: 30px;
  height: 30px;
  border-width: 3px;
  border-color: white;
  border-radius: 50%; 
  margin-left: -15px;
}
</style>