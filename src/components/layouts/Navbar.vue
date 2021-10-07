<template>
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <router-link to="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Mangas</router-link>
  </div>
  <div>
    <router-link to="/add" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Ajouter un Manga</router-link>
  </div>
  <div>
    <button @click="logout()">Deconnexion</button>
    </div>
</nav>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
  name: 'Profile',
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
   // this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>
<style>
    
</style>
