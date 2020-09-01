<template>
  <div
    class="rounded-full h-6 w-6 flex items-center justify-center border-gray-400 border-2"
    :class="{'bg-green-300':status}"
  >
    <div v-if="status" class>
      <svg
        class="fill-current stroke-current text-white "
        stroke-width="2"
        viewBox="0 0 475 475"
      >
        <g transform="translate(0 -540.36)">
          <path d="M367.8,696.86l-211.1,145.6l-47.7-68.4c-2.3-3.4-7-4.3-10.4-1.9c-3.4,2.3-4.3,7-1.9,10.4l52,74.5
          c1.5,2.1,3.8,3.2,6.2,3.2v0c1.5,0,2.9-0.5,4.2-1.4l217.2-149.7c3.4-2.3,4.3-7,1.9-10.4C375.9,695.36,371.2,694.46,367.8,696.86z"
          />
        </g>
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