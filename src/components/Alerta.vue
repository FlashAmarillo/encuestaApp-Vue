<template>
    <div class="flex justify-center">
        <h2 class="p-2 mt-4 font-bold text-xl bg-red-400 text-white text-center rounded-md w-3/4">{{ alertaMessage }}</h2>
    </div>
</template>

<script>
export default {
    name: "Alerta",
    props: {
        alertaMessage: {
            typeof: String
        }
    }
}
</script>

<style>

</style>