<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevoItem">
        <button type="submit" @click="agregarItem">Agregar nueva tarea</button>
        <br>
        <input type="search" placeholder="buscar tarea" v-model="filtroItems">
        <Tarea 
            v-for="(item, $index) in itemsFiltrados" 
            :key="item.id" 
            :titulo="item.title"
            @eliminarItem="eliminarItem($index)">
            
        </Tarea>
    </div>
</template>

<script>
    import todoService from "../services/todoService.js";
    import Tarea from "@/components/Tarea";
    import { crudItemsMixin } from "../mixins/crudItems.js";

    export default {
        name: 'Tareas',

        mixins: [crudItemsMixin],

        components: {
            Tarea,
        },

        created(){
            /* fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(datos => this.tareas = datos)
                .catch(error => console.error(error)); */
            todoService.get()
                .then(items => this.items = items.data);
        },
        
        

    }
</script>