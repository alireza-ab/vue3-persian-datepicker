<script lang="ts" setup>
  import { reactive } from 'vue';
  import DatePicker from './components/DatePicker.vue';
  const state = reactive({
    myDate: '',
  });

  setTimeout(() => {
    state.myDate = '2022-10-09';
  }, 3000);
</script>

<template>
  <p>{{ state.myDate }}</p>
  <DatePicker v-model="state.myDate" alt-name="rest" mode="single"></DatePicker>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
