<template>
  <div class="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
    <h1 class="text-gray-600 font-bold text-xl normal-case text-center">Hola!👋 Ingresa la informacion en este formulario</h1>
    
    <div v-if="showAlerta">
        <Alerta :alertaMessage="alertaMessage" />
    </div>

    <form class="mt-5">
        <div class="mb-4">
            <label class="text-gray-800" htmlFor="email">Email:</label>
            <input v-model="email" id="email" type="email" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md" placeholder="Email" name="email"/>    
        </div>

        <div class="mt-3">
            <label class="text-gray-800" htmlFor="edad">Rango de edad</label>
            <select v-model="edad" name="edad" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                <option value="" disabled selected>-- Seleccione --</option>
                <option value="18-25">18-25</option>
                <option value="26-33">26-33</option>
                <option value="34-40">34-40</option>
                <option value="+40">+40</option>
            </select>
        </div>

        <div class="md:flex justify-around gap-2">
            <div class="mt-3">
                <label class="text-gray-800" htmlFor="sexo">Sexo</label>
                <select v-model="sexo" name="sexo" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                </select>
            </div>

            <div class="mt-3">
                <label class="text-gray-800" htmlFor="redFavorita">Red Social Favorita</label>
                <select v-model="redFavorita" name="redFavorita" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="Facebook">Facebook</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                </select>
            </div>

        </div>

        <div class="m-3">
            <h2 class="text-gray-600 font-bold text-xl normal-case text-left mt-5">Responda cuantas horas al dia pasa en las siguientes redes sociales 👀</h2>

            <div class="mt-3 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="mt-2">
                    <label class="text-gray-800" htmlFor="hrMedFacebook">Horas al dia en Facebook</label>
                    <select v-model="hrMedFacebook" name="hrMedFacebook" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                        <option value=""  disabled selected >-- Seleccione --</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">+4</option>
                    </select>
                </div>

                <div class="mt-2">
                    <label class="text-gray-800" htmlFor="hrMedWhatsApp">Horas al dia en WhatsApp</label>
                    <select v-model="hrMedWhatsApp" name="hrMedWhatsApp" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                        <option value="" disabled selected>-- Seleccione --</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">+4</option>
                    </select>
                </div>

                <div class="mt-2">
                    <label class="text-gray-800" htmlFor="hrMedTwitter">Horas al dia en Twitter</label>
                    <select v-model="hrMedTwitter" name="hrMedTwitter" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                        <option value="" disabled selected>-- Seleccione --</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">+4</option>
                    </select>
                </div>

                <div class="mt-2">
                    <label class="text-gray-800" htmlFor="hrMedInstagram">Horas al dia en Instagram</label>
                    <select v-model="hrMedInstagram" name="hrMedInstagram" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                        <option value="" disabled selected>-- Seleccione --</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">+4</option>
                    </select>
                </div>

                <div class="mt-2 mb-4">
                    <label class="text-gray-800" htmlFor="hrMedTikTok">Horas al dia en TikTok</label>
                    <select v-model="hrMedTikTok"  name="hrMedTikTok" class="mt-2 block w-full p-2 bg-gray-50 border border-gray-800 hover:border-green-400 hover:rounded-md transition-colors rounded-md">
                        <option value="" disabled selected>-- Seleccione --</option>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4" >+4</option>
                    </select>
                </div>
            </div>

            <input @click="handleSubmit" type="submit" value="Enviar Datos" class="mt-4 w-full bg-green-500 hover:bg-green-600  p-3 text-white transition-colors uppercase font-bold text-lg rounded-md" />
        </div>
    </form>
  </div>
</template>

<script>
import { toNumber } from "@vue/shared";
import Alerta from "./Alerta.vue";

export default {
    name: "Formulario",
    components: {
        Alerta
    },
    data() {
        return {
            email: "",
            edad: "",
            sexo: "",
            redFavorita: "",
            hrMedFacebook: Number,
            hrMedWhatsApp: Number,
            hrMedTwitter: Number,
            hrMedInstagram: Number,
            hrMedTikTok: Number,
            showAlerta: false,
            alertaMessage: '',
        };
    },
    methods: {
        reiniciarFormulario() {
            this.email = '';
            this.edad = '';
            this.sexo = '';
            this.redFavorita = 0;
            this.hrMedFacebook = 0;
            this.hrMedWhatsApp = 0;
            this.hrMedTwitter = 0;
            this.hrMedInstagram = 0;
            this.hrMedTikTok = 0;
        },
        async handleSubmit(e) {
            e.preventDefault();

            // validacion
            if ([this.email, this.edad, this.sexo, this.redFavorita, this.hrMedFacebook, this.hrMedWhatsApp, this.hrMedTwitter, this.hrMedInstagram, this.hrMedTikTok].includes("")) {
                console.log("Todos los campos son obligatorios");
                this.alertaMessage = 'Todos los Campos son obligatorios'
                this.showAlerta = true;

                setTimeout(() => {
                    this.showAlerta = false;
                }, 2000);
                return;
            }
            // envio de datos
            try {
                const url = import.meta.env.VITE_BACKEND_URL;

                const valores = {
                    "email": this.email,
                    "edad": this.edad,
                    "sexo": this.sexo,
                    "redFavorita": this.redFavorita,
                    "tiempoFacebook": toNumber(this.hrMedFacebook),
                    "tiempoWhatsApp": toNumber(this.hrMedWhatsApp),
                    "tiempoTwitter": toNumber(this.hrMedTwitter),
                    "tiempoInstagram": toNumber(this.hrMedInstagram),
                    "tiempoTikTok": toNumber(this.hrMedTikTok)
                }
                
                //Hacemos la peticion para guardar los datos en la BD
                const respuesta = await fetch(url, {
                    method: 'POST', // Crea un nuevo registro
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                //console.log(respuesta);

                if(respuesta.status == 200) {
                    //Si la respuesta es positiva lanza la alerta
                    //opciones de la alerta
                    const optionsAlert = {
                        position: 'top-end',
                        icon: 'success',
                        title: 'Gracias por participar!🥰',
                        text: 'Tu encuesta ha sido enviada satisfactoriamente!',
                        showConfirmButton: true,
                        timer: 2000,
                    };
                    //Disparo de la alerta
                    this.$swal(optionsAlert);
                }

                //Reiniciar el formulario
                this.reiniciarFormulario();

            } catch(error) {
                console.log(error);
            }
        }
    },
    computed: {},
}
</script>

<style>

</style>