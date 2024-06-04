<template>
  <mcv-navigate-bar />
  <router-view />
</template>

<script setup>
import McvNavigateBar from '@/components/NavigateBar'
</script>

<style>
.container {
  max-width: 1920px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
