<template>
    <div class="bg-white mt-5 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 class="text-gray-600 font-bold text-2xl normal-case text-center">Resultados aproximados 📊</h1>
        <div class="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-2">
            <div class="mt-4 mx-2 py-2 px-1 border border-green-400 rounded-md">
                <h1 class="text-3xl md:text-4xl font-bold text-center">{{total}}</h1>
                <p class="w-full text-center">📈Encuestas realizadas</p>
            </div>

            <div class="mt-4 mx-2 py-2 px-1 border border-green-400 rounded-md">
                <h1 class="text-2xl md:text-3xl font-bold text-center">{{redFavorita}}</h1>
                <p class="w-full text-center">💞Favorita</p>
            </div>

            <div class="mt-4 mx-2 py-2 px-1 border border-green-400 rounded-md">
                <h1 class="text-2xl md:text-3xl font-bold text-center">{{redImpopular}}</h1>
                <p class="w-full text-center">👎Impopular</p>
            </div>
        </div>

        <div class="mt-3">
            <h1 class="text-gray-600 font-bold text-2xl normal-case text-center">Estadisticas generales</h1>
            <p class="mt-2">Datos estadisticos aproximados referentes al uso de cada red social</p>
            <div class="mt-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-3">
                
                <div class="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-green-400 rounded-md gap-x-1">
                    <h1 class="text-center flex items-center md:block text-md md:text-2xl font-bold">Facebook</h1>
                    <div class="flex flex-col my-2 text-center">
                        <h3>Rango de edad</h3>
                        <p class="font-bold text-md md:text-xl">{{datosFacebook.edadRango}}</p>
                    </div>

                    <div class="flex flex-col text-center items-center my-2">
                        <h3>Uso al dia</h3>
                        <p class="font-bold text-md md:text-xl">{{datosFacebook.tiempoPromedio}}hr</p>
                    </div>
                </div>
    
                <div class="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-green-400 rounded-md gap-x-1">
                    <h1 class="text-center flex items-center md:block text-md md:text-2xl font-bold">WhatsApp</h1>
                    <div class="flex flex-col my-2 text-center">
                        <h3>Rango de edad</h3>
                        <p class="font-bold text-md md:text-xl">{{datosWhatsApp.edadRango}}</p>
                    </div>

                    <div class="flex flex-col text-center items-center my-2">
                        <h3>Uso al dia</h3>
                        <p class="font-bold text-md md:text-xl">{{datosWhatsApp.tiempoPromedio}}hr</p>
                    </div>
                </div>
    
                <div class="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-green-400 rounded-md gap-x-1">
                    <h1 class="text-center flex items-center md:block text-md md:text-2xl font-bold">Twitter</h1>
                    <div class="flex flex-col my-2 text-center">
                        <h3>Rango de edad</h3>
                        <p class="font-bold text-md md:text-xl">{{datosTwitter.edadRango}}</p>
                    </div>

                    <div class="flex flex-col text-center items-center my-2">
                        <h3>Uso al dia</h3>
                        <p class="font-bold text-md md:text-xl">{{datosTwitter.tiempoPromedio}}hr</p>
                    </div>
                </div>
    
                <div class="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-green-400 rounded-md gap-x-1">
                    <h1 class="text-center flex items-center md:block text-md md:text-2xl font-bold">Instagram</h1>
                    <div class="flex flex-col my-2 text-center">
                        <h3>Rango de edad</h3>
                        <p class="font-bold text-md md:text-xl">{{datosInstagram.edadRango}}</p>
                    </div>

                    <div class="flex flex-col text-center items-center my-2">
                        <h3>Uso al dia</h3>
                        <p class="font-bold text-md md:text-xl">{{datosInstagram.tiempoPromedio}} hr</p>
                    </div>
                </div>
    
                <div class="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-green-400 rounded-md gap-x-1">
                    <h1 class="text-center flex items-center md:block text-md md:text-2xl font-bold">TikTok</h1>
                    <div class="flex flex-col my-2 text-center">
                        <h3>Rango de edad</h3>
                        <p class="font-bold text-md md:text-xl">{{datosTikTok.edadRango}}</p>
                    </div>

                    <div class="flex flex-col text-center items-center my-2">
                        <h3>Uso al dia</h3>
                        <p class="font-bold text-md md:text-xl">{{datosTikTok.tiempoPromedio}} hr</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ResumenDatos',
    data() {
        return {
            total: this.objetoDatos.totalEncuestas,
            redFavorita: this.objetoDatos.redFavorita,
            redImpopular: this.objetoDatos.redImpopular,
            datosFacebook: this.objetoDatos.datosFacebook,
            datosWhatsApp: this.objetoDatos.datosWhatsApp,
            datosTwitter: this.objetoDatos.datosTwitter,
            datosInstagram: this.objetoDatos.datosInstagram,
            datosTikTok: this.objetoDatos.datosTikTok,
        }
    },
    props: {
        objetoDatos: Object
    }
}
</script>

<style>

</style>