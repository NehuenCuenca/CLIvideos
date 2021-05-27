<template>
    <div>
        <LogoVue></LogoVue>
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link>
        </div>
    </div>
    
</template>

<script>
import LogoVue from "@/components/LogoVue";

export default {
    components:{
        LogoVue,
    },
}
</script>