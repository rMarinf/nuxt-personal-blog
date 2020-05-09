<template>
  <div id="page">
    <side-menu></side-menu>
    <nuxt />
  </div>
</template>

<script>
import SideMenu from '@/components/layout/side-menu'
export default {
  name: 'Page',
  components: { SideMenu }
}
</script>
<style></style>
