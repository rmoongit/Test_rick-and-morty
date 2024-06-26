<template>
  <section class="page">
    <div class="container">
      <CardFilters
        @change-filter="($event) => (statusFilter = $event)"
        @change-text="($event) => (nameFilter = $event)"
      />
      <ul v-if="filteredCards" class="cards-list">
        <li class="list-item" v-for="char in filteredCards" :key="char.id">
          <CardItem
            :name="char.name"
            :species="char.species"
            :status="char.status"
            :location="char.location"
            :image="char.image"
            :episode="char.firstEpisodeName"
          />
        </li>
      </ul>
      <PaginationBlock
        :pageCount="pageCount"
        :currentPage="currentPage"
        @goToPage="goToPage"
      />
    </div>
  </section>
  <FooterBlock />
</template>

<script setup>
import {ref, onMounted, watch, computed} from 'vue'
import charactersApi from '@/api/character'
import episodesApi from '@/api/episodes'
import CardItem from '@/components/CardItem'
import PaginationBlock from '@/components/PaginationBlock'
import CardFilters from '@/components/CardFilters'
import FooterBlock from '@/components/FooterBlock'

const characters = ref([])
const episodes = ref([])

const pageCount = ref(1)
const currentPage = ref(1)
const statusFilter = ref('all')
const nameFilter = ref('')

// Подходит ли элемент по статусу
const byStatus = (el) =>
  statusFilter.value === 'all' ||
  el.status.toLowerCase() === statusFilter.value.toLowerCase()

// Проверяем подходит ли по имени
const byName = (el) =>
  el.name.toLowerCase().includes(nameFilter.value.toLowerCase())

// Filter по селекту
const filteredCards = computed(() => {
  return characters.value.filter(byStatus).filter(byName)
})

// Переход по странице
const goToPage = (page) => {
  currentPage.value = page
}

// Получаем (6) персонажей со страницы
const getCharactersPage = async (page) => {
  const result = await charactersApi.getCharactersPage(page)
  return result.results.slice(0, 6)
}

// Получаем количество страниц
const getPageCount = async () => {
  const result = await charactersApi.getCharactersPage()
  pageCount.value = result.info.pages
}

// Получаем Эпизоды
const getEpisodes = async () => {
  const result = await episodesApi.getEpisode()
  return result.results
}

const fetchData = async () => {
  const fetchedCharacters = await getCharactersPage(currentPage.value)
  const fetchedEpisodes = await getEpisodes()

  const episodeMap = new Map(fetchedEpisodes.map((ep) => [ep.url, ep.name]))

  fetchedCharacters.forEach((char) => {
    const firstEpisodeUrl = char.episode[0]
    char.firstEpisodeName = episodeMap.get(firstEpisodeUrl) || 'Unknown Episode'
  })

  characters.value = fetchedCharacters
  episodes.value = fetchedEpisodes
}

watch(currentPage, async () => {
  await fetchData()
})

onMounted(async () => {
  await fetchData()
  await getPageCount()
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
