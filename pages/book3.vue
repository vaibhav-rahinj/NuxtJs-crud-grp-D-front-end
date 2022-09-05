<template>
  <div>
    <h1 class="text-3xl sm:text-xl text-center sm:text-center text-blue-700">
      Book Management Project
    </h1>
  </div>
  <div>
    Backend Errors :
    <span class="text-red-600" v-for="err in backEnd.errorMsg" :key="err">
      <p>{{ err }}</p>
    </span>
  </div>

  <hr class="border-3 border-blue-700" />
  <div>
    <button class="" type="button">
      <NuxtLink to="/showdata">Show Data</NuxtLink>
    </button>
  </div>
  <!-- <ValidationProvider rules="required|alpha" v-slot="{ errors }">
    <input type="text" v-model="value" />
    <span>{{ errors[0] }}</span>
  </ValidationProvider> -->
  <div
    class="flex sm:w-auto md:w-auto w-fit justify-center sm:justify-center md:justify-center m-4 sm:m-4 md:m-4 p-2 sm:p-2 lg:p-2 md:p-2"
  >
    <form action="" method="post">
      <table class="sm:m-2 m-2 content-center">
        <tr>
          <td><label class="px-2 sm:text-sm" for="book_id">Book ID</label></td>
          <td>
            <div>
              <input
                v-model="state.book_id"
                class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
                type="number"
                name="book_id"
                id="book_id"
                placeholder="Book ID"
                required
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <!--  -->
          </td>
          <td>
            <!-- v-show="errorId == true"    -->
            <span
              v-for="error in v$.book_id.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span>
          </td>
        </tr>
        <tr>
          <td><label class="px-2" for="book_name">Book Name</label></td>
          <td>
            <input
              v-model="state.book_name"
              class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
              type="text"
              name="book_name"
              id="book_name"
              placeholder="Book Name"
              required
            />
          </td>
        </tr>

        <tr>
          <td>
            <!--  -->
          </td>
          <td>
            <span
              v-for="error in v$.book_name.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span>
          </td>
        </tr>

        <!-- Book Author Section -->
        <tr>
          <td><label class="px-2" for="author">Book Author</label></td>
          <td>
            <input
              v-model="state.author"
              class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
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
            <!--  -->
          </td>
          <td>
            <span
              v-for="error in v$.author.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span>
          </td>
        </tr>

        <!-- Book Category Section -->
        <tr>
          <td><label class="px-2" for="category">Book Category</label></td>
          <td>
            <!-- v-model="dropDown.catData" -->
            <select
              name="category"
              id="category"
              v-model="state.categories"
              multiple="true"
            >
              <option value="" disabled>Select Category</option>

              <option
                v-for="category in states.category"
                :key="category.categoryId"
                v-bind:value="category.categoryId"
              >
                <!-- @keyup="multipleSelect(category.categoryName)" -->
                {{ category.categoryId }}) {{ category.categoryName }}
              </option>
              <!-- </span> -->
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <!-- {{ state.categoryCategoryId }} -->
            <!-- {{ dropDown.catData }} -->
            {{ state.categories }}
            <!--  -->
          </td>
          <td>
            <!-- <span
              v-for="error in v$.author.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span> -->
          </td>
        </tr>

        <!-- Book Price section -->
        <tr>
          <td>
            <label class="px-2" for="price">Book Price</label>
          </td>
          <td>
            <input
              class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
              v-model="state.price"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <!--  -->
          </td>
          <td>
            <span
              v-for="error in v$.price.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span>
          </td>
        </tr>

        <!-- Book Image Section -->
        <tr>
          <td><label class="px-2" for="book_image">Book Image</label></td>
          <td>
            <input
              v-model="state.book_image"
              class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
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
              <!-- *NOTE - After selecting image please click on upload before
              submitting form. -->
              <span
                v-for="error in v$.book_image.$errors"
                :key="error.$uid"
                class="text-red-600 text-xs pl-4"
              >
                {{ error.$message }}
              </span>
            </p>
          </td>
        </tr>

        <!-- Book Isbn Section -->
        <tr>
          <td><label class="px-2" v for="book_isbn">Book ISBN</label></td>
          <td>
            <input
              v-model="state.book_isbn"
              class="rounded-lg border-2 border-gray-500 ring-zinc-700 ring-3 px-4"
              type="text"
              name="book_isbn"
              id="book_isbn"
              placeholder="Book ISBN"
              required
            />
          </td>
        </tr>
        <tr>
          <td>
            <!--  -->
          </td>
          <td>
            <span
              v-for="error in v$.book_isbn.$errors"
              :key="error.$uid"
              class="text-red-600 text-xs pl-4"
            >
              {{ error.$message }}
            </span>
          </td>
        </tr>

        <!-- Button Sections -->
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
  <div class="h-1/4 overflow-scroll md:overflow-scroll overflow-y-scroll">
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
          <th class="border-2 border-neutral-600">Book Category</th>
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
          <td class="border-2 border-neutral-600">
            <p v-for="cat in book.categories" :key="cat.id">
              "{{ cat.categoryName }}"
            </p>
          </td>
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
                :href="'http://localhost:3006/book/' + book.book_image"
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
  </div>
</template>

<script setup lang="ts">
// let value;
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
  price: null,
  book_image: "",
  book_isbn: "",
  categories: [],
});
const demo = reactive({
  book_category1: [],
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
  //   catData: [],
});
let dropDown = reactive({
  //   errorMsg: [],
  catData: [],
});
let book_ID = null;
let errorMsg;
let states = reactive({
  allBooks: [],
  editBook: [],
  bookDetails: [],
  category: [],
  // tt: [],
});
let relation = reactive({
  //   demo: {
  id: book_ID,
  book: null,
  category: null,
  //   },
});
let relation1 = {
  // id: book_ID,
  book: null,
  category: null,
};
let id1;
let dataCat1 = [];
getBookData();

// GET Category API
async function getCategory() {
  states.category = await $fetch("http://localhost:3006/category");
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
  states.allBooks = await $fetch("http://localhost:3006/book");
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

  // console.log("selected category ", dropDown.catData);
  console.log("selected category ", state.categories);
  // let temp = "";
  // state.book_category.map((d) => {
  //   temp = temp + d + ",";
  //   demo.book_category1.push(d);
  // });
  // dropDown.catData = temp;
  // console.log("array in string - ", temp);
  // state.book_category = temp;

  // console.log("second insertion ", demo4);

  let demo2 = {
    book_id: state.book_id,
    book_name: state.book_name,
    author: state.author,
    price: state.price,
    book_image: state.book_image,
    book_isbn: state.book_isbn,
    // categories: demo4,
  };

  if (result1) {
    if (isEdit != true) {
      let response = await $fetch("http://localhost:3006/book", {
        method: "POST",
        body: demo2,
      })
        .then((res) => {
          console.log("res", res);
          console.log("res ID- > ", res.book_id);
          console.log("Book added successfully.");
          //   book_ID = state.book_id;
          book_ID = res.book_id;
          // console.log("bookID-> ", book_ID);
          // let demo4 = [];
          // let demo3 = state.categories.map((ele) => {
          //   console.log("second call", ele.categoryId);
          //   let abc = {
          //     book: book_ID,
          //     category: ele,
          //   };
          //   demo4.push(abc);
          // });

          // console.log("second insertion ", demo4);

          // let response7 = $fetch("http://localhost:3006/book/bookcat", {
          //   method: "POST",
          //   body: demo4,
          // });

          // relationTable();
          resetForm();
        })
        .catch((err) => {
          console.error("error", err.message, err.error);
          errorMsg = err.data.message;
          console.log("errorMsg", errorMsg);
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
        price: state.price,
        book_image: state.book_image,
        book_isbn: state.book_isbn,
        book_category: state.categories,
      };

      const responseEdit = await $fetch(
        "http://localhost:3006/book/patch/" + id,
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
          backEnd.errorMsg = err.data.message;
          // push(err.message);
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

// Third Table API
// http://localhost:3006/book/bookcat

// async function relationTable() {
//   // http://localhost:3006/book/bookcat;
//   console.log("in relation id ", book_ID);

//   // dropDown.catData.map((e) => {
//   // demo.book_category1.map((e) => {
//   state.book_category.map((e) => {
//     relation1 = {
//       // id: book_ID,
//       book: book_ID,
//       category: e,
//     };
//     console.log("relation  ", relation1);

//     let response3 = $fetch("http://localhost:3006/book/bookcat", {
//       method: "POST",
//       body: relation1,
//     })
//       .then((res) => {
//         console.log("res", e + "--" + res);
//         console.log("response", response3);

//         //   console.log("res ID- > ", res.book_id);

//         //   book_ID = state.book_id;
//         console.log("bookID-> ", book_ID);
//       })
//       .catch((err) => {
//         console.error("error", err.message, err.error);
//         errorMsg = err.message;
//       });
//   });

//   // let result = await response.json();
//   //   let result = await response;
//   //   alert(result.message);
//   //   console.log("result", result);
//   getBookData();
// }

// PATCH API
async function editBookData(bookId: string) {
  //   states.editBook = await $fetch("http://localhost:3006/book/" + bookId);
  id = bookId;
  // states.editBook
  // let specificBook = [];
  // let categoryData = await $fetch("http://localhost:3006/book/bookcat");

  let specificBook = await $fetch("http://localhost:3006/book/" + bookId);

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
  //   console.log("edit", bookEdit);
  //   if (isEdit == true) {
  //     const response = await $fetch(
  //       "http://localhost:3006/book/patch/" + bookId,
  //       {
  //         method: "PATCH",
  //         body: JSON.stringify(sampleBook),
  //       }
  //     );
  //   }
  //   resetForm();
  //   isEdit = false;

  //   getBookData();
}
// Delete API
async function deleteBookData(bookId: string) {
  await $fetch("http://localhost:3006/book/" + bookId, {
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
  //   this.indexOfEdit = -1;
  //   this.isEdit = false;
}
</script>