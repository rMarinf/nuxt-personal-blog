<template>
  <div class="side-menu" v-click-outside="closeMobileMenu">
    <a
      href="#"
      class="side-menu-nav-toggle"
      :class="{ active: isActive }"
      @click="showMenu"
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
      <h1 id="side-menu-logo" class="mb-4"><a href="index.html">Blog</a></h1>
      <nav id="side-menu-main" role="navigation">
        <ul>
          <li class="side-menu-active"><a href="index.html">Home</a></li>
          <li><a href="travel.html">Travel</a></li>
          <li><a href="lifestyle.html">Lifestyle</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="side-menu-footer">
        <div class="mb-4">
          <h3>Subscribe for newsletter</h3>
          <!-- TODO Complete this form-->
          <form action="#" class="side-menu-subscribe-form">
            <div class="form-group d-flex">
              <div class="icon"><span class="icon-paper-plane"></span></div>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email Address"
              />
            </div>
          </form>
        </div>
        <p class="pfooter">
          Copyright &copy;
          {{ new Date().getFullYear() }}
          All rights reserved | This template is made with
          <i class="icon-heart" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import backgroundImageUrl from '~/assets/images/sidebar-bg.jpg'

export default {
  name: 'SideMenu',
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
    showMenu(event) {
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
    closeMobileMenu(event) {
      event.preventDefault()
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
