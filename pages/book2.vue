<template>
  <div>
    <h1 class="text-3xl sm:text-xl text-center sm:text-center text-blue-700">
      Book Management Project
    </h1>
  </div>
  <div
    class="flex sm:w-auto md:w-auto w-fit justify-center sm:justify-center md:justify-center m-4 sm:m-4 md:m-4 p-2 sm:p-2 lg:p-2 md:p-2"
  >
    <form action="" method="post">
      <table class="sm:m-2 m-2 content-center">
        <tr>
          <td><label class="px-2 sm:text-sm" for="book_id">Book ID</label></td>
          <td>
            <input
              v-model="sampleBookData.book_id"
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              type="number"
              name="book_id"
              id="book_id"
              placeholder="Book ID"
              required
            />
          </td>
        </tr>
        <tr>
          <td><label class="px-2" for="book_name">Book Name</label></td>
          <td>
            <input
              v-model="sampleBookData.book_name"
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              type="text"
              name="book_name"
              id="book_name"
              placeholder="Book Name"
              required
            />
          </td>
        </tr>
        <tr>
          <td><label class="px-2" for="author">Book Author</label></td>
          <td>
            <input
              v-model="sampleBookData.author"
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              type="text"
              name="author"
              id="author"
              placeholder="Book Author"
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <label class="px-2" for="price">Book Price</label>
          </td>
          <td>
            <input
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              v-model="sampleBookData.price"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              required
            />
          </td>
        </tr>
        <tr>
          <td><label class="px-2" for="book_image">Book Image</label></td>
          <td>
            <input
              v-model="sampleBookData.book_image"
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              type="text"
              name="book_image"
              id="book_image"
              placeholder="Book Image"
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <!-- <button
              class="rounded-xl px-2 m-2 sm:m-2 sm:px-2 lg:px-2 sm:p-1 ml-2 lg:p-1 md:p-1 bg-blue-600 hover:bg-green-600 text-white"
              @click="uploadImage"
            >
              Upload
            </button> -->
          </td>
          <td>
            <p class="text-xs text-red-600">
              *NOTE - After selecting image please click on upload before
              submitting form.
            </p>
          </td>
        </tr>
        <tr>
          <td><label class="px-2" v for="book_isbn">Book ISBN</label></td>
          <td>
            <input
              v-model="sampleBookData.book_isbn"
              class="rounded-lg ring-zinc-700 ring-3 px-4"
              type="text"
              name="book_isbn"
              id="book_isbn"
              placeholder="Book ISBN"
              required
            />
          </td>
        </tr>
        <tr>
          <td class="px-2">
            <button
              class="sm:rounded-xl ml-2 lg:rounded-xl rounded-xl md:rounded-xl sm:px-2 lg:px-2 px-2 bg-blue-600 sm:p-1 p-1 lg:p-1 md:p-1 hover:bg-green-800 text-white"
              type="submit"
              id="submit"
              @click="createBookData"
            >
              Submit
            </button>
          </td>
          <td>
            <button
              class="sm:rounded-xl lg:rounded-xl rounded-xl md:rounded-xl sm:px-2 lg:px-2 px-2 bg-blue-600 sm:p-1 p-1 lg:p-1 md:p-1 hover:bg-red-600 text-white"
              type="reset"
              id="reset"
              @click="resetForm"
            >
              Reset
            </button>
          </td>
        </tr>
        <!-- <tr>
          <td></td>
          <td></td>
        </tr> -->
      </table>
    </form>
  </div>
  <hr class="border-4 border-red-600" />
  <div class="flex justify-center">
    <input
      type="text"
      class="rounded-lg flex justify-center m-3 content-center ring-zinc-700 ring-3 px-4"
      name="check"
      id="check"
      v-model="check1"
      @keyup="getSpecificBook(check1)"
      placeholder="find by Book Data"
    />
  </div>
  <!-- <h2>{{ this.Book.dataShow() }}</h2> -->
  <hr class="border-4 border-red-600" />
  <div
    class="flex sm:w-auto md:w-auto w-fit sm:flex m5-5 md:flex justify-center mb-8 md:justify-center sm:justify-center"
  >
    <table
      class="border-2 mt-5 sm:text-xs md:text-xs w-fit sm:w-fit md:w-auto p-2 text-center border-neutral-600"
    >
      <tr>
        <th class="border-2 border-neutral-600">Book ID</th>
        <th class="border-2 border-neutral-600">Book Name</th>
        <th class="border-2 border-neutral-600">Book Author</th>
        <th class="border-2 border-neutral-600">Book Price</th>
        <th class="border-2 border-neutral-600">Book Image</th>
        <th class="border-2 border-neutral-600">Book ISBN</th>
        <!-- <th></th> -->
        <th colspan="3" class="border-2 border-neutral-600">Action</th>
      </tr>
      <!-- <tr v-for="book in dataBook" : key="book"> -->
      <tr v-for="book in states.bookDetails" :key="book">
        <!-- <tr v-for="book in state.allBooks" :key="book"> -->
        <!-- <tr> -->
        <td class="border-2 border-neutral-600">{{ book.book_id }}</td>
        <td class="border-2 border-neutral-600">{{ book.book_name }}</td>
        <td class="border-2 border-neutral-600">{{ book.author }}</td>
        <td class="border-2 border-neutral-600">{{ book.price }}</td>
        <td class="border-2 border-neutral-600">{{ book.book_image }}</td>
        <td class="border-2 border-neutral-600">{{ book.book_isbn }}</td>
        <!-- <td><button @click="edit(book.book_id)" type="button">Edit</button></td> -->
        <td class="border-2 border-neutral-600">
          <!-- <button
            class="bg-green-600 hover:bg-green-800 px-2 p-1 rounded-xl text-white"
            @click="showBookImage(book.book_image)"
            type="button"
          >
            View Image
          </button> -->
          <button
            class="bg-blue-600 hover:bg-blue-800 px-2 p-1 rounded-xl text-white"
          >
            <a
              :href="'http://localhost:4000/book/' + book.book_image"
              target="_blank"
              >View Image</a
            >
          </button>
        </td>
        <td class="border-2 border-neutral-600">
          <button
            id="edit"
            class="bg-green-600 hover:bg-green-800 px-2 p-1 rounded-xl text-white"
            @click="editBookData(book.book_id)"
            type="button"
          >
            Edit
          </button>
        </td>
        <td class="border-2 border-neutral-600">
          <button
            class="bg-red-600 hover:bg-red-800 px-2 p-1 rounded-xl text-white"
            @click="deleteBookData(book.book_id)"
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
let check1;
let sampleBookData = {
  book_id: null,
  book_name: '',
  author: '',
  price: null,
  book_image: '',
  book_isbn: '',
};
let states = reactive({
  allBooks: [],
  editBook: [],
  bookDetails: [],
});
getBookData();
// Calling Get API
// function getBooks() {
//   getBookData().then((data: any) => {
//     state.allBooks = data;
//   });
// }
// GET API
async function getBookData() {
  states.allBooks = await $fetch('http://localhost:4000/book');
  console.log(states.bookDetails);
  states.bookDetails = states.allBooks;
}
getBookData();
// // POST API
async function createBookData() {
  event.preventDefault();
  console.log(sampleBookData);
  let response = await $fetch('http://localhost:4000/book', {
    method: 'POST',
    body: sampleBookData,
  });
  // let result = await response.json();
  let result = await response;
  // alert(result.message);
  console.log(result);
  alert('Book added');
  getBookData();
}
// PATCH API
async function editBookData(bookId: string) {
  //   states.editBook = await $fetch("http://localhost:4000/book/" + bookId);
  // states.editBook
  // let specificBook = [];
  // let specificBook = await $fetch("http://localhost:4000/book/" + bookId);
  // console.log("specific", specificBook);
  // alert(specificBook.book_id);
  //   let bookEdit =
  // let bookEdit = states.editBook.filter((book) => {
  //   if (book.book_id == bookId) {
  //     sampleBookData.book_id = book.book_id;
  //     sampleBookData.book_name = book.book_name;
  //     sampleBookData.author = book.author;
  //     sampleBookData.price = book.price;
  //     sampleBookData.book_image = book.book_image;
  //     sampleBookData.book_isbn = book.book_isbn;
  //     return book;
  //   }
  let bookEdit = states.allBooks.filter((book) => {
    if (book.book_id == bookId) {
      sampleBookData.book_id = book.book_id;
      sampleBookData.book_name = book.book_name;
      sampleBookData.author = book.author;
      sampleBookData.price = book.price;
      sampleBookData.book_image = book.book_image;
      sampleBookData.book_isbn = book.book_isbn;
      return book;
    }
  });
  console.log('edit', bookEdit);
  console.log(bookEdit);
  const response = await $fetch('http://localhost:4000/book/patch/' + bookId, {
    method: 'PATCH',
    body: JSON.stringify(sampleBookData),
  });
  getBookData();
}
// Delete API
async function deleteBookData(bookId: string) {
  await $fetch('http://localhost:4000/book/' + bookId, {
    method: 'DELETE',
  });
  getBookData();
}
async function getSpecificBook(check: string) {
  console.log('abc');
  if (check != null) {
    states.bookDetails = states.allBooks.filter((bookID) => {
      let bookId1 = check.toString();
      let bookId2 = bookID.book_id.toString();
      console.log(bookId1);
      let bookName1 = check.toLocaleLowerCase();
      let bookName2 = bookID.book_name.toLocaleLowerCase();
      let bookAuthor1 = check.toLocaleLowerCase();
      let bookAuthor2 = bookID.author.toLocaleLowerCase();
      let bookPrice1 = check.toString();
      let bookPrice2 = bookID.price.toString();
      if (
        bookId2.startsWith(bookId1) ||
        bookName2.startsWith(bookName1) ||
        bookAuthor2.startsWith(bookAuthor1) ||
        bookPrice2.startsWith(bookPrice1)
      ) {
        console.log(bookID);
        return bookID;
      }
    });
  }
  if (check == '') {
    states.bookDetails = states.allBooks;
  }
}
// reset form
async function resetForm() {
  sampleBookData.book_id = '';
  sampleBookData.book_name = '';
  sampleBookData.author = '';
  sampleBookData.price = '';
  sampleBookData.book_image = '';
  sampleBookData.book_isbn = '';
  //   this.indexOfEdit = -1;
  //   this.isEdit = false;
}
</script>
