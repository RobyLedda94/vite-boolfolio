<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data(){
        return{
            store,
            name: '',
            surname: '',
            email: '',
            contact: ''
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                contact: this.contact,
            }

            axios.post('http://127.0.0.1:8000/contacts', data).then((res) => {
                console.log(res);
            });
        }
    }
}
</script>
<template>
    <div>
        <form method="post" @submit.prevent="sendForm()">
            <div class="row gy-2">
                <div class="col-6">
                    <label class="control-label">Nome</label>
                    <input type="text" name="name" id="name" class="form-control" v-model="name" placeholder="Inserisci nome">
                </div>
                <div class="col-6">
                    <label class="control-label">Cognome</label>
                    <input type="text" name="surname" id="surname" class="form-control" v-model="surname" placeholder="Inserisci cognome">
                </div>
                <div class="col-6">
                    <label class="control-label">Email</label>
                    <input type="text" name="email" id="email" class="form-control" v-model="email" placeholder="Inserisci email">
                </div>
                <div class="col-6">
                    <label class="control-label">Contatto</label>
                    <input type="text" name="contact" id="contact" class="form-control" v-model="contact" placeholder="Inserisci contatto">
                </div>
                <div class="col-12">
                    <button class="btn btn-sm btn-primary" type="submit">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="">
    
</style>