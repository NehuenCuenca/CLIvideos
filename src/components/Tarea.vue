<template>
    <div>
        <h3>
            {{ titulo }}
            <button @click="$emit('eliminarItem')">Eliminar</button>    
        </h3> 
    </div>
</template>

<script>
    export default {
      name: 'Tarea',

      props: ['titulo'],  
    

    }
</script>

<style lang="scss" scoped>
    h3 {
        color: $corporativo;
    }

    button {
        background-color: $alternativo;
    }
</style>