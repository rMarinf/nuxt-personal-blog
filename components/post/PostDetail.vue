<template>
  <section class="ftco-section ftco-no-pt ftco-no-pb">
    <div class="container px-0">
      <div class="row d-flex no-gutters">
        <div class="col-lg-8 px-md-5 py-5">
          <div class="row">
            <div class="post-content">
              <h1 class="mb-3">{{ post.title }}</h1>
              <p>
                <img :src="post.image" alt="post image" class="img-fluid" />
              </p>

              <div v-if="post.content" v-html="$md.render(post.content)"></div>
            </div>

            <!-- TAGS -->
            <div class="tag-widget post-tag-container mb-5 mt-5">
              <div class="tagcloud">
                <nuxt-link :to="'/'" class="tag-cloud-link">Blog</nuxt-link>
              </div>
            </div>

            <!-- COMMENTS -->
            <!-- TODO DISQUS -->
          </div>
          <!-- END-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
