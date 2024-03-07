<template>
  <nav class="container">
    <RouterLink to="/">defineExpose</RouterLink>
    <RouterLink to="/props">defineProps</RouterLink>
    <RouterLink to="/model">defineModel</RouterLink>
  </nav>
  <div class="container">
    <div class="box-layout">
      <div class="box in-parent-bg">in parent</div>
      <div class="box in-child-bg">in child</div>
    </div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
body {
  margin: 0;
}

a {
  color: inherit;
}

a:hover {
  opacity: 0.8;
}

nav {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
}

button  {
  white-space: nowrap;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
}

select {
  border: none;
}

select {
  width: 10rem;
  height: 2rem;
  font-size: 1.2rem;
}

.container {
  margin: auto;
  max-width: 800px;
}

.box-layout {
  display: flex;
  justify-content: end;
  padding: 1rem 0;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  margin: 0 0.3rem;
}

.layout {
  display: grid;
  justify-content: center;
  justify-items: center;
}

.btn-layout {
  text-align: center;
  padding: 1rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}

.btn-container button {
  margin: 0 1rem;
}

.text-center {
  text-align: center;
}

.text-end {
  text-align: end;
}

.in-parent {
  color: cornflowerblue;
}

.in-parent-bg {
  color: white;
  background-color: cornflowerblue;
}

.in-child {
  color: crimson;
}

.in-child-bg {
  color: white;
  background-color: crimson;
}

.divider {
  background-color: lightgray;
  height: 2px;
  width: 100%;
  margin: 2rem 0 1rem;
}
</style>
