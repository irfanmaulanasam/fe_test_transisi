<template>
  <div class="flex flex-col text-sm">
    <div v-for="(task,i) in order" :key="i" class="flex flex-row mx-2 my-1 justify-between">
      <div
        class="rounded-full h-6 w-6 flex items-center justify-center border-gray-400 border-2"
        :class="{'bg-green-300':task.checklist}"
      >
        <div v-if="task.checklist" class>
          <svg
           class="fill-current stroke-current stroke-1 text-gray-500"
           x="0px" y="0px"
           viewBox="0 0 475 475" xml:space="preserve"
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
      <div class="w-1/2">{{task.taskName}}</div>
      <div class="w-1/4">
        <taskStatus :status="task.status" />
      </div>
    </div>
    <div
    class="flex justify-end relative  px-3 w-full"
    >
    <button class="absolute rounded-lg border h-10 w-10 text-lg text-white font-light bg-purple-800 shadow-md"
      @click="addTask"
    >
      +
    </button>
    </div>
  </div>
</template>

<script>
import taskStatus from "@/components/task/status";
export default {
  components: {
    taskStatus,
  },
  data() {
    return {
      count:0,
      order: [
        {
          checklist: true,
          taskName: "Create initial layout for homepage",
          status: 3
        },
        {
          checklist: true,
          taskName: "Fixing Icons with transparent background",
          status: 1
        },
        {
          checklist: false,
          taskName: "Fixing Icons with transparent background",
          status: 1
        },
        {
          checklist: true,
          taskName: "Discussions regardin workflow improvement",
          status: 2
        },
        {
          checklist: false,
          taskName: "create quotation for app redesign project",
          status: 0
        }
      ]
    };
  },
  methods: {
    addTask() {
      let data = this.order[this.getNumber(this.order.length-1)];
      this.order.push(data);
    },
    getNumber(number){
      return Math.floor(Math.random()*number)
    }
  }
};
</script>

<style>
</style>