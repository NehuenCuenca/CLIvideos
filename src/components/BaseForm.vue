<template>
    <article>
        <h2>Suscribete a mi lista de correo</h2>
        <form>
            <input type="text" placeholder="Tu email">
            <input type="submit" value="Suscribirse">
        </form>
    </article>
</template>

<style scoped>
    article * {
        box-sizing: border-box;
    }

    h2 {
        margin-bottom: 0;
    }

    article {
        border: 1px solid gray;
    }

    form {
        padding: 20px
    }

    input {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        background-color: bisque;
    }

</style>