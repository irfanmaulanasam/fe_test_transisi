<template>
  <div class="flex justify-center items-center m-2">
    <img class="avatar z-40" src="http://placeimg.com/80/80/people">
    <img class="avatar z-20" src="http://placeimg.com/80/80/animals">
    <img class="avatar z-10" src="http://placeimg.com/80/80/tech">
    <img class="avatar z-0" src="http://placeimg.com/80/80/sport">
    <div class="flex justify-center items-center w-5 h-5 border-2 border-gray-400 rounded-full p-2 text-sm text-gray-500">
      +
    </div>
  </div>
</template>

<script>
export default {

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