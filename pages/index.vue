<template>
  <div id="blog">
    <blog-grid :posts="posts"></blog-grid>
  </div>
</template>

<script>
import BlogGrid from '@/components/blog/BlogGrid'
export default {
  name: 'Blog',
  components: { BlogGrid },
  asyncData({ app, isDev }) {
    return app.$storyapi
      .get('cdn/stories', {
        version: isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              publishedAt: bp.created_at,
              title: bp.content.title,
              summary: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
            }
          })
        }
      })
  }
}
</script>
