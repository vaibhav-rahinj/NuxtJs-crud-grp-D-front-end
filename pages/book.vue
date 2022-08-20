<template>
  <div>
    <h1 class="text-3xl text-blue-700">Book Management Project</h1>
  </div>
  <div>
    <form action="" method="post">
      <table>
        <tr>
          <td><label for="book_id">Book ID</label></td>
          <td>
            <input
              v-model="book_id"
              type="number"
              name="book_id"
              id="book_id"
              placeholder="Book ID"
            />
          </td>
        </tr>
        <tr>
          <td><label for="book_name">Book Name</label></td>
          <td>
            <input
              v-model="book_name"
              type="text"
              name="book_name"
              id="book_name"
              placeholder="Book Name"
            />
          </td>
        </tr>

        <tr>
          <td><label for="author">Book Author</label></td>
          <td>
            <input
              v-model="author"
              type="text"
              name="author"
              id="author"
              placeholder="Book Author"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label for="price">Book Price</label>
          </td>
          <td>
            <input
              v-model="price"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
            />
          </td>
        </tr>
        <tr>
          <td><label for="book_image">Book Image</label></td>
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
            <input type="file" name="fileBookPath" @change="onFileChange" />
            <button @click="uploadImage">Upload</button>
          </td>
        </tr>
        <tr>
          <td><label for="book_isbn">Book ISBN</label></td>
          <td>
            <input
              v-model="book_isbn"
              type="text"
              name="book_isbn"
              id="book_isbn"
              placeholder="Book ISBN"
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="rounded-xl p-1 bg-blue-600 hover:bg-green-600 text-white"
              type="submit"
              id="submit"
              @click="save"
            >
              Submit
            </button>
          </td>
          <td>
            <button
              class="rounded-xl bg-blue-600 p-1 hover:bg-red-600 text-white"
              type="reset"
              id="reset"
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
    <hr class="border-4 border-red-200" />
    <!-- <h2>{{ hello1 }}</h2> -->
    <p v-once v-show="show == true">{{ getdata() }}<br /></p>
    <br />
    <input
      type="number"
      name="check"
      id="check"
      v-model="check"
      @keyup="getSpecificBook(check)"
      placeholder="find by Book ID"
    />
    <!-- <h2>{{ this.Book.dataShow() }}</h2> -->
    <hr class="border-4 border-red-600" />

    <table class="border-2 text-center border-neutral-600">
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
      <tr v-for="book in data" :key="book">
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
          <a
            :href="'http://localhost:3005/book/' + book.book_image"
            target="_blank"
            >View Image</a
          >
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
      myButton: "",

      book_id: "",
      book_name: "",
      author: "",
      price: "",
      book_image: "",
      book_isbn: "",

      // imagePath:'',
      check: "",
      fileBookPath: "",
      imagePath: "",
      data: "",
      dataBook: [],
      dataBook1: {},
      //   data: [],
      bookData: {},
    };
  },
  //   computed: {},
  created() {
    // this.fetch();
    this.save();
  },
  methods: {
    // get all Book data API
    async getdata() {
      await fetch("http://localhost:3005/book")
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
      e.preventDefault();
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

        fetch("http://localhost:3005/book/patch/" + this.indexEdit, {
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

        this.isEdit = false;
        this.indexEdit = -1;
      } else {
        // alert("unable to update");
        fetch("http://localhost:3005/book", {
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
      fetch("http://localhost:3005/book/" + book_id, {
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
      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
      this.getdata();
    },

    // post image API
    // async imageBook(book_image) {
    async imageBook(fileBookPath) {
      // e.preventDefault();
      console.log("book_Image-=============", fileBookPath);
      fetch("http://localhost:3005/book/image", {
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
        .post("http://localhost:3005/book/image", fd)
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
      fetch("http://localhost:3005/book/" + book_image, {
        // method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.json());
        this.imagePath = "http://localhost:3005/book/" + book_image;
        // this.imagePath = res.json;
        res.json();
        alert("paste this link in your browser ->  " + this.imagePath);
      });
      // console.log(save());
      this.getdata();

      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
    },

    async resetForm() {
      const myButton = document.getElementById("submit");
      myButton.innerText = "Submit";
      // indexOfEdit=-1;
      this.isEdit = false;
    },
  },
};

// http://localhost:3003/book/
</script>
