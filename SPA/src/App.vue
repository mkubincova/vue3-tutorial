<template>
  <h1>{{title}}</h1>
  
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal" >
      <template v-slot:links>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </template>
      <h1>Givaway!</h1>
      <p>Get yours before it's too late</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModal2">
    <Modal @close="toggleModal2" >
      <h1>Test</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos necessitatibus veritatis maiores quae vitae.</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">open modal</button>
  <button @click="toggleModal2">open second modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'Hello there.',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
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