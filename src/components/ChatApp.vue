<template>
  <div class="mt-8 ml-20">
    <router-link to="/book" class="bg-indigo-500 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded">Retour</router-link>
  </div>
  <div v-if="!joined" class="flex flex-col items-center h-full justify-center">
    <h1 class="text-blue-500 font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">Rejoindre un space</h1>
    <div>
      <input placeholder="Votre nom" type="text" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker" v-model="currentUser" />
      <button class="bg-green-600 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded ml-2 mt-6" v-on:click="join">Rejoindre</button>
    </div>
  </div>
  <div v-if="joined" class="container mx-auto px-4 flex flex-col items-center justify-center h-full">
    <div class=" w-full flex flex-col items-start justify-start overflow-y-auto h-96 rounded-md border border-grey pl-8 pb-6">
      <div v-for="message in messages" :key="message.id" class="mt-6">
        <span class="">
          {{ message.user }}:
        </span>
        <span class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
           {{ message.text }}
        </span>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <input
          placeholder="Votre message"
          v-model="text"
          class="border border-grey-500 p-4 rounded w-full focus:outline-none text-sm h-10 flex items-center mt-8"
          v-on:keyup.enter="sendMessage"
      />
      <button class="bg-blue-500 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded ml-2 mt-8" v-on:click="sendMessage">Envoyer</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data(){
    return{
      joined: false,
      currentUser: "",
      text: "",
      messages: [],
      socket: io('http://localhost:5000')
    }
  },
  methods: {
    join() {
      this.joined = true;
      this.socketInstance = this.socket
      this.socketInstance.on(
          "message:received", (data) => {
            this.messages = this.messages.concat(data);
          }
      )
    },
    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date(),
        text: this.text,
        user: this.currentUser,
      };
      this.messages = this.messages.concat(message);
      this.socketInstance.emit('message', message);
    },
  },

}
</script>

<style>
</style>
