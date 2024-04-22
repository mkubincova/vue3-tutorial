<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
    name: 'Home',
    setup() {
      const search = ref('')
      const names = ref(['john', 'ema', 'simon', 'ronald', 'amelia'])

      // fires when first parameter changes
      const stopWatch = watch(search, () => {
        console.log('watch func run');
      })

      // fires when compoment loads and when any dependency changes
      const stopEffect = watchEffect(() => {
        console.log('watcheffect func run', search.value);
      })

      const matchingNames = computed(() => {
        return names.value.filter(name => { return name.includes(search.value) })
      })

      const handleClick = () => {
        stopWatch()
        stopEffect()
      }

      return { names, search, matchingNames, handleClick }
    }
}
</script>

<style>

</style>