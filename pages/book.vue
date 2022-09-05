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
              v-model="book_id"
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
              v-model="book_name"
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
              v-model="author"
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
              v-model="price"
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
            <!-- v-model="bookData.book_image" -->
            <!-- v-bind="book_image" -->
            <!-- <input
              v-bind:dir="fileBookPath"
              type="file"
              name="book_image"
              id="book_image"
              @change="imageBook(book_image)"
            /> -->
            <input
              class=""
              type="file"
              name="fileBookPath"
              @change="onFileChange"
              required
            />
            <!-- <button
              class="rounded-xl px-2 m-2 sm:m-2 sm:px-2 lg:px-2 sm:p-1 p-1 lg:p-1 md:p-1 bg-blue-600 hover:bg-green-600 text-white"
              @click="uploadImage"
            >
              Upload Image
            </button> -->
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="rounded-xl px-2 m-2 sm:m-2 sm:px-2 lg:px-2 sm:p-1 ml-2 lg:p-1 md:p-1 bg-blue-600 hover:bg-green-600 text-white"
              @click="uploadImage"
            >
              Upload
            </button>
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
              v-model="book_isbn"
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
              @click="save"
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
      v-model="check"
      @keyup="getSpecificBook(check)"
      placeholder="find by Book Data"
    />
  </div>
  <!-- <h2>{{ this.Book.dataShow() }}</h2> -->
  <hr class="border-4 border-red-600" />
  <div
    class="flex sm:w-auto md:w-auto w-fit sm:flex m5-5 md:flex justify-center md:justify-center sm:justify-center"
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
      <tr v-for="book in bookDetails" :key="book">
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
            @click="editBook(book.book_id)"
            type="button"
          >
            Edit
          </button>
        </td>
        <td class="border-2 border-neutral-600">
          <button
            class="bg-red-600 hover:bg-red-800 px-2 p-1 rounded-xl text-white"
            @click="deleteBook(book.book_id)"
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  data() {
    // let bookInfo = [];
    return {
      show: false,
      isEdit: false,
      indexEdit: -1,
      // myButton: "",

      book_id: "",
      book_name: "",
      author: "",
      price: "",
      book_image: "",
      book_isbn: "",

      // imagePath:'',
      bookDetails: [],
      check: "",
      fileBookPath: "",
      imagePath: "",
      data: "",
      dataBook: [],
      dataBook1: {},
      //   data: [],
      bookData: {},

      bookId1: "",
      bookName1: "",
      bookAuthor1: "",
      bookPrice1: "",
      bookImage1: "",
      bookIsbn1: "",

      bookId2: "",
      bookName2: "",
      bookAuthor2: "",
      bookPrice2: "",
      bookImage2: "",
      bookIsbn2: "",
    };
  },
  //   computed: {},
  created() {
    // this.fetch();
    // this.save();
    this.getdata();
  },
  methods: {
    // get all Book data API
    async getdata() {
      await fetch("http://localhost:4000/book")
        .then((data) => {
          //   this.dataBook1 = data.json();
          //   this.bookInfo.push(data.json());
          //   console.log(data);
          return data.json();
        })
        .then((data) => {
          //   this.dataBook = data;
          this.dataBook1 = data;
          this.data = data;
          this.bookDetails = data;
          //   this.dataBook1.push(data);
          console.log(data);
          console.log("variable");
          console.log(this.dataBook1);
          // this.show();
        })
        .catch((err) => console.log(err));

      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
    },

    async save(e) {
      // e.preventDefault();
      console.log(
        "=============",
        this.book_id,
        this.book_name,
        this.author,
        this.price,
        // (this.book_image = "fidcxn.jpg"),
        this.book_image,
        this.book_isbn
        // (this.book_isbn = 43678 - 432)
      );

      if (this.isEdit === true) {
        // this.allUserData[this.indexEdit] = this.userData;

        fetch("http://localhost:4000/book/patch/" + this.indexEdit, {
          method: "PATCH",
          body: JSON.stringify({
            book_id: this.book_id,
            book_name: this.book_name,
            author: this.author,
            price: this.price,
            // book_image: this.book_image,
            book_image: this.imagePath,
            book_isbn: this.book_isbn,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        alert("Book Edited Successfully.");
        this.getdata();
        this.isEdit = false;
        this.indexEdit = -1;
      } else {
        // alert("unable to update");
        fetch("http://localhost:4000/book", {
          method: "POST",
          body: JSON.stringify({
            book_id: this.book_id,
            book_name: this.book_name,
            author: this.author,
            price: this.price,
            book_image: this.imagePath,
            book_isbn: this.book_isbn,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        alert("Book Added Successfully.");
        this.getdata();
      }

      // fetch("http://localhost:3005/book", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     book_id: this.book_id,
      //     book_name: this.book_name,
      //     author: this.author,
      //     price: this.price,
      //     book_image: this.imagePath,
      //     book_isbn: this.book_isbn,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }).then((res) => res.json());

      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
      this.resetForm();
    },

    editBook(book_id) {
      this.data.filter((bookId) => {
        if (bookId.book_id == book_id) {
          this.book_id = bookId.book_id;
          this.book_name = bookId.book_name;
          this.author = bookId.author;
          this.price = bookId.price;
          this.book_image = bookId.book_image;
          this.book_isbn = bookId.book_isbn;

          const myButton = document.getElementById("submit");
          myButton.innerText = "Update";
          this.isEdit = true;
          this.indexEdit = book_id;
          this.imagePath = bookId.book_image;
          // this.updateID
        }
      });
    },

    // delete by ID API
    async deleteBook(book_id) {
      // e.preventDefault();
      console.log("=============", book_id);
      fetch("http://localhost:4000/book/" + book_id, {
        method: "DELETE",
        // body: JSON.stringify({
        //   book_id: this.book_id,
        //   book_name: this.book_name,
        //   author: this.author,
        //   price: this.price,
        //   book_image: this.book_image,
        //   book_isbn: this.book_isbn,
        // }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      // console.log(save());
      this.bookDetails = this.data;
      this.getdata();

      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
    },

    // post image API
    // async imageBook(book_image) {
    async imageBook(fileBookPath) {
      // e.preventDefault();
      console.log("book_Image-=============", fileBookPath);
      fetch("http://localhost:4000/book/image", {
        method: "POST",
        // body: JSON.stringify({
        //   book_id: this.book_id,
        //   book_name: this.book_name,
        //   author: this.author,
        //   price: this.price,
        // fileBookPath = this.book_image,
        // image: fileBookPath,

        //   book_isbn: this.book_isbn,
        // }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.json());
        (this.fileBookPath = fileBookPath), res.json();
        console.log("file book image", this.fileBookPath);
      });
      // console.log(save());
      this.getdata();
      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
    },

    onFileChange(event) {
      console.log(event);
      this.fileBookPath = event.target.files[0];
      // this.reaction.this.fileBookPath =
      //   event.target.files || event.dataTransfer.files;
      // console.log(this.fileBookPath);
      if (this.isEdit == true) {
        const myButton = document.getElementById("submit");
        myButton.innerText = "Update";
      } else {
        const myButton = document.getElementById("submit");
        myButton.innerText = "Submit";
      }
    },
    uploadImage() {
      event.preventDefault();
      const fd = new FormData();
      fd.append("image", this.fileBookPath, this.fileBookPath.name);
      axios
        .post("http://localhost:4000/book/image", fd)
        .then((res) => {
          console.log(res.data);
          this.imagePath = res.data;
        })
        .then((data) => {
          console.log(data);
        });

      if (this.isEdit == true) {
        const myButton = document.getElementById("submit");
        myButton.innerText = "Update";
      } else {
        const myButton = document.getElementById("submit");
        myButton.innerText = "Submit";
      }
    },

    // show Image link API
    async showBookImage(book_image) {
      // event.preventDefault();
      console.log("book_Image -=============", book_image);
      fetch("http://localhost:4000/book/" + book_image, {
        // method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.json());
        this.imagePath = "http://localhost:4000/book/" + book_image;
        // this.imagePath = res.json;
        res.json();
        alert("paste this link in your browser ->  " + this.imagePath);
      });
      // console.log(save());
      this.getdata();

      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
    },

    getSpecificBook(checkData) {
      if (checkData != null) {
        this.bookDetails = this.data.filter((bookID) => {
          this.bookId1 = checkData.toString();
          this.bookId2 = bookID.book_id.toString();

          // this.bookId1 = checkData.toLocaleLowerCase();
          console.log(this.bookId1);
          // this.bookId2 = bookID.book_id.toLocaleLowerCase();

          this.bookName1 = checkData.toLocaleLowerCase();
          this.bookName2 = bookID.book_name.toLocaleLowerCase();

          this.bookAuthor1 = checkData.toLocaleLowerCase();
          this.bookAuthor2 = bookID.author.toLocaleLowerCase();

          this.bookPrice1 = checkData.toString();
          this.bookPrice2 = bookID.price.toString();

          if (
            this.bookId2.startsWith(this.bookId1) ||
            this.bookName2.startsWith(this.bookName1) ||
            this.bookAuthor2.startsWith(this.bookAuthor1) ||
            this.bookPrice2.startsWith(this.bookPrice1)
          ) {
            // toLocaleLowerCase
            console.log(bookID);
            return bookID;
          }

          // if (bookID.book_id == checkData) {
          //   console.log("Selected user", bookID);
          //   return bookID;
          // }
        });
      }
      if (checkData == "") {
        this.bookDetails = this.data;
      }
    },

    async resetForm() {
      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";

      this.book_id = "";
      this.book_name = "";
      this.author = "";
      this.price = "";
      this.book_image = "";
      this.book_isbn = "";

      this.indexOfEdit = -1;
      this.isEdit = false;
    },
  },
};

// http://localhost:4000/book/
</script>
