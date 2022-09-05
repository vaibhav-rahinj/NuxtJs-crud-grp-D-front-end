<template>
  <div>
    <div class="sm:grid gap-x-7 grid-cols-3 h-screen">
      <div class="sm:border-solid border-2">
        <h1 id="title" class="sm:text-center p-2 text-xl font-bold font-serif">
          Add New user
        </h1>
        <div>
          <ul style="list-style-type:disc" v-for="error in state.errormsg" :key="error" class="text-red-600 text-xs pl-4 font-serif">
            <li>{{error}}</li>
          </ul>
        </div>
        <form
          class="sm:font-bold bg-slate-300 m-2 p-4 flex items-center justify-center"
        >
          <table class="sm:m-5 p-5">
            <!-- <tr> -->
            <!-- <td><label>Id :</label></td> -->
            <!-- <td>
                <input
                  type="text"
                  v-model="state.myuser.User_Id"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
                <br />
              </td> -->
            <!-- </tr> -->
            <tr>
              <td><label>Name :</label></td>
              <td>
                <input
                  type="text"
                  v-model="state.myuser.User_Name"
                  :v="v$.User_Name"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.User_Name.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <tr>
              <td><label>Email :</label></td>
              <td>
                <input
                  type="email"
                  v-model="state.myuser.Email"
                  :v="v$.Email"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.Email.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <tr>
              <td><label>Role :</label></td>
              <td>
                <input
                  type="text"
                  v-model="state.myuser.Roles"
                  :v="v$.Roles"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.Roles.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <tr>
              <td><label>Gender :</label></td>
              <td>
                <select
                  v-model="state.myuser.Gender"
                  :v="v$.Gender"
                  class="font-bold sm:w-52 p-2 rounded-md py-2 pr-4 ml-2 mb-2"
                >
                  <option>Select</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.Gender.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <!-- <tr>
            <td><label>Mobile No :</label></td>
            <td>
              <input
                type="text"
                v-model="myuser.Mobile"
                 :v="v$.Mobile"
              placeholder="Mobile +91XXXXXXXXXX"
              required
                class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 ml-2 mb-2 w-52"
              />
            </td>
          </tr> -->
            <tr>
              <td><label>Exam Center :</label></td>
              <td>
                <select
                  v-model="state.Center_Id"
                  multiple="true"
                  @change="submitUserdataId(state.Center_Id)"
                  class="font-bold sm:w-52 p-2 rounded-md py-2 pr-4 ml-2 mb-2"
                >
                  <option
                    v-for="examC in state.exam"
                    :key="examC.Center_Id"
                    :value="examC.Center_Id"
                  >
                    {{ examC.Center_Id }}{{ examC.Exam_Center }}
                  </option>
                </select>
                {{ state.Center_Id }}
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>

            <tr>
              <td><label>State :</label></td>
              <td>
                <input
                  type="text"
                  v-model="state.myuser.State"
                  :v="v$.State"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.State.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <tr>
              <td><label>Country :</label></td>
              <td>
                <input
                  type="text"
                  v-model="state.myuser.Country"
                  :v="v$.Country"
                  class="sm:w-52 p-2 rounded-lg bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 ml-2 mb-2"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span
                  v-for="error in v$.Country.$errors"
                  :key="error.$uid"
                  class="text-red-600 text-xs pl-4"
                  >{{ error.$message }}</span
                >
              </td>
            </tr>
            <!-- <tr>
              <td><label>User Profile :</label></td>
              <td>
                <input type="file" class="sm:w-52 py-2 ml-2 mb-2" />
              </td>
            </tr> -->
            <tr>
              <td></td>
              <td>
                <button
                  id="btnadd"
                  type="button"
                  @click="submitFormValues()"
                  class="sm:border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                >
                  Add User</button
                >&nbsp;
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
            <th class="sm:py-3 px-6">User_Id</th>
            <th class="sm:py-3 px-6">User_Name</th>
            <th class="sm:py-3 px-6">Email</th>
            <th class="sm:py-3 px-6">Roles</th>
            <th class="sm:py-3 px-6">Gender</th>
            <th class="sm:py-3 px-6">State</th>
            <th class="sm:py-3 px-6">Country</th>
            <!-- <th class="sm:py-3 px-6">Profile Image</th> -->
            <th class="sm:py-3 px-6">Action</th>
          </tr>
          <tr
            v-for="(user, i) in state.userarray"
            :key="user"
            class="sm:bg-white border-b border-slate-300"
          >
            <td class="sm:py-3 px-6">{{ user.User_Id }}</td>
            <td class="sm:py-3 px-6">{{ user.User_Name }}</td>
            <td class="sm:py-3 px-6">
              <a href="#" class="underline-offset-4 text-blue-600">{{
                user.Email
              }}</a>
            </td>
            <td class="sm:py-3 px-6">{{ user.Roles }}</td>
            <td class="sm:py-3 px-6">{{ user.Gender }}</td>
            <td class="sm:py-3 px-6">{{ user.State }}</td>
            <td class="sm:py-3 px-6">{{ user.Country }}</td>
            <!-- <td class="sm:py-3 px-6">{{ user.User_img }}</td> -->
            <td colspan="2" class="sm:py-3 px-6">
              <button
                @click="editFormValues(i)"
                class="sm:border rounded-lg p-1 bg-gradient-to-r from-blue-400 to-blue-900 text-white"
              >
                Edit</button
              >&nbsp;
              <button
                @click="deleteFormValues(user.User_Id)"
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
<script lang="ts">
import { reactive, computed } from "vue";
import useVuelidate, {
  required,
  email,
  minLength,
  alpha,
} from "~/utils/vuelidate/useVuelidate";
import Multiselect from "vue-multiselect";

export default {};
</script>

<script setup lang="ts">
let state = reactive({
  userarray: [],
  errormsg:[],
  myuser: {
    User_Id: null,
    User_Name: "",
    Email: "",
    Roles: "",
    Gender: "",
    State: "",
    Country: "",
    // User_img: "",
  },
  exam: [],
  Center_Id: [],
  filterTableRecord:[],
});
var  searchByName = "";
let input = ref("");

const rules = computed(() => {
  return {
    User_Name: { required, alpha, minLength: minLength(4) },
    Email: { required, email },
    Roles: { required, alpha },
    Gender: { required },
    State: { alpha },
    Country: { alpha },
  };
});

const v$ = useVuelidate(rules, state.myuser);

var isEdit: boolean = false;
var usersId: number;

getUserAPI();
// Get API
async function getUserAPI() {
  //-------for get---------
  // state.userarray = await $fetch("http://localhost:4000/user/");
  //-------for filter search reacord--------
  state.filterTableRecord = await $fetch("http://localhost:4000/user/");
  state.userarray = state.filterTableRecord;
}

getExamAPI();
// Get API for exam
async function getExamAPI() {
  state.exam = await $fetch("http://localhost:4000/exam");
}

async function submitUserdataId(id) {
  console.log("dropdown click" + id);
  await $fetch("http://localhost:4000/userdata", {
    method: "POST",
    body: JSON.stringify(id),
  });
}

// async function submitFormValues(){
//   state.userarray.push(state.myuser);
// }

async function editFormValues(i) {
  console.log(i);
  state.myuser = Object.assign({}, state.userarray[i]);
  isEdit = true;
}

async function deleteFormValues(index) {
  await $fetch("http://localhost:4000/user/" + index, {
    method: "DELETE",
  });
  alert("Are you sure to Delete the record");
  getUserAPI();
}

function filterRecords(searchByName) {
  if ( searchByName) {
    var searching = state.userarray.filter((user) =>
      user.User_Name.toLowerCase().includes( searchByName.toLowerCase())
    );
    state.userarray = searching;
  } else{
    state.userarray = state.filterTableRecord;
  }
}

function searchInput(e) {
  searchByName = e.target.value;
  filterRecords(searchByName)
}

async function submitFormValues() {
  const result = await v$.value.$validate();
  const payload = state.myuser;
  const userId = payload.User_Id;
  delete payload.User_Id;

  if (isEdit === true) {
    await $fetch("http://localhost:4000/user/" + userId, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    isEdit = false;
    getUserAPI();
  } else {
    if (result) {
      alert("Successfully data submitted");
    } else {
      alert("Error data not submitted");
    }
    await $fetch("http://localhost:4000/user/", {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => {
      // console.log("id", res.User_Id);
      usersId = res.User_Id;
      userExam();
    }).catch(error=>{state.errormsg=error.data.message
    console.log(state.errormsg)})

    async function userExam() {
      console.log("UserId", usersId);
      console.log(state.Center_Id);
      state.Center_Id.forEach((centerid) => {
        const obj = {
          User: usersId,
          Center: centerid,
        };
        var response = $fetch("http://localhost:4000/user/userdata", {
          method: "POST",
          body: JSON.stringify(obj),
        }).then((res) => {
          console.log("data", obj);
        });
      });
    }

    getUserAPI();
    state.myuser = {
      User_Id: "",
      User_Name: "",
      Email: "",
      Roles: "",
      Gender: "",
      State: "",
      Country: "",
      // User_img: "",
    };
  }
}
</script>
