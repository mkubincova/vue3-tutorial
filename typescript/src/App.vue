<template>
    <!-- <h1>Hello {{name}} - {{ age }}</h1>
    <button @click="changeName('Emily')">change name</button>
    <button @click="changeAge(30)">change age</button> -->
    <p>{{ jobs[0].location }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import type { Job } from './types/Job';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
      /* REACTIVE */
      // const state = reactive({
      //   name: 'Link',
      //   age: 25 as number | string
      // })
      // return {...toRefs(state)}

      /* REF */
      // const name = ref('Link')
      // const age = ref<number | string>(25)
      // return {name, age}

      const jobs = ref<Job[]>([
        { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
        { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
        { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
      ])

      return {jobs}
  },
  methods: {
    // changeName(newName: string) {
    //   this.name = newName
    //   return newName
    // },
    // changeAge(newAge: string | number) {
    //   this.age = newAge
    //   return newAge
    // }
  }
}) 
</script>

<style>

</style>