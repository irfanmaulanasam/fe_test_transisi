<template>
  <div class="flex flex-col text-xs overflow-auto mt-3 h-64">
    <div v-for="(task,i) in order" :key="i" class="flex flex-row mx-2 my-1 justify-between">
      <checklist :status="task.checklist"/>
      <div class="w-1/2">{{task.taskName}}</div>
      <div class="w-1/4 ">
        <taskStatus :status="task.status" />
      </div>
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
  props:{
    order:{
      type:Array
    }
  },
  data() {
    return {
      count:0,
    };
  },
};
</script>

<style>
</style>