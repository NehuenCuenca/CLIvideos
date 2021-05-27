<template>
  <div id="app">
    <Navegador></Navegador>
    <!-- <BaseForm></BaseForm> -->
    <router-view/>
  </div>
</template>

<script>
import Navegador from "@/components/Navegador";
/* import BaseForm from "@/components/BaseForm"; */

export default {
  components: {
    Navegador,
    /* BaseForm, */
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
