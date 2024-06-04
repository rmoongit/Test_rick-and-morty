<template>
  <div class="filters">
    <select
      class="filter-select"
      v-model="selectedFilter"
      @change="selectChange"
    >
      <option value="all">All persons</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
</template>

<script setup>
import {defineEmits, ref} from 'vue'
const emit = defineEmits(['selected-filter'])
const selectedFilter = ref('all')

const selectChange = () => {
  emit('selected-filter', selectedFilter.value)
}
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 30px;
}

.filter-select {
  background: transparent;
  border: 1px solid #fff;
  padding: 10px;
  color: rgb(158, 158, 158);
  cursor: pointer;
}
</style>
