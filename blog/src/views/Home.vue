<template>
  <div class="home">
    <h1>home</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    setup() {
        let name = 'mario'
        let age = 30

        const handleClick = () => {
            console.log('clicked');
        }

        return { name, age, handleClick }
    }
}
</script>

<style>

</style>