<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="Añadir tarea" v-model="nuevaTarea">
        <button type="submit" @click="agregarTarea">Agregar nueva tarea</button>
        <br>
        <input type="search" placeholder="buscar tarea" v-model="filtroTareas">
        <Tarea 
            v-for="(tarea, $index) in tareasFiltradas" 
            :key="tarea.id" 
            :titulo="tarea.title"
            @eliminarTarea="eliminarTarea($index)">
            
        </Tarea>
    </div>
</template>

<script>
    import todoService from "../services/todoService.js";
    import Tarea from "@/components/Tarea";


    export default {
        name: 'Tareas',

        components: {
            Tarea,
        },

        created(){
            /* fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(datos => this.tareas = datos)
                .catch(error => console.error(error)); */
            todoService.get()
                .then(tareas => this.tareas = tareas.data);
        },
        
        data() {
            return {
                tareas: [],
                nuevaTarea: "",
                filtroTareas: "",
            }
        },

        methods: {
            agregarTarea(){
                this.tareas.unshift({title: this.nuevaTarea});
                this.nuevaTarea= "";
            },

            eliminarTarea(indice){
                this.tareas.splice(indice, 1);
            },
        },

        computed: {
            tareasFiltradas(){
                return this.tareas.filter(tarea => {
                    return tarea.title.includes(this.filtroTareas)
                });
            }
        },
    }
</script>