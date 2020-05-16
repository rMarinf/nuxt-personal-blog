<template>
  <section class="ftco-section ftco-no-pt ftco-no-pb bg-light">
    <div class="container px-0">
      <div class="row no-gutters">
        <!-- PAGE 1-->
        <div
          v-for="(post, index) in posts"
          :key="post.id"
          :class="indexGridClass(index)"
        >
          <blog-vertical-post-preview
            v-if="index % itemsPerPage === 0"
            :id="post.id"
            :title="post.title"
            :summary="post.summary"
            :thumbnail-image="post.thumbnailUrl"
          ></blog-vertical-post-preview>

          <div class="row">
            <div v-if="index % itemsPerPage === 1" class="col-md-12">
              <blog-horizontal-left-post-preview
                :id="post.id"
                :title="post.title"
                :summary="post.summary"
                :thumbnail-image="post.thumbnailUrl"
              ></blog-horizontal-left-post-preview>

              <blog-horizontal-right-post-preview
                v-if="posts[index + 1]"
                :id="posts[index + 1].id"
                :title="posts[index + 1].title"
                :summary="posts[index + 1].summary"
                :thumbnail-image="posts[index + 1].thumbnailUrl"
              ></blog-horizontal-right-post-preview>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogVerticalPostPreview from '@/components/blog/BlogVerticalPostPreview'
import BlogHorizontalLeftPostPreview from '@/components/blog/BlogHorizontalLeftPostPreview'
import BlogHorizontalRightPostPreview from '@/components/blog/BlogHorizontalRightPostPreview'
import backgroundImageUrl from '@/assets/images/sidebar-bg.jpg'

export default {
  name: 'BlogGrid',
  components: {
    BlogVerticalPostPreview,
    BlogHorizontalLeftPostPreview,
    BlogHorizontalRightPostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      itemsPerPage: 3,
      templatesPerPage: 3,
      backgroundImageUrl
    }
  },
  methods: {
    indexGridClass(index) {
      const page = Math.round(index / this.itemsPerPage)
      const modPage = page % this.templatesPerPage
      if (modPage === 0) {
        // Template 1
        switch (index % this.itemsPerPage) {
          case 0:
            return 'col-md-4 d-flex'
          case 1:
            return 'col-md-8'
        }
      } else if (modPage === 1) {
        // Template 2
      } else if (modPage === 2) {
        // Template 3
      }
    }
  }
}
</script>
