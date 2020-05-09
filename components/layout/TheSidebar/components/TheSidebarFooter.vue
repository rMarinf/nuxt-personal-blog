<template>
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
</template>

<script>
export default {
  name: 'TheSidebarFooter'
}
</script>

<style scoped></style>
