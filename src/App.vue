<template>
  <div id="app">
    <Navegador></Navegador>
    <!-- <BaseForm></BaseForm> -->
    <ul>
      <RouterLink destino="black-cat-1"></RouterLink>
      <RouterLink destino="black-cat-2"></RouterLink>
      <RouterLink destino="black-cat-3"></RouterLink>
    </ul>
    <router-view/>
    <routerView></routerView>
  </div>
</template>

<script>
import Navegador from "@/components/Navegador";
import RouterView from "@/components/RouterView.vue";
import RouterLink from "@/components/RouterLink.vue";
/* import BaseForm from "@/components/BaseForm"; */

export default {
  components: {
    Navegador,
    RouterView,
    RouterLink,
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

ul{
  padding: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
