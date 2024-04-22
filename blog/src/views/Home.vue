<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
    name: 'Home',
    components: { PostList },
    setup() {
        const posts = ref([
            {title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur felis libero, in porta magna vestibulum eget. Suspendisse malesuada dui in ligula imperdiet pharetra. Vivamus felis nisl, gravida non porttitor eget, molestie sed lorem. Integer finibus dui arcu, nec egestas nulla posuere nec. Quisque eu ex nec dolor egestas condimentum ac ac nulla. Phasellus ut cursus ligula. Etiam vel laoreet erat. Vestibulum sit amet erat id velit sodales efficitur id in sem. Quisque ac cursus nunc. Aenean feugiat ex metus, at tristique elit accumsan eu. Nam placerat dolor sit amet lorem aliquet congue.', id:1},
            {title: 'top 5 css tips', body: 'lorem ispum', id:2}
        ])
        const showPosts = ref(true)

        return {posts, showPosts}
    }
}
</script>

<style>

</style>