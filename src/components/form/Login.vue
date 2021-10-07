<template>
 <div v-if="mode == 'login' && status == 'error_login'" class='flex items-center text-white max-w-sm w-full bg-red-400 shadow-md rounded-lg overflow-hidden absolute top-0 right-0'>
		<div class='w-10 border-r px-2'>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
				</path>
			</svg>
		</div>
		<div class='flex items-center px-2 py-3'>
			<div class='mx-3'>
				Adresse mail et/ou mot de passe invalide
			</div>
		</div>
	</div>
  <div v-if="mode == 'create' && status == 'error_create'" class='flex items-center text-white max-w-sm w-full bg-red-400 shadow-md rounded-lg overflow-hidden mx-auto'>
		<div class='w-10 border-r px-2'>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
				</path>
			</svg>
		</div>
		<div class='flex items-center px-2 py-3'>
			<div class='mx-3'>
				Adresse mail déjà utilisée
			</div>
		</div>
	</div>
  <div class="flex items-center justify-center mt-8">
    <div class="w-full max-w-md">
    <h1 class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4" v-if="mode == 'login'">Connexion</h1>
    <h1 class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4" v-else>Inscription</h1>
    <div class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-normal mb-2" for="email">Email</label>
        <input 
        v-model="email" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Adresse mail"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-normal mb-2" for="email">Mot de passe</label>
        <input 
        v-model="password" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="mb-4">
      <button @click="login()" class="bg-blue-400 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
        <span v-if="status == 'loading'">Connexion en cours...</span>
        <span v-else>Connexion</span>
      </button>
      <button @click="createAccount()" class="bg-blue-400 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded" :class="{'button--disabled' : !validatedFields}" v-else>
        <span v-if="status == 'loading'">Création en cours...</span>
        <span v-else>Créer mon compte</span>
      </button>
    </div>
    </div>
    <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="text-blue-400 inline-flex items-center font-semibold tracking-wide cursor-pointer" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="text-blue-400 inline-flex items-center font-semibold tracking-wide cursor-pointer" @click="switchToLogin()">Se connecter</span></p>
  </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'Login',
  data: function () {
    return {
      mode: 'login',
      email: '',
      password: '',
    }
  },
  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push('/book');
      return ;
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(['status'])
  },
  methods: {
    switchToCreateAccount: function () {
      this.mode = 'create';
    },
    switchToLogin: function () {
      this.mode = 'login';
    },
    login: function () {
      const self = this;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      }).then(function () {
        self.$router.push('/book');
      }, function (error) {
        console.log(error);
      })
    },
    createAccount: function () {
      const self = this;
      this.$store.dispatch('createAccount', {
        email: this.email,
        password: this.password,
      }).then(function () {
        self.login();
      }, function (error) {
        console.log(error);
      })
    },
  }
}
</script>
