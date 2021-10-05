<template>
  <div class="flex justify-center items-center w-full mt-6">
    <div v-if="!submitted">
      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="titre">Titre</label>
        <input
            type="text"
            class="border py-2 px-3 text-grey-800"
            id="titre"
            required
            v-model="book.title"
            name="title"
        />
      </div>

      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="auteur">Auteur</label>
        <input
            class="border py-2 px-3 text-grey-800"
            id="auteur"
            required
            v-model="book.author"
            name="description"
        />
      </div>

      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="description">Description</label>
        <textarea
            class="border py-2 px-3 text-grey-800"
            id="description"
            required
            v-model="book.description"
            name="description"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-gray-900" for="publishedDate">Date de publication</label>
        <input
            class="border py-2 px-3 text-grey-800"
            id="publishedDate"
            required
            v-model="book.publishedDate"
            name="publishedDate"
        />
      </div>

      <button @click="saveBook" class="bg-blue-600 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded">Ajouter</button>
    </div>

    <div v-else>
      <h4>Votre manga est ajouté !!!</h4>
      <button class="bg-green-600 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="newBook">Retour à la liste des mangas</button>
    </div>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
  name: "addBook",
  data() {
    return {
      book: {
        _id: null,
        title: "",
        description: "",
        author: "",
        publishedDate: ""
      },
      submitted: false
    };
  },
  methods: {
    saveBook() {
      const data = {
        title: this.book.title,
        description: this.book.description,
        author: this.book.author,
        publishedDate: this.book.publishedDate
      };

      BookDataService.create(data)
          .then(response => {
            this.book._id = response.data._id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newBook() {
      this.submitted = false;
      this.book = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
