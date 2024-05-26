<template>
  <section class="page">
    <div class="container">
      FILTER
      <ul v-if="characters" class="cards-list">
        <li class="list-item" v-for="(char, index) in characters" :key="index">
          <CardItem
            :name="char.name"
            :species="char.species"
            :location="char.location"
            :image="char.image"
          />
        </li>
      </ul>
      <PaginationBlock :pageCount="pageCount" />
    </div>
  </section>
  FOOTER
</template>

<script setup>
import {ref, onMounted} from 'vue'
import charactersApi from '@/api/character'
import episodseApi from '@/api/episodes'
import CardItem from '@/components/CardItem'
import PaginationBlock from '@/components/PaginationBlock'

const characters = ref([])
const episodes = ref([])

const pageCount = ref(1)
// const currentPage = ref(1)

onMounted(() => {
  charactersApi.getCharacters().then((result) => {
    characters.value = result.results
    pageCount.value = result.info.pages
  })

  episodseApi.getEpisode().then((result) => {
    episodes.value = result.results
  })
})
</script>

<style scoped>
.page {
  background-color: rgb(39, 43, 51);
  height: 100%;
  padding: 100px 0;
}

h1 {
  margin: 0;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 30px;
  list-style: none;
}
</style>
