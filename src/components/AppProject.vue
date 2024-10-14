<script>
// importo axios
import axios from 'axios';
export default {
    name: 'AppProject',
    data(){
        return{
            projects: []
        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/posts').then((results) => {
                console.log(results);
            }); 
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-3">Prova</h1>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>