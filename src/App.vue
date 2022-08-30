<template>
  <div class="md:flex md:min-h-screen">
    
    <div class="md:w-1/4 bg-slate-800 px-5 py-10">
      <h2 class="text-4xl font-bold text-center text-white border-b-2 border-b-blue-600 pb-2">CRM - Redes Sociales</h2>
      <nav class="mt-10 flex justify-evenly items-center md:block">
        
        <div class="flex gap-2 items-center text-white hover:text-green-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

          <router-link id="home" to="/" class="text-2xl">Fomulario</router-link>
        </div>

        <div class="flex mt-2 gap-2 items-center text-white hover:text-green-400 transition-colors"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>

          <router-link to="/datos" class=" text-2xl block hover:text-green-400 transition-colors">Datos</router-link>
        </div>
      </nav>
    </div>
    
    <div class="md:w-3/4 p-10 md:h-screen overflow-scroll bg-slate-200">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>

export default {
  name: "App",
  data() {
    return {
      urlActual: this.$router.path
    }
  },
  computed: {
    currentRouteName() {
      // We will see what `params` is shortly
      return this.$route.name
    },
  },
}

</script>

