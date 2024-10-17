<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    components: {
        ContactForm
    }
}
</script>
<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Contatti</h1>
            </div>
            <div class="col-12">
                <div class="text-center mt-5">
                    <p><strong>Indirizzo :</strong> ....</p>
                    <p><strong>Località :</strong> ....</p>
                    <p><strong>Contatti :</strong> ....</p>
                    <p><strong>E-mail :</strong> ...</p>
                </div>
            </div>
            <div class="col-12">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>