import BlackCat from "@/components/BlackCat.vue"

export default [
    {
        path: "/black-cat-1", component: BlackCat,
        params: {
            imagen: "gato1.jpg"
        }
    },

    {
        path: "/black-cat-2", component: BlackCat,
        params: {
            imagen: "gato2.jpg"
        }
    },

    {
        path: "/black-cat-3", component: BlackCat,
        params: {
            imagen: "gato3.jpg"
        }
    }
];
