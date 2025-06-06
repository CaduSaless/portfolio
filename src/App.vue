<template>
  <nav>
    <ul>
      <li><button @click="sub">Sobre</button></li>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
  <RouterView/>
</template>

<script>
import { useTitle } from "vue-router"
  export default {
    name: 'CameraApp',
    methods: {
      sub() {
        this.$router.push('/About')
      }
    },
    beforeUpdate(to, from, next) {
      
      useTitle(to.meta.title)
      next()
    }
  };
</script>
