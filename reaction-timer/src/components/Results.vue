<template>
  <p>Reaction time: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) this.rank = 'You are speed ⚡'
    else if(this.score < 400) this.rank = 'Not great, not terrible'
    else this.rank = 'Sloth from Zootopia 🦥'
  }
}
</script>

<style>
  .rank {
    font-size: 1.4em;
    font-weight: bold;
  }
</style>