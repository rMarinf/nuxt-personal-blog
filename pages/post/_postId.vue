<template>
  <div id="post-detail">
    <post-detail :post="post"></post-detail>
  </div>
</template>

<script>
import PostDetail from '../../components/post/PostDetail'
export default {
  name: 'PostDetailPage',
  components: { PostDetail },
  asyncData({ app, isDev, params }) {
    return app.$storyapi
      .get('cdn/stories/blog/' + params.postId, {
        version: isDev ? 'draft' : 'published'
      })
      .then((res) => {
        return {
          post: {
            title: res.data.story.content.title,
            content: res.data.story.content.content,
            image: res.data.story.content.image
          }
        }
      })
  }
}
</script>

<style scoped></style>
