<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">Update person one</button>

    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }} - {{ name2 }}</p>
    <button @click="updatePersonTwo">Update person two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'Home',
    setup() {
      const personOne = ref({name: 'Mario', age: 30})
      const personTwo = reactive({name: 'Luigi', age: 35})

      // Reactive values don't work with primitive values
      const name1 = ref('mario')
      const name2 = reactive('luigi')

      const updatePersonOne = () => {
        personOne.value.age = 40
      }

      const updatePersonTwo = () => {
        personTwo.age = 45
        name2 = 'newname'  // nothing happens
      }

      return { personOne, personTwo, updatePersonOne, updatePersonTwo, name2 }
    }
}
</script>

<style>

</style>