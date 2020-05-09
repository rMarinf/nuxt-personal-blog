<template>
  <div v-click-outside="closeMobileMenu" class="side-menu">
    <a
      href="#"
      class="side-menu-nav-toggle"
      :class="{ active: isActive }"
      @click="showMobileMenu"
    >
      <i></i>
    </a>
    <aside
      id="side-menu-aside"
      class="img"
      :style="{
        backgroundImage: 'url(' + backgroundImageUrl + ')'
      }"
    >
      <the-sidebar-navigation></the-sidebar-navigation>
      <the-sidebar-footer></the-sidebar-footer>
    </aside>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import backgroundImageUrl from '~/assets/images/sidebar-bg.jpg'
import TheSidebarFooter from '@/components/layout/TheSidebar/components/TheSidebarFooter'
import TheSidebarNavigation from '@/components/layout/TheSidebar/components/TheSidebarNavigation'

export default {
  name: 'TheSidebar',
  components: { TheSidebarNavigation, TheSidebarFooter },
  directives: {
    ClickOutside
  },
  data() {
    return {
      isActive: false,
      backgroundImageUrl
    }
  },
  methods: {
    showMobileMenu(event) {
      event.preventDefault()
      const body = document.body
      if (body.classList.contains('offcanvas')) {
        this.isActive = false
        body.classList.remove('offcanvas')
      } else {
        this.isActive = true
        body.classList.add('offcanvas')
      }
    },
    closeMobileMenu() {
      const body = document.body
      if (body.classList.contains('offcanvas')) {
        body.classList.remove('offcanvas')
        this.isActive = false
      }
    }
  }
}
</script>

<style scoped></style>
