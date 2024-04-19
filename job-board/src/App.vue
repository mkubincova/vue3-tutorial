<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{name: 'about'}">About</RouterLink>
    <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <RouterView />
</template>

<script>
export default {
  methods: {
    redirect (){
      this.$router.push({name: 'home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
nav {
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}
nav a {
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 5px;
  color: #444;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: #595cbd;
}
nav a:hover {
  background: #ddd;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #595cbd;
  color: white;
}
</style>
