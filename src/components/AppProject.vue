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
            axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
                this.projects = response.data.results;
            }); 
        }
    }
}
</script>
<template>
    <div class="container my-3">
        <div class="row gy-2">
            <div class="col-12">
                <h1 class="text-center my-3">Elenco dei progetti visualizzati a video</h1>
            </div>
            <div class="col-12">
                <div class="row gy-3">
                    <div class="col-4" v-for="project in projects" :key="project.id">
                        <div class="card">
                            <img :src="project.cover_image.startsWith('http') ? project.cover_image : `http://127.0.0.1:8000/storage/${project.cover_image}` " class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">{{ project.title }}</h5>
                              <p class="card-text">{{ project.content.substr(0, 150) + '...' }}</p>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>