<template>
  <div class="layout">
    <h3 class="in-child">
      select in child
    </h3>
    <select
        class="in-child-bg"
        v-model="selectedOption"
        @change="selectOption"
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
    <div class="divider"/>
    <h1 class="in-child">
      ParentNumber in child: {{ parentNumber }}
    </h1>
    <div class="btn-layout">
      <h3 class="in-child">
        buttons in child
      </h3>
      <div class="btn-container">
        <button
            class="in-child-bg"
            @click="emits('decreaseParentNumber')"
        >
          parentNumber -
        </button>
        <button
            class="in-child-bg"
            @click="emits('increaseParentNumber')"
        >
          parentNumber +
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue';

const props = defineProps<{
  parentNumber: number,
  parentOption: string,
}>();

const emits = defineEmits<{
  (e: 'decreaseParentNumber'): void;
  (e: 'increaseParentNumber'): void;
  (e: 'selectParentOption', value: string): void;
}>();

const selectedOption = ref(props.parentOption);

const selectOption = () => {
  emits('selectParentOption', selectedOption.value);
}

</script>

<style scoped>
</style>