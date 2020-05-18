<template>
  <div class="blog-entry d-md-flex align-items-center">
    <nuxt-link
      :to="'post/' + id"
      class="img img-2 d-flex align-items-center justify-content-center"
      :style="{
        backgroundImage: 'url(' + thumbnailImage + ')'
      }"
    >
    </nuxt-link>
    <div class="text text-2 p-4">
      <h3 class="mb-2">
        <nuxt-link :to="'post/' + id">{{ title }}</nuxt-link>
      </h3>
      <div class="meta-wrap">
        <p class="meta">
          <span><i class="icon-calendar mr-2"></i>{{ publishedAt }}</span>
        </p>
      </div>
      <p class="mb-4">
        {{ summary }}
      </p>
      <p>
        <nuxt-link :to="'post/' + id" class="btn-custom"
          >Read More <span class="ion-ios-arrow-forward"></span
        ></nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHorizontalLeftPostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    publishedAt: {
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
