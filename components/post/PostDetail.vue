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

            <!-- AUTHOR -->
            <div class="about-author d-flex p-4 bg-light">
              <div class="bio mr-5">
                <img
                  src="images/person_1.jpg"
                  alt="Image placeholder"
                  class="img-fluid mb-4"
                />
              </div>
              <div class="desc">
                <h3>Roberto Marín</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
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
