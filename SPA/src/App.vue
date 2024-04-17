<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
    <Modal :header="header" :content="text" theme="sale" @close="toggleModal" />
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'Hello there.',
      header: 'Sign up for Giveaway!',
      text: "Before it's too late...",
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  },
  components: { Modal }
}
</script>

<style>
  h1 {
    text-align: center;
  }
</style>