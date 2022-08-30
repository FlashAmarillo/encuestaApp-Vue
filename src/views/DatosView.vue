<template>
  <h1 className='font-black text-4xl text-slate-800'>Resumen de información</h1>
  <p className='mt-3 text-xl'>En el siguiente Dashboard puedes apreciar el resultado de estudio de las encuestas✨</p>
  <ResumenDatos :objetoDatos="objetoDatos" />
</template>

<script>
import ResumenDatos from '../components/ResumenDatos.vue';
export default {
  name: 'DatosView',
  data() {
    return {
      objetoDatos: {
        totalEncuestas: 120,
        redFavorita: 'TikTok',
        redImpopular: 'Instagram',
        datosFacebook: {
          edadRango: '18-25',
          tiempoPromedio: 1
        },
        datosWhatsApp: {
          edadRango: '18-25',
          tiempoPromedio: 1
        },
        datosTwitter: {
          edadRango: '18-25',
          tiempoPromedio: 2
        },
        datosInstagram: {
          edadRango: '18-25',
          tiempoPromedio: 1
        },
        datosTikTok: {
          edadRango: '18-25',
          tiempoPromedio: 2
        }
      },
    }
  },
  components:{
    ResumenDatos
  },
  methods: {
    async consultaDeDatos() {
      try {
        // url con el endpoint del back
        const url = import.meta.env.VITE_BACKEND_URL;

        // Consulta al endpoint para traer la data
        const consulta = await fetch(url);
        const  respuesta = await consulta.json();

        // copiamos el objeto de la consulta al objeto del estado
        this.objetoDatos = {...respuesta}
        console.log(this.objetoDatos);
        console.log('consulta de datos realizada');
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    //Cuando el valor de "valor" cambie esta funcion va a correr
    // No se que estoy haciendo con esta cosa
    valor(newValor, oldValor) {
      if(newValor !== oldValor) {
        console.log(newValor);
      }
    }
  },
  mounted () {
    this.consultaDeDatos();
    console.log('Funcion GET llamada');
  }
    
}

</script>

<style>

</style>