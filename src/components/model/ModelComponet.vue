<template>
  <div>
    <h1>
      defineModel
    </h1>
    <h1 class="text-center in-parent">
      ParentOption in parent: {{ parentOption }}
    </h1>
    <ModelChildComponet
        v-model:parent-number="parentNumber"
        v-model:parent-option="parentOption"
    />
    <div class="btn-layout">
      <h3 class="in-parent">buttons in parent</h3>
      <div class="btn-container">
        <button
            class="in-parent-bg"
            @click="decreaseParentNumber"
        >
          parentNumber -
        </button>
        <button
            class="in-parent-bg"
            @click="increaseParentNumber"
        >
          parentNumber +
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
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import ModelChildComponet from "@/components/model/ModelChildComponet.vue";

const parentNumber = ref(0);
const parentOption = ref('1');

const decreaseParentNumber = () => {
  parentNumber.value -= 1;
}

const increaseParentNumber = () => {
  parentNumber.value += 1;
}

const submit = () => {
  alert(`parentNumber: ${parentNumber.value}`);
}
</script>

<style scoped>
</style>