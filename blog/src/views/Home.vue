<template>
  <div class="home">
    <h1>home</h1>
    <p ref="p">{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Increase age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Home',
    setup() {
      const p = ref(null)

      const name = ref('mario')
      const age = ref(30)

      const handleClick = () => {
          console.log(p, p.value) // <p>...
          name.value = 'luigi'
          age.value = 35
      }

      return { name, age, handleClick, p }
    }
}
</script>

<style>

</style>