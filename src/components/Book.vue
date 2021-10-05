<template>
  <div v-if="currentBook" class="flex justify-center items-center w-full mt-6 bg-gray-200">
    <form class="w-10/12">
      <div class="flex flex-col mb-4">
        <label for="title" class="mb-2 font-bold text-lg text-gray-900">Titre</label>
        <input type="text"
               class="border py-2 px-3 text-grey-800"
               id="title"
               v-model="currentBook.title"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="title" class="mb-2 font-bold text-lg text-gray-900">Auteur</label>
        <input type="text"
               class="border py-2 px-3 text-grey-800"
               id="author"
               v-model="currentBook.author"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="description" class="mb-2 font-bold text-lg text-gray-900">Description</label>
        <textarea type="text"
               class="border py-2 px-3 text-grey-800"
               id="description"
               v-model="currentBook.description"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="title" class="mb-2 font-bold text-lg text-gray-900">Date de publication</label>
        <input type="text"
               class="border py-2 px-3 text-grey-800"
               id="publishedDate"
               v-model="currentBook.publishedDate"
        />
      </div>
      <button type="submit" class="bg-yellow-500 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="updateBook">Modifier</button>

      <div class="mt-16">
        <h3 class="mb-4">Voulez-vous supprimer le manga ?</h3>
        <button class="bg-red-500 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded" @click="deleteBook">Supprimer</button>
      </div>
      <p>{{ message }}</p>
    </form>
  </div>

  <div v-else>
    <br />
    <p>Shiiiiiiiiiiit</p>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";
export default {
  name: "book",
  data() {
    return {
      currentBook: null,
      message: ''
    };
  },
  methods: {
    getBook(_id) {
      BookDataService.get(_id)
          .then(response => {
            this.currentBook = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateBook() {
      BookDataService.update(this.currentBook._id, this.currentBook)
          .then(response => {
            console.log(response.data);
            this.message = 'Le manga à bien été modifié !!';
           // this.$router.push({name: "book"})
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteBook() {
      BookDataService.delete(this.currentBook._id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "book" });
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getBook(this.$route.params.id);
  }
};
</script>

<style>
</style>
