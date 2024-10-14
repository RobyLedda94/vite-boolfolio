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
<template lang="">
    <div>
        
    </div>
</template>

<style lang="">
    
</style>