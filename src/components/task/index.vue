<template>
  <div class="flex flex-col text-sm">
    <div v-for="(task,i) in order" :key="i" class="flex flex-row mx-2 my-1 justify-between">
      <div
        class="rounded-full h-6 w-6 flex items-center justify-center border-gray-400 border-2"
        :class="{'bg-green-400':task.checklist}"
      >
        <div v-if="task.checklist" class>v</div>
        <div v-else></div>
      </div>
      <div class="w-1/2">{{task.taskName}}</div>
      <div class="w-1/4">
        <taskStatus :status="task.status" />
      </div>
    </div>
    <button
    class="rounded-full px-3 w-auto bg-orange-200 border"
      @click="addTask"
    >
    click
    </button>
  </div>
</template>

<script>
import taskStatus from "@/components/task/status";
export default {
  components: {
    taskStatus
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
      let data = this.order[this.getNumber()];
      this.order.push(data);
    },
    getNumber(){
      return Math.floor(Math.random()*this.order.length-1)
    }
  }
};
</script>

<style>
</style>