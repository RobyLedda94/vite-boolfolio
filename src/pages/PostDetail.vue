<script>
// importo axios
import axios from 'axios';
// importo lo store
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            post: null
        }
    },
    methods: {
        getPost() {
            const slug = this.$route.params.slug; 
            axios.get(`http://127.0.0.1:8000/api/posts/${slug}`)
                .then((res) => {
                    console.log(res.data.result); // Stampa i dati del post nella console
                    this.post = res.data.result; 
                })
        }
    },
    created() {
        this.getPost(); // Chiama il metodo per ottenere i dettagli del post 
    }
}
</script>

<template>
    <div>
        <h1>prova</h1>
    </div>
</template>

<style lang="">


</style>
