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
          <table class="m-5 p-5">
            <tr>
              <td><label>Name :</label></td>
              <td>
                <input
                  type="text"
                  v-model="myuser.User_Name"
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
                  v-model="myuser.Email"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Role :</label></td>
              <td>
                <input
                  type="text"
                  v-model="myuser.Roles"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Gender :</label></td>
              <td>
                <select
                  v-model="myuser.Gender"
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
                v-model="myuser.Mobile"
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
                  v-model="myuser.State"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td><label>Country :</label></td>
              <td>
                <input
                  type="text"
                  v-model="myuser.Country"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"/>
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
                  @click="addUserTodata()"
                  class="sm:border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                >
                  Add User</button
                >&nbsp;
                <!-- <button
                  id="btnadd"
                  type="button"
                  @click="resetTodata()"
                  class="sm:border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                >
                  Reset
                </button> -->
              </td>
            </tr>
          </table>
          <br />
        </form>
      </div>
      <div
        class="border-solid border-2 overflow-x-auto relative w-full auto-cols-max col-span-2"
      >
        <!-- <div class="sm:float-right p-2">
          <input
            type="search"
            @input="searchInput($event)"
            class="border text-black rounded-lg p-1 bg-gradient-to-r from-blue-200 to-blue-400 sm:rounded-full bg-white p-1"
            placeholder="Search"
          />
        </div> -->
        <table
          class="sm:font-bold m-2 relative bg-slate-300 border w-full text-left"
        >
          <tr class="sm:bg-slate-300 border my-2">
            <th class="sm:py-3 px-6">User_Name</th>
            <th class="sm:py-3 px-6">Email</th>
            <th class="sm:py-3 px-6">Roles</th>
            <th class="sm:py-3 px-6">Gender</th>
            <!-- <th class="sm:py-3 px-6">Mobile</th> -->
            <!-- <th class="sm:py-3 px-6">Address</th> -->
            <th class="sm:py-3 px-6">State</th>
            <th class="sm:py-3 px-6">Country</th>
            <th class="sm:py-3 px-6">Profile Image</th>
            <th class="sm:py-3 px-6">Action</th>
          </tr>
          <tr
            v-for="(user, i) in userarray"
            :key="user"
            class="sm:bg-white border-b border-slate-300"
          >
            <td class="sm:py-3 px-6">{{ user.User_Name }}</td>
            <td class="sm:py-3 px-6">
              <a href="#" class="underline-offset-4 text-blue-600">{{
                user.Email
              }}</a>
            </td>
            <td class="sm:py-3 px-6">{{ user.Roles }}</td>
            <td class="sm:py-3 px-6">{{ user.Gender }}</td>
            <!-- <td class="sm:py-3 px-6">{{ user.Mobile }}</td> -->
            <!-- <td class="sm:py-3 px-6">{{ user.Address }}</td> -->
            <td class="sm:py-3 px-6">{{ user.State }}</td>
            <td class="sm:py-3 px-6">{{ user.Country }}</td>
            <td class="sm:py-3 px-6">{{ user.User_img }}</td>
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
        <!-- {{ count[0] }} -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

let userarray: any =[];
const myuser = {
  User_Name: null,
  Email: "",
  Roles: "",
  Gender: "",
  // Mobile: '',
  // Address: '',
  State: "",
  Country: "",
  User_img: "",
};
const { data: count } = useFetch("http://localhost:4000/user/");
userarray=count;
console.log(count);

// var isEdit: boolean = false;
// let edtIndex: number = -1;
// let searchText: string = "";

// let flag: false;
//       checkemail: "",
//     };
//   }
// function filterRecords(): any {
//   if (this.searchText) {
//     return this.userarray.filter((user) =>
//       user.User_Name.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }
//   return this.userarray;
// }


function addUserTodata() {
  console.log("add")
  // e.preventDefault();
  // userarray = [...userarray, myuser];

  // if (this.isEdit === true) {
  //   this.userarray[this.edtIndex] = this.myuser;
  //   (this.isEdit = false), (this.edtIndex = -1);
  //   let updatebtn = document.getElementById("btnadd");
  //   let formtitle = document.getElementById("title");
  //   updatebtn.innerText = "Add User";
  //   formtitle.innerText = "Add User";
  // }
  //
  // else {
    this.userarray.push(this.myuser);
      
  // }
  this.myuser = {
    User_Name: null,
    Email: "",
    Roles: "",
    Gender: "",
    // Mobile: '',
    // Address: '',
    State: "",
    Country: "",
    User_img: "",
  };
//   // localStorage.setItem("user", JSON.stringify(this.userarray));
}

// function searchInput(e) {
//   this.searchText = e.target.value;
//   console.log(e.target.value);
// }

function deleteUser(index) {
  this.userarray.splice(index, 1);
}

function editUserDetails(i) {
//   // this.myuser.id = this.userarray[i].id;
//   this.myuser.User_Name = this.userarray[i].User_Name;
//   this.myuser.Email = this.userarray[i].Email;
//   this.myuser.Roles = this.userarray[i].Roles;
//   this.myuser.Gender = this.userarray[i].Gender;
//   //   this.myuser.Mobile = this.userarray[i].Mobile;
//   //   this.myuser.Address = this.userarray[i].Address;
//   this.myuser.State = this.userarray[i].State;
//   this.myuser.Country = this.userarray[i].Country;
//   this.myuser.User_img = this.userarray[i].User_img;
//   this.isEdit = true;
//   this.edtIndex = i;
//   let updatebtn = document.getElementById("btnadd");
//   let formtitle = document.getElementById("title");
//   updatebtn.innerText = "Update";
//   formtitle.innerText = "Update User";
}

// function resetTodata() {
//   this.isEdit = false;
//   this.edtIndex = -1;
//   this.myuser = {
//     User_Name: null,
//     Email: "",
//     Roles: "",
//     Gender: "",
//     // Mobile: '',
//     // Address: '',
//     State: "",
//     Country: "",
//     User_img: "",
//   };
//   function updatebtn() {
//     document.getElementById("btnadd").innerText = "Submit";
//   }

//   function formtitle() {
//     document.getElementById("title").innerText = "Add User";
//   }
// }
</script>
