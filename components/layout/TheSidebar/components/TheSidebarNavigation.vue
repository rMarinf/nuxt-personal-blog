<template>
  <nav id="side-menu-main" role="navigation">
    <ul>
      <li>
        <nuxt-link to="/">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Sobre mí</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contacto</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheSidebarNavigation'
}
</script>

<style scoped></style>
