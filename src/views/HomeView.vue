<template>
  <h1 className='font-black text-4xl text-slate-800'>Encuesta de Redes Sociales</h1>
  <p className='mt-3 '>Llena los siguientes campos para registrar tu informacion</p>
  <Formulario />
</template>

<script>
import Formulario from '../components/Formulario.vue';

export default {
    name: "Home",
    components: [
        Formulario
    ],
    components: { Formulario }
}
</script>

<style scope>

</style>