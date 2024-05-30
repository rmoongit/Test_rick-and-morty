<template>
  <ul class="paginations">
    <li v-for="page in props.pageCount" :key="page">
      <button type="text" @click="emit('goToPage', page)">{{ page }}</button>
    </li>
  </ul>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const emit = defineEmits(['goToPage'])

const props = defineProps({
  pageCount: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
.paginations {
  margin: 0 auto;
  margin-top: 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  gap: 5px;
}

.paginations button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.7rem;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 0.3rem;
}

.paginations button:hover {
  background-color: #fff;
  color: #000;
  opacity: 0.6;
}
</style>
