<template>
  <div>
    <main class="flex justify-center w-full h-screen">
      <div>
        <h1>This is emloyee CRUD</h1>
        <form
          method="post"
          class="bg-gray-100 border-black rounded-lg border-2 px-12"
        >
          <table>
            <h2 class="text-teal-900 text-xl font-bold pt-6">Employee Form</h2>
            <hr />
            <div class="mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="id"
              >
                Employee id
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                id="id"
                name="id"
                v-model="sampleData.id"
                type="number"
                placeholder="Enter Employee id"
              />
              <!-- <span
                v-for="error in v$.id.$e"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              > -->
            </div>
            <div class="mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="firstname"
              >
                Employee First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                id="firstname"
                name="emp_name"
                v-model="sampleData.empFname"
                type="text"
                placeholder="Enter Employee First Name"
              />
              <span
                v-for="error in v$.empFname.$errors"
                :key="error.$uid"
                class="text-red-400"
              >
                {{ error.$message }}
              </span>
            </div>

            <div class="">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="lastname"
              >
                Employee Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                name="emp_lname"
                v-model="sampleData.empLname"
                type="text"
                placeholder="Enter Employee Last Name"
              />
              <span
                v-for="error in v$.empLname.$errors"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              >
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Employee Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="emp_name"
                  v-model="sampleData.email"
                  type="email"
                  placeholder="Enter Employee Email"
                />
                <span
                  v-for="error in v$.email.$errors"
                  :key="error.$uid"
                  class="text-red-500"
                  >{{ error.$message }}</span
                >
              </div>
            </div>

            <div class="rounded mb-4 shadow appearance-none label-floating">
              <label class="mx-4 text-bold mb-4 font-bold" for="address"
                >Employee Address</label
              >
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="emp_address"
                v-model="sampleData.emp_address"
                name="emp_address"
                placeholder="Address"
              />
              <span
                v-for="error in v$.emp_address.$errors"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              >
            </div>
            <div id="hide">
              <button
                class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
                type="button"
                @click="Submit()"
              >
                Submit
              </button>
              <button
                class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
                type="reset"
              >
                Reset
              </button>
            </div>
          </table>
        </form>

        <br />
        <table class="list">
          <tr>
            <th class="px-4 border-black rounded-lg border-2">sr.no</th>
            <th class="px-4 border-black rounded-lg border-2">First Name</th>
            <th class="px-4 border-black rounded-lg border-2">Last Name</th>
            <th class="px-4 border-black rounded-lg border-2">Email</th>
            <th class="px-4 border-black rounded-lg border-2">Address</th>
            <th class="px-4 border-black rounded-lg border-2">Action</th>
          </tr>
          <tr v-for="(item, index) of empp.allEmp" :key="item.id">
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.id }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.empFname }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.empLname }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.email }}
            </td>

            <td class="px-4 border-black rounded-lg border-2">
              {{ item.emp_address }}
            </td>

            <td class="px-4 border-black rounded-lg border-2">
              {{ item.Action }}
              <button
                class="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click="onDelete(item.id)"
              >
                Delete
              </button>
              <button
                class="mx-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                @click="onEdit(item.id)"
              >
                Edit
              </button>
            </td>
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import useVuelidate, {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "~/utils/vuelidate/useVuelidate";
import { reactive, computed } from "vue";

const State = reactive({
  select: true,
  Submit: "submit",
  allEmp: [],
  employ: [],
  id: "",
  errorBack: {},
});
let sampleData = reactive({
  id: null,
  empFname: "",
  empLname: "",
  email: "",
  emp_address: "",
});
const containsUser = (value: any) => {
  return value.includes("user");
};

const empp = reactive({
  allEmp: [],
});

getApi();

async function getApi() {
  empp.allEmp = await $fetch("http://localhost:4000/employee/");
}
// POST API
async function Submit() {
  event.preventDefault();
  const result = await v$.value.$validate();
  await $fetch("http://localhost:4000/employee/", {
    method: "POST",
    body: sampleData,
  });
  // event.preventDefault();
  

  getApi();
  clearData();
}

// PATCH API
async function onEdit(id) {
  // State.Submit = "Update";
  let empEdit = empp.allEmp.filter((employ) => {
    event.preventDefault();
    if (employ.id == id) {
      sampleData.id = employ.id;
      sampleData.empFname = employ.empFname;
      sampleData.empLname = employ.empLname;
      sampleData.email = employ.email;
      sampleData.emp_address = employ.emp_address;
      return employ;
    }
  });
  // console.log(empEdit);
  const response = await $fetch("http://localhost:4000/employee/" + id, {
    method: "PATCH",
    body: sampleData,
  });
  getApi();
  // clearData();
}
// Delete API
async function onDelete(id: number) {
  await $fetch("http://localhost:4000/employee/" + id, {
    method: "DELETE",
  });
  getApi();
}

const rules = computed(() => {
  return {
    empFname: {
      required,
      minLength: minLength(3),
      containsUser: helpers.withMessage("first name is required", containsUser),
    },
    empLname: { required, minLength: minLength(3) },
    email: { required, email },
    emp_address: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
  };
});
const v$ = useVuelidate(rules, sampleData);

async function clearData() {
  sampleData.id = "";
  sampleData.empFname = "";
  sampleData.empLname = "";
  sampleData.email = "";
  sampleData.emp_address = "";
}
</script>
