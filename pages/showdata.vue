<template>
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
    class="flex overflow-scroll sm:w-auto md:w-auto w-fit sm:flex m5-5 md:flex justify-center mb-8 md:justify-center sm:justify-center"
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
        <!-- <th class="border-2 border-neutral-600">Book Category Id</th> -->
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
        <!-- <td class="border-2 border-neutral-600">
            {{ book.categoryCategoryId }}
          </td> -->
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
import { reactive } from "vue"; // or '@vue/composition-api' in Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import {
  alpha,
  email,
  required,
  numeric,
  minLength,
  maxLength,
} from "@vuelidate/validators";

// export default {
//   setup() {
const state = reactive({
  book_id: null,
  book_name: "",
  author: "",
  //   categoryCategoryId: "",
  price: null,
  book_image: "",
  book_isbn: "",
});

const rules = {
  book_id: { required, numeric },
  book_name: { required, alpha, minLength: minLength(3) },
  author: { required, alpha },
  price: { required, numeric },
  book_image: { required, alpha },
  book_isbn: {
    required,
    numeric,
    minLength: minLength(13),
    maxLength: maxLength(13),
  },
};

const v$ = useVuelidate(rules, state);

// let categoryData = [];
let errorCode;
let check1;
let isEdit = false;
let sampleBook;
let id;
let errorId = false;
let catData = [];
// let sampleBookData = {
//   book_id: null,
//   book_name: "",
//   author: "",
//   price: null,
//   book_image: "",
//   book_isbn: "",
// };
let backendCategory = reactive({
  bookCategory: [],
  categoryData: [],
});

let backEnd = reactive({
  errorMsg: [],
  catData: [],
});
let errorMsg;
let states = reactive({
  allBooks: [],
  editBook: [],
  bookDetails: [],
  category: [],
});
let dataCat1 = [];
getBookData();

// GET Category API
async function getCategory() {
  states.category = await $fetch("http://localhost:4000/category");
  //   console.log(states.bookDetails);
  console.log("category", states.category);
  catData = states.category;

  //   states.bookDetails = states.allBooks;
}

getCategory();

// Calling Get API
// function getBooks() {
//   getBookData().then((data: any) => {
//     state.allBooks = data;
//   });
// }

// GET API
async function getBookData() {
  states.allBooks = await $fetch("http://localhost:4000/book");
  console.log("bookD", states.bookDetails);
  console.log("states -> ", states);

  states.bookDetails = states.allBooks;
}

getBookData();

// // POST API
async function createBookData() {
  const result1 = await v$.value.$validate();
  event.preventDefault();
  console.log(state);
  //   console.log("selected category", backendCategory.categoryData);
  console.log(" category", catData);

  console.log("selected category ", backEnd.catData);

  if (result1) {
    if (isEdit != true) {
      let response = await $fetch("http://localhost:4000/book", {
        method: "POST",
        body: state,
      })
        .then((res) => {
          console.log("res", res);
          resetForm();
          alert("Book added successfully.");
        })
        .catch((err) => {
          console.error("error", err.message, err.error);
          errorMsg = err.message;
        });
      // let result = await response.json();
      let result = await response;
      //   alert(result.message);
      console.log("result", result);
    }

    if (isEdit == true) {
      sampleBook = {
        book_id: state.book_id,
        book_name: state.book_name,
        author: state.author,
        // categoryCategoryId: state.categoryCategoryId,
        price: state.price,
        book_image: state.book_image,
        book_isbn: state.book_isbn,
      };

      const responseEdit = await $fetch(
        "http://localhost:4000/book/patch/" + id,
        {
          method: "PATCH",
          body: JSON.stringify(sampleBook),
        }
      )
        .then((res) => {
          //   console.log("edit response ", responseEdit);

          console.log("res", res);
          resetForm();
          alert("Book edited successfully.");
        })
        .catch((err) => {
          console.error("error", err);
          backEnd.errorMsg.push(err.message);
        });
      isEdit = false;
    }
    console.log("error", backEnd.errorMsg);

    //   resetForm();
    getBookData();
  } else {
    alert("please enter correct info.");
    return;
  }
}
// PATCH API
async function editBookData(bookId: string) {
  //   states.editBook = await $fetch("http://localhost:4000/book/" + bookId);
  id = bookId;
  // states.editBook
  // let specificBook = [];
  let specificBook = await $fetch("http://localhost:4000/book/" + bookId);

  console.log("specific", specificBook);
  //   alert(specificBook.book_id);

  state.book_id = specificBook.book_id;
  state.book_name = specificBook.book_name;
  state.author = specificBook.author;
  //   state.categoryCategoryId = specificBook.categoryCategoryId;
  state.price = specificBook.price;
  state.book_image = specificBook.book_image;
  state.book_isbn = specificBook.book_isbn;

  //   sampleBook = {
  //     book_id: state.book_id,
  //     book_name: state.book_name,
  //     author: state.author,
  //     price: state.price,
  //     book_image: state.book_image,
  //     book_isbn: state.book_isbn,
  //   };
  isEdit = true;

  //   getBookData();
}
// Delete API
async function deleteBookData(bookId: string) {
  await $fetch("http://localhost:4000/book/" + bookId, {
    method: "DELETE",
  });

  isEdit = false;
  //   resetForm();
  getBookData();
}

async function getSpecificBook(check: string) {
  console.log("abc");
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

      let bookIsbn1 = check.toString();
      let bookIsbn2 = bookID.book_isbn.toString();

      //   if (
      //     bookId2.startsWith(bookId1) ||
      //     bookName2.startsWith(bookName1) ||
      //     bookAuthor2.startsWith(bookAuthor1) ||
      //     bookPrice2.startsWith(bookPrice1)
      //   ) {
      if (
        bookId2.includes(bookId1) ||
        bookName2.includes(bookName1) ||
        bookAuthor2.includes(bookAuthor1) ||
        bookPrice2.includes(bookPrice1) ||
        bookIsbn2.includes(bookIsbn1)
      ) {
        console.log(bookID);
        return bookID;
      }
    });
    resetForm();
    isEdit = false;
  }
  if (check == "") {
    states.bookDetails = states.allBooks;
  }
}

// reset form
async function resetForm() {
  state.book_id = "";
  state.book_name = "";
  state.author = "";
  //   state.categoryCategoryId = "";
  state.price = "";
  state.book_image = "";
  state.book_isbn = "";

  isEdit = false;
}
</script>
