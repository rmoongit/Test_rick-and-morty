<template>
  <mcv-navigate-bar />
  <router-view />
</template>

<script>
import McvNavigateBar from '@/components/NavigateBar'

export default {
  name: 'McvApp',

  components: {
    McvNavigateBar,
  },
}
</script>

<style>
.container {
  max-width: 1920px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
