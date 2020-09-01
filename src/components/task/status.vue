<template>
  <div
  class="cursor-pointer"
  >
    <div class="flex items-center justify-center text-xs font-bold rounded-full py-1 px-4 border bg-gray-500 text-gray-700 border-gray-600 "
    v-if="status==0"
    >
    waiting 
    </div>
    <div class="flex items-center justify-center text-xs font-bold rounded-full py-1 px-4 border bg-blue-200 text-blue-600 border-blue-400"
    v-else-if="status==1"
    >
    in progress
    </div>
    <div class="flex items-center justify-center text-xs font-bold rounded-full py-1 px-4 border bg-red-200 text-red-600 border-red-400"
    v-else-if="status==2"
    >
    in review
    </div>
    
    <div class="flex items-center justify-center text-xs font-bold rounded-full py-1 px-4 border bg-green-200 text-green-600 border-green-400"
    v-else
    >
    Approved
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    status:{
      type:Number,
      default:0,
    },
  }
}
</script>

<style>

</style>