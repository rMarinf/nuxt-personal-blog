<template>
  <div class="blog-entry d-md-flex align-items-center">
    <nuxt-link
      to="single.html"
      class="img img-2 order-md-last"
      :style="{
        backgroundImage: 'url(' + thumbnailImage + ')'
      }"
    ></nuxt-link>
    <div class="text text-2 text-md-right p-4">
      <h3 class="mb-2">
        <nuxt-link to="single.html">{{ title }}</nuxt-link>
      </h3>
      <div class="meta-wrap">
        <p class="meta">
          <span><i class="icon-calendar mr-2"></i>Sept. 10, 2019</span>
        </p>
      </div>
      <p class="mb-4">
        {{ summary }}
      </p>
      <p>
        <a href="#" class="btn-custom"
          >Read More <span class="ion-ios-arrow-forward"></span
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHorizontalRightPostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
