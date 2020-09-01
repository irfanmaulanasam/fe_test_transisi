<template>
  <div id="avatar">
    <div class="flex w-full justify-between mt-2">
      <div class="flex justify-center items-center" >
          <img class="avatar z-40" :src="listUser[0].avatar">
          <img class="avatar z-20" :src="listUser[1].avatar">
          <img class="avatar z-10" :src="listUser[2].avatar">
          <img class="avatar z-0" :src="listUser[3].avatar">
      </div>
      <div class="flex w-full justify-end ml-1 pl-1 mt-1">
        <svg 
          class="fill-current text-gray-500"
          width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
        >
          <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('getListUser')
  },
  computed:{
    listUser(){
      return this.$store.state.listUser
    }
  }
}
</script>

<style scoped>
.avatar {
	width: 30px;
  height: 30px;
  border-width: 3px;
  border-color: white;
  border-radius: 50%; 
  margin-left: -15px;
}
</style>