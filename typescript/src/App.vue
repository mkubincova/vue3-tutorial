<template>
    <h1>Hello {{name}} - {{ age }}</h1>
    <button @click="changeName('Emily')">change name</button>
    <button @click="changeAge(30)">change age</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'Link',
      age: 25 as number | string
    }
  },
  methods: {
    changeName(newName: string) {
      this.name = newName
      return newName
    },
    changeAge(newAge: string | number) {
      this.age = newAge
      return newAge
    }
  }
}) 
</script>

<style>

</style>