<script lang="ts" setup>
  import type { PropType } from 'vue';
  import type { PersianDate } from '../modules/core';

  defineProps({
    name: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    dates: {
      type: Array as PropType<PersianDate[]>,
      required: true,
    },
  });
</script>

<template>
  <template v-if="name.endsWith('[]')">
    <input
      v-for="(date, i) in dates"
      :key="i"
      type="hidden"
      :name="name"
      :value="date.toString(format)"
    />
  </template>
  <input
    v-else
    type="hidden"
    :name="name"
    :value="dates.map((date) => date.toString(format))"
  />
</template>
