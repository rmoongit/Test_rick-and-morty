<template>
  <article class="card">
    <div class="card-image">
      <img :src="props.image" alt="cardName" />
    </div>

    <div class="card-info">
      <div class="card-status">
        <h3>{{ props.name }}</h3>
        <p class="status">
          <i :style="changeBackGround(props.status)" class="icon"></i>
          <span>{{ `${props.status} - ${props.species}` }}</span>
        </p>
      </div>

      <div class="card-location">
        <span>last known location:</span>
        <p>{{ props.location.name }}</p>
      </div>

      <div class="card-visited">
        <span>first seen in:</span>
        <p>{{ props.episode }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
import {defineProps} from 'vue'

const changeBackGround = (status) => {
  const backgroundColors = {
    Alive: 'rgb(85, 204, 68)',
    Dead: 'rgb(214, 61, 46)',
  }

  return {
    background: backgroundColors[status],
  }
}

const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  species: {
    type: String,
    required: true,
  },

  status: {
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

  episode: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.card {
  display: flex;
  width: 600px;
  height: 220px;
  border-radius: 0.5rem;
  background-color: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.card-image {
  flex: 2 1 0%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  flex: 3 1 0%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: start;
  padding: 0.55rem;
  color: #fff;
}

.card-info p {
  margin: 0;
}

.card-location,
.card-visited {
  display: flex;
  flex-direction: column;
}

.card-location span,
.card-visited span {
  color: rgb(158, 158, 158);
}

.card-status h3 {
  margin: 0;
  font-size: 1.5rem;
}

.card-status .status {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.icon {
  display: block;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgb(158, 158, 158);
}
</style>
