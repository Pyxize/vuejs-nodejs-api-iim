<template >
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <router-link to="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Mangas</router-link>
  </div>
  <div>
    <router-link to="/add" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Ajouter un Manga</router-link>
  </div>
</nav>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
