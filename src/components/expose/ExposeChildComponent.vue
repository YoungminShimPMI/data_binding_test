<template>
  <div class="layout">
    <h1 class="in-child">
      ChildNumber in child: {{ childNumber }}
    </h1>
    <div class="btn-layout">
      <h3 class="in-child">
        buttons in child
      </h3>
      <div class="btn-container">
        <button
            class="in-child-bg"
            @click="decreaseChildNumber"
        >
          childNumber -
        </button>
        <button
            class="in-child-bg"
            @click="increaseChildNumber"
        >
          childNumber +
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, defineExpose} from "vue";

const childNumber = ref(0);
const decreaseChildNumber = () => childNumber.value -= 1;
const increaseChildNumber = () => childNumber.value += 1;

defineExpose({
  childNumber,
  decreaseChildNumber,
  increaseChildNumber
});
</script>

<style scoped>

</style>