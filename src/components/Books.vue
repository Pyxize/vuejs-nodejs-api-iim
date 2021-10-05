<template>
  <div class="flex justify-center items-center pt-8">
    <h1 class="text-lg font-bold text-grey-700">Liste des mangas </h1>
  </div>

    <!-- get ALL manga -->
    <div class="flex justify-center mb-8">
      <div class="bg-white shadow-xl rounded-lg w-1/2">
        <ul class="divide-y divide-gray-300">
          <li v-for="(book, index) in books" :key="index" @click="setActiveBook(book, index)" :class="{ active: index == currentIndex }" class="p-4 hover:bg-gray-50 cursor-pointer">{{book.title}}</li>
        </ul>
      </div>
    </div>
    <!-- get manga -->
      <div v-if="currentBook">
        <div class="bg-white rounded-lg p-6 container mx-auto">
        <div class="flex items-center space-x-6 mb-4">
          <div>
            <p class="text-xl text-gray-700 font-normal mb-1">{{ currentBook.title }}</p>
            <p class="text-base text-blue-600 font-normal">{{ currentBook.author }}</p>
          </div>
        </div>
        <div>
          <p class="text-gray-400 leading-loose font-normal text-base mb-6">{{currentBook.description}}</p>
        </div>
          <router-link :to="'/book/' + currentBook._id" class="bg-yellow-500 text-white hover:bg-blue-dark font-bold py-2 px-4 rounded">Modfier</router-link>
      </div>
      </div>
      <div v-else>
        <div class="bg-white rounded-lg p-6 container mx-auto flex items-center justify-center">
          <p class="text-xl text-gray-700 font-normal mb-1">cliquez sur un manga !!!</p>
        </div>
      </div>
</template>
<script>
import BookDataService from "../services/BookDataService";

export default {

  name: "Books",
  data() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveBooks() {
      BookDataService.getAll()
          .then(response => {
            this.books = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveBooks();
      this.currentbook = null;
      this.currentIndex = -1;
    },

    setActiveBook(book, index) {
      this.currentBook = book;
      this.currentIndex = book ? index : -1;
    },

    removeAllBooks() {
      BookDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchTitle() {
      BookDataService.findByTitle(this.title)
          .then(response => {
            this.books = response.data;
            this.setActiveBook(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveBooks();
  }
}
</script>
<style>

</style>
