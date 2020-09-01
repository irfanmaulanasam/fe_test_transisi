<template>
  <div
    class="rounded-full h-6 w-6 flex items-center justify-center border-gray-600 border-2"
  >
    <div v-if="status">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="22" 
        height="22" 
        viewBox="0 0 24 24"
        class="fill-current stroke-current text-green-700"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
      </svg>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  props:{
    status:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style>

</style>