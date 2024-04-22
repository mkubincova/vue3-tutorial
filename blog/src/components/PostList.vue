<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import Post from './Post.vue'

export default {
    props: ['posts'],
    components: { Post },
    setup(props) {
        onMounted(() => {
            console.log('component mounter');
        })
        onUnmounted(() => {
            console.log('component unmounted');
        })
        onUpdated(() => {
            console.log('component updated');
        })
    }
}
</script>

<style>

</style>