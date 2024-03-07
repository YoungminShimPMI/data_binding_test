<template>
  <div class="layout">
    <h3 class="in-child">
      select in child
    </h3>
    <select
        class="in-child-bg"
        v-model="parentOption"
    >
      <option value="1">
        opt 1
      </option>
      <option value="2">
        opt 2
      </option>
      <option value="3">
        opt 3
      </option>
    </select>
    <div class="divider"></div>
    <h1 class="in-child">
      ParentNumber in child: {{ parentNumber }}
    </h1>
    <div class="btn-layout">
      <h3 class="in-child">buttons in child</h3>
      <div class="btn-container">
        <button
            class="in-child-bg"
            @click="decreaseParentNumber"
        >
          parentNumber -
        </button>
        <button
            class="in-child-bg"
            @click="increaseParentNumber"
        >
          parentNumber +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineModel} from "vue";

const parentNumber = defineModel<number>('parentNumber', {required: true});
const parentOption = defineModel<string>('parentOption', {required: true});

const decreaseParentNumber = () => {
  parentNumber.value -= 1;
}
const increaseParentNumber = () => {
  parentNumber.value += 1;
}
</script>

<style scoped>

</style>