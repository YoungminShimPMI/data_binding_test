<template>
  <h1>
    defineExpose
  </h1>
  <ExposeChildComponent ref="$childRef"/>
  <div class="btn-layout">
    <h3 class="in-parent">
      buttons in parent
    </h3>
    <div class="btn-container">
      <button
          class="in-parent-bg"
          @click="decreaseChildNumber"
      >
        childNumber -
      </button>
      <button
          class="in-parent-bg"
          @click="increaseChildNumber"
      >
        childNumber +
      </button>
    </div>
    <div class="text-end">
      <button
          type="button"
          class="in-parent-bg"
          @click="submit"
      >
        submit
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import ExposeChildComponent from "@/components/expose/ExposeChildComponent.vue";

const $childRef = ref();
const decreaseChildNumber = () => {
  const {decreaseChildNumber} = $childRef.value;
  decreaseChildNumber();
}

const increaseChildNumber = () => {
  const {increaseChildNumber} = $childRef.value;
  increaseChildNumber();
}

const submit = () => {
  const {childNumber} = $childRef.value;
  alert(`exposeChildNumber: ${childNumber}`);
}
</script>

<style scoped>
</style>