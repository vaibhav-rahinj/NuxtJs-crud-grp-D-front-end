<template>
  <div>
    <div class="grid gap-x-7 grid-cols-3 h-screen">
      <!-- <h1 class="p-4 bg-red-400 text-center font-bold font-serif text-xl">User Management</h1> -->
      <div class="border-solid border-2">
        <h1 id="title" class="text-center p-2 text-xl font-bold font-serif">
          Add New user
        </h1>
        <form
          class="sm:font-bold bg-slate-300 m-2 p-4 flex items-center justify-center"
        >
          <!-- <h1
          id="title"
          class="text-center p-2 text-xl font-bold bg-red-300 font-serif"
        >
          Add New user
        </h1> -->
          <table class="m-5 p-5">
            <tr>
              <td><label>Name :</label></td>
              <td>
                <input
                  type="text"
                  v-model="newUser.Name"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td><label>Email :</label></td>
              <td>
                <input
                  type="email"
                  v-model="newUser.Email"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Role :</label></td>
              <td>
                <input
                  type="text"
                  v-model="newUser.Role"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Gender :</label></td>
              <td>
                <select
                  v-model="newUser.Gender"
                  class="font-bold sm:w-52 p-2 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                >
                  <option>Select</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </td>
            </tr>
            <!-- <tr>
            <td><label>Mobile No :</label></td>
            <td>
              <input
                type="text"
                v-model="newUser.Mobile"
              placeholder="Mobile +91XXXXXXXXXX"
              required
                class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 ml-2 mb-2 w-52"
              />
            </td>
          </tr> -->
            <tr>
              <td><label>State :</label></td>
              <td>
                <input
                  type="text"
                  v-model="newUser.State"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Country :</label></td>
              <td>
                <input
                  type="text"
                  v-model="newUser.Country"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>User Profile :</label></td>
              <td>
                <input type="file" class="sm:w-52 py-2 ml-2 mb-2" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  id="btnadd"
                  type="button"
                  @click="addUserTodata"
                  class="sm:border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                >
                  Add User</button
                >&nbsp;
                <button
                  id="btnadd"
                  type="button"
                  @click="resetTodata"
                  class="sm:border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                >
                  Reset
                </button>
              </td>
            </tr>
          </table>
          <br />
        </form>
      </div>
      <div
        class="border-solid border-2 overflow-x-auto relative w-full auto-cols-max col-span-2"
      >
        <div class="sm:float-right p-2">
          <input
            type="search"
            @input="searchInput($event)"
            class="border text-black rounded-lg p-1 bg-gradient-to-r from-blue-200 to-blue-400 sm:rounded-full bg-white p-1"
            placeholder="Search"
          />
        </div>
        <table
          class="sm:font-bold m-2 relative bg-slate-300 border w-full text-left"
        >
          <tr class="sm:bg-slate-300 border my-2">
            <th class="sm:py-3 px-6">Name</th>
            <th class="sm:py-3 px-6">Email</th>
            <th class="sm:py-3 px-6">Role</th>
            <th class="sm:py-3 px-6">Gender</th>
            <!-- <th class="sm:py-3 px-6">Mobile</th> -->
            <!-- <th class="sm:py-3 px-6">Address</th> -->
            <th class="sm:py-3 px-6">State</th>
            <th class="sm:py-3 px-6">Country</th>
            <th class="sm:py-3 px-6">Profile Image</th>
            <th class="sm:py-3 px-6">Action</th>
          </tr>
          <tr
            v-for="(row, i) in filterRecords"
            :key="row"
            class="sm:bg-white border-b border-slate-300"
          >
            <td class="sm:py-3 px-6">{{ row.Name }}</td>
            <td class="sm:py-3 px-6">
              <a href="#" class="underline-offset-4 text-blue-600">{{
                row.Email
              }}</a>
            </td>
            <td class="sm:py-3 px-6">{{ row.Role }}</td>
            <td class="sm:py-3 px-6">{{ row.Gender }}</td>
            <!-- <td class="sm:py-3 px-6">{{ row.Mobile }}</td> -->
            <!-- <td class="sm:py-3 px-6">{{ row.Address }}</td> -->
            <td class="sm:py-3 px-6">{{ row.State }}</td>
            <td class="sm:py-3 px-6">{{ row.Country }}</td>
            <td class="sm:py-3 px-6">{{ row.Profile }}</td>
            <td colspan="2" class="sm:py-3 px-6">
              <button
                @click="editUserDetails(i)"
                class="sm:border rounded-lg p-1 bg-gradient-to-r from-blue-400 to-blue-900 text-white"
              >
                Edit</button
              >&nbsp;
              <button
                @click="deleteUser(i)"
                class="sm:border rounded-lg p-1 bg-gradient-to-r from-red-400 to-red-900 text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User Component",
  props: ["dataarray", "items"],
  data() {
    return {
      isEdit: false,
      edtIndex: -1,
      newUser: {
        Name: null,
        Email: "",
        Role: "",
        Gender: "",
        // Mobile: '',
        // Address: '',
        State: "",
        Country: "",
        Profile: "",
      },
      searchText: "",

      flag: false,
      checkemail: "",
    };
  },
  computed: {
    // stordata() {
    //   this.dataarray = JSON.parse(localStorage.getItem("user"));
    // },
    filterRecords() {
      if (this.searchText) {
        return this.dataarray.filter((user) =>
          user.Name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
      return this.dataarray;
    },
  },
  methods: {
    addUserTodata(e) {
      e.preventDefault();
      this.checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // this.checkmobile =
      //   /^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm;

      if (this.isEdit === true) {
        this.dataarray[this.edtIndex] = this.newUser;
        (this.isEdit = false), (this.edtIndex = -1);
        let updatebtn = document.getElementById("btnadd");
        let formtitle = document.getElementById("title");
        updatebtn.innerText = "Add User";
        formtitle.innerText = "Add User";
      }
      //   else if (
      //     !isNaN(this.newUser.Name) ||
      //     this.newUser.Name == null ||
      //     this.newUser.Name == ""
      //   ) {
      //     alert("Please Enter Name");
      //   }
      // else if (this.checkemail.test(this.newUser.Email)) {
      // ||dataarray.Email==newUser.Email
      // }
      //   else if (!this.checkemail.test(this.newUser.Email)) {
      //     alert("Email is Invalid");
      //   }
      // else if (this.dataarray.Email == this.newUser.Email) {
      //     alert("Email is already added");
      // }
      // else if (!this.checkmobile.test(this.newUser.Mobile)) {
      //     alert("mob is Invalid");
      // }
      // else if (!this.checkmobile.test(this.newUser.Mobile)) {
      //     alert("Mobile no. is Invalid");
      // }
      // else if (this.newUser.Address == null || this.newUser.Address == "") {
      //     alert("Please Enter Address");
      // }
      else {
        this.dataarray.push(this.newUser);
      }
      this.newUser = {
        Name: null,
        Email: "",
        Role: "",
        Gender: "",
        // Mobile: '',
        // Address: '',
        State: "",
        Country: "",
        Profile: "",
      };
      // localStorage.setItem("user", JSON.stringify(this.dataarray));
    },
    searchInput(e) {
      this.searchText = e.target.value;
      console.log(e.target.value);
    },
    deleteUser(index) {
      this.dataarray.splice(index, 1);
    },
    editUserDetails(i) {
      // this.newUser.id = this.dataarray[i].id;
      this.newUser.Name = this.dataarray[i].Name;
      this.newUser.Email = this.dataarray[i].Email;
      this.newUser.Role = this.dataarray[i].Role;
      this.newUser.Gender = this.dataarray[i].Gender;
      //   this.newUser.Mobile = this.dataarray[i].Mobile;
      //   this.newUser.Address = this.dataarray[i].Address;
      this.newUser.State = this.dataarray[i].State;
      this.newUser.Country = this.dataarray[i].Country;
      this.newUser.Profile = this.dataarray[i].Profile;
      this.isEdit = true;
      this.edtIndex = i;
      let updatebtn = document.getElementById("btnadd");
      let formtitle = document.getElementById("title");
      updatebtn.innerText = "Update";
      formtitle.innerText = "Update User";
    },
    resetTodata() {
      this.isEdit = false;
      this.edtIndex = -1;
      (this.newUser = {
        Name: null,
        Email: "",
        Role: "",
        Gender: "",
        // Mobile: '',
        // Address: '',
        State: "",
        Country: "",
        Profile: "",
      }),
        (updatebtn = document.getElementById("btnadd"));
      formtitle = document.getElementById("title");
      updatebtn.innerText = "Submit";
      formtitle.innerText = "Add User";
    },
  },
};
</script>
