<script>
// importo axios
import axios from 'axios';
export default {
    name: 'AppProject',
    data(){
        return{
            projects: [],
            first_page : 1,
            last_page: null,
        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
                console.log(response.data.results);
                // this.projects = response.data.results;
                this.projects = response.data.results.data;
                this.last_page = response.data.results.last_page;
            }); 
        },
        goToPage(page){
            axios.get('http://127.0.0.1:8000/api/posts', {params: {page: page}}).then((response) => {
                this.projects = response.data.results.data;
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
            <div class="col-12 my-4">
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                      <li class="page-item"><a class="page-link" href="#">Precedente</a></li>
                      <li class="page-item" v-for="n in last_page"><a class="page-link" href="#" @click="goToPage(n)">{{ n }}</a></li>
                      <li class="page-item"><a class="page-link" href="#">Successiva</a></li>
                    </ul>
                  </nav>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>