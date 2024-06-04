<template>
  <div>
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

      <input
        class="filter-text"
        type="text"
        placeholder="Введите имя персонажа"
        v-model="textFilter"
        @input="inputChange"
      />
    </div>
  </div>
</template>

<script setup>
import {defineEmits, ref} from 'vue'

const emit = defineEmits(['change-filter', 'change-text'])

const selectedFilter = ref('all')
const textFilter = ref('')

const selectChange = () => {
  emit('change-filter', selectedFilter.value)
}

const inputChange = () => {
  emit('change-text', textFilter.value)
}
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  padding: 0 0 30px;
}

.filter-select {
  background: transparent;
  border: 1px solid #fff;
  padding: 10px;
  color: rgb(158, 158, 158);
  cursor: pointer;
}

.filter-text {
  border: none;
  background-color: transparent;
  padding: 10px;
  color: rgb(158, 158, 158);
}
</style>
