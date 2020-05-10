<template>
  <section class="ftco-section ftco-no-pt ftco-no-pb bg-light">
    <div class="container px-0">
      <div class="row no-gutters">
        <!-- PAGE 1-->
        <blog-post-preview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :summary="post.summary"
          :thumbnail-image="post.thumbnailUrl"
        />
        <!--<div class="col-md-8 d-flex">
          <div class="row">
            <div class="col-md-12">
              <div class="blog-entry d-md-flex align-items-center">
                <a
                  class="img img-2 d-flex align-items-center justify-content-center"
                  :style="{
                    backgroundImage: 'url(' + backgroundImageUrl + ')'
                  }"
                >
                </a>
                <div class="text text-2 p-4">
                  <h3 class="mb-2">
                    <a href="single.html"
                      >A Loving Heart is the Truest Wisdom</a
                    >
                  </h3>
                  <div class="meta-wrap">
                    <p class="meta">
                      <span
                        ><i class="icon-calendar mr-2"></i>Sept. 10, 2019</span
                      >
                      <span
                        ><a href="single.html"
                          ><i class="icon-folder-o mr-2"></i>Travel</a
                        ></span
                      >
                      <span><i class="icon-comment2 mr-2"></i>5 Comment</span>
                    </p>
                  </div>
                  <p class="mb-4">
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p>
                    <a href="#" class="btn-custom"
                      >Read More <span class="ion-ios-arrow-forward"></span
                    ></a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="blog-entry d-md-flex align-items-center">
                <a
                  href="single.html"
                  class="img img-2 order-md-last"
                  :style="{
                    backgroundImage: 'url(' + backgroundImageUrl + ')'
                  }"
                ></a>
                <div class="text text-2 text-md-right p-4">
                  <h3 class="mb-2">
                    <a href="single.html"
                      >A Loving Heart is the Truest Wisdom</a
                    >
                  </h3>
                  <div class="meta-wrap">
                    <p class="meta">
                      <span
                        ><i class="icon-calendar mr-2"></i>Sept. 10, 2019</span
                      >
                      <span
                        ><a href="single.html"
                          ><i class="icon-folder-o mr-2"></i>Travel</a
                        ></span
                      >
                      <span><i class="icon-comment2 mr-2"></i>5 Comment</span>
                    </p>
                  </div>
                  <p class="mb-4">
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p>
                    <a href="#" class="btn-custom"
                      >Read More <span class="ion-ios-arrow-forward"></span
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import BlogPostPreview from '@/components/blog/BlogPostPreview'
import backgroundImageUrl from '@/assets/images/sidebar-bg.jpg'
export default {
  name: 'BlogGrid',
  components: { BlogPostPreview },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      backgroundImageUrl
    }
  }
}
</script>
