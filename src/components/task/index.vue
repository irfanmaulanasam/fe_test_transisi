<template>
  <div class="flex flex-col text-sm relative">
    <div v-for="(task,i) in order" :key="i" class="flex flex-row mx-2 my-1 justify-between">
      <checklist :status="task.checklist"/>
      <div class="w-1/2">{{task.taskName}}</div>
      <div class="w-1/4">
        <taskStatus :status="task.status" />
      </div>
    </div>
    <div
    class="flex justify-end px-3 w-full"
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
import checklist from "@/components/task/checkList";
import taskStatus from "@/components/task/status";
export default {
  components: {
    taskStatus,
    checklist
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