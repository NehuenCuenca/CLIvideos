<template>
    <div>
        <h1>Posts</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevoItem">
        <button type="submit" @click="agregarItem">Agregar nuevo post</button>
        <br>
        <input type="search" placeholder="buscar item" v-model="filtroItems">
        <ul>
            <li 
                v-for="(item, $index) in itemsFiltrados" 
                :key="item.id" 
                :titulo="item.title"
                @eliminarItem="eliminarItem($index)">
                {{ item.title }}
            </li>
        </ul>
        
        
    </div>
</template>

<script>
    import postService from "../services/postService.js";
    import { crudItemsMixin } from "../mixins/crudItems.js";


    export default {
        name: 'PostsList',

        mixins: [crudItemsMixin],

        created(){
            /* fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(datos => this.tareas = datos)
                .catch(error => console.error(error)); */
                postService.get()
                .then(items => this.items = items.data);
        },
        
        
    }
</script>