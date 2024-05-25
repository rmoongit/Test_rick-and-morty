<template>
  <section class="page">
    <div class="container">
      FILTER
      <ul v-if="characters" class="cards-list">
        <li v-for="(char, index) in characters" :key="index">
          <CardItem
            :name="char.name"
            :species="char.species"
            :location="char.location"
            :image="char.image"
          />
        </li>
      </ul>
    </div>
    PAGINATION
  </section>
  FOOTER
</template>

<script setup>
import {ref, onMounted} from 'vue'
import charactersApi from '@/api/character'
import CardItem from '@/components/CardItem'

const characters = ref([])

onMounted(() => {
  charactersApi.getCharacters().then((result) => {
    characters.value = result
  })
})
</script>

<style scoped>
.page {
  background-color: rgb(39, 43, 51);
  height: 100%;
}

h1 {
  margin: 0;
}
</style>
