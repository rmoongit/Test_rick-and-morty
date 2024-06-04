<template>
  <footer>
    <div class="footer container">
      <VueIcon />
      <p>
        It was created by
        <a href="https://github.com/rmoongit"> https://github.com/rmoongit </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import VueIcon from '@/components/VueIcon'
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

.footer p {
  display: flex;
  column-gap: 30px;
  margin: 0;
}

a {
  text-decoration: none;
  color: rgb(39, 43, 51);
  font-weight: 600;
  transition: 0.5s;
  transform: rotate(2deg);
}

a:hover {
  color: #620dcb;
  transform: rotate(0);
}
</style>
