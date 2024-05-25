<template>
  <article class="card">
    <div class="card-image">
      <img :src="props.image" alt="cardName" />
    </div>

    <div class="card-info">
      <div class="card-status">
        <h3>{{ props.name }}</h3>
        <span>{{ props.species }}</span>
      </div>

      <div class="card-location">
        <span>last known location:</span>
        <span>{{ props.location.name }}</span>
      </div>

      <div class="card-visited">
        <span>first seen in:</span>
        <span>EPISODE</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  species: {
    type: String,
    required: true,
  },

  location: {
    type: Object,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
})
</script>
