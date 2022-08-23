<!-- <template></template>
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
    // async getdata() {
    //   await fetch("http://localhost:3005/book")
    //     .then((data) => {
    //       //   this.dataBook1 = data.json();
    //       //   this.bookInfo.push(data.json());
    //       //   console.log(data);
    //       return data.json();
    //     })
    //     .then((data) => {
    //       //   this.dataBook = data;
    //       this.dataBook1 = data;
    //       this.data = data;
    //       //   this.dataBook1.push(data);
    //       console.log(data);
    //       console.log("variable");
    //       console.log(this.dataBook1);
    //       this.show();
    //     })
    //     .catch((err) => console.log(err));
    // },

    // show() {
    //   console.log("this is show");

    //   console.log(this.data);
    // },
    // async save(e) {
    //   e.preventDefault();
    //   console.log(
    //     "=============",
    //     // (this.book_id = 12),
    //     this.book_id,
    //     this.book_name,
    //     this.author,
    //     this.price,
    //     // (this.book_image = "fidcxn.jpg"),
    //     this.book_image,
    //     this.book_isbn
    //     // (this.book_isbn = 43678 - 432)
    //   );
    //   fetch("http://localhost:3005/book", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       book_id: this.book_id,
    //       book_name: this.book_name,
    //       author: this.author,
    //       price: this.price,
    //       book_image: this.book_image,
    //       book_isbn: this.book_isbn,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then((res) => res.json());
    // },

    // async deleteBook(book_id) {
    //   // e.preventDefault();
    //   console.log("=============", book_id);
    //   fetch("http://localhost:3005/book/" + book_id, {
    //     method: "DELETE",
    //     // body: JSON.stringify({
    //     //   book_id: this.book_id,
    //     //   book_name: this.book_name,
    //     //   author: this.author,
    //     //   price: this.price,
    //     //   book_image: this.book_image,
    //     //   book_isbn: this.book_isbn,
    //     // }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then((res) => res.json());
    //   // console.log(save());
    //   this.getdata();
    // },

    // async imageBook(book_image) {
    //   // e.preventDefault();
    //   console.log("book_Image-=============", book_image);
    //   fetch("http://localhost:3005/book/image", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       //   book_id: this.book_id,
    //       //   book_name: this.book_name,
    //       //   author: this.author,
    //       //   price: this.price,
    //       book_image: this.book_image,
    //       //   book_isbn: this.book_isbn,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then((res) => {
    //     console.log(res.json());

    //     res.json();
    //   });
    //   // console.log(save());
    //   this.getdata();
    // },

    async showBookImage(book_image) {
      // e.preventDefault();
      console.log("book_Image-=============", book_image);
      fetch("http://localhost:3005/book/" + book_image, {
        method: "POST",
        // body: JSON.stringify({
        //   //   book_id: this.book_id,
        //   //   book_name: this.book_name,
        //   //   author: this.author,
        //   //   price: this.price,
        //   book_image: this.book_image,
        //   //   book_isbn: this.book_isbn,
        // }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.json());

        res.json();
      });
      // console.log(save());
      this.getdata();
    },
  },
};

// http://localhost:3003/book/
</script> -->
