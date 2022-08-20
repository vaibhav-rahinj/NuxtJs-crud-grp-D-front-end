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
            <input
              v-bind:dir="book_image"
              type="file"
              name="book_image"
              id="book_image"
            />
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
    <!-- <hr class="border-4 border-red-200" /> -->
    <!-- <h2>{{ hello1 }}</h2> -->
    <p v-once v-show="show === true">{{ getdata() }}<br /></p>
    <br />
    <!-- <h2>{{ this.Book.dataShow() }}</h2> -->
    <!-- <hr class="border-4 border-red-600" /> -->

    <table>
      <tr>
        <th>Book ID</th>
        <th>Book Name</th>
        <th>Book Author</th>
        <th>Book Price</th>
        <th>Book Image</th>
        <th>Book ISBN</th>
        <!-- <th></th> -->
        <th>Action</th>
      </tr>

      <!-- <tr v-for="book in dataBook" : key="book"> -->
      <tr v-for="book in data" :key="book">
        <!-- <tr> -->
        <td>{{ book.book_id }}</td>
        <td>{{ book.book_name }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.book_image }}</td>
        <td>{{ book.book_isbn }}</td>
        <!-- <td><button @click="edit(book.book_id)" type="button">Edit</button></td> -->
        <td>
          <button
            class="bg-red-600 px-2 text-black"
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
export default {
  data() {
    // let bookInfo = [];
    return {
      show: false,
      book_id: "",
      book_name: "",
      author: "",
      price: "",
      book_image: "",
      book_isbn: "",

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
          this.show();
        })
        .catch((err) => console.log(err));
    },

    show() {
      console.log("this is show");

      console.log(this.data);
    },
    async save(e) {
      e.preventDefault();
      console.log(
        "=============",
        // (this.book_id = 12),
        this.book_id,
        this.book_name,
        this.author,
        this.price,
        // (this.book_image = "fidcxn.jpg"),
        this.book_image,
        this.book_isbn
        // (this.book_isbn = 43678 - 432)
      );
      fetch("http://localhost:3005/book", {
        method: "POST",
        body: JSON.stringify({
          book_id: this.book_id,
          book_name: this.book_name,
          author: this.author,
          price: this.price,
          book_image: this.book_image,
          book_isbn: this.book_isbn,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },

    async deleteBook(book_id) {
      // e.preventDefault();
      console.log(
        "=============",
        // (this.book_id = 12),
        book_id
        // this.book_name,
        // this.author,
        // this.price,
        // // (this.book_image = "fidcxn.jpg"),
        // this.book_image,
        // this.book_isbn
        // (this.book_isbn = 43678 - 432)
      );
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
      this.getdata();
    },
  },
};

// http://localhost:3003/book/
</script>
