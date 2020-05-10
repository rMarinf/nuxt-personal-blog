<template>
  <div id="page">
    <the-sidebar></the-sidebar>
    <nuxt />
  </div>
</template>

<script>
import TheSidebar from '@/components/layout/TheSidebar'
export default {
  name: 'Page',
  components: { TheSidebar }
}
</script>
<style></style>
