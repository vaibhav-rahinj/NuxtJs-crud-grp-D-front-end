
<template>
  <main class="flex justify-center w-full h-screen">
    <div>
      <form
        method="post"
        class="bg-gray-100 border-black rounded-lg border-2 px-12"
      >
        <table>
          <h2 class="text-teal-900 text-xl font-bold pt-6">Information Form</h2>
          <hr />
          <!-- <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="stdid"
            >
              Student Id
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              id="stdid"
              v-model="sampleData.stdid"
              type="text"
              placeholder="Student Id"
            /> -->

          <div class="">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="fname"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fname"
              v-model="sampleData.fname"
              type="text"
              placeholder="First Name"
            />
            <span
              v-for="error in v$.fname.$errors"
              :key="error.$uid"
              class="text-red-500"
              >{{ error.$message }}</span
            >
          </div>

          <div class="">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="lastname"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lname"
              v-model="sampleData.lname"
              type="text"
              placeholder="Last Name"
            />
            <span
              v-for="error in v$.lname.$errors"
              :key="error.$uid"
              class="text-red-500"
              >{{ error.$message }}</span
            >
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Stud_email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Stud_email"
                v-model="sampleData.Stud_email"
                type="email"
                placeholder="Email"
              />
              <span
                v-for="error in v$.Stud_email.$errors"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              >
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Stud_gender"
              >
                Gender
              </label>
              <!-- <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Stud_gender"
                v-model="sampleData.Stud_gender"
                type="text"
                placeholder="Gender"
              /> -->
              <!-- <label
                for="gender"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Male</label
              >
              <input
                id="gender"
                type="radio"
                ref="gender"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="gender"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Female</label
              >
              <input
                id="gender"
                type="radio"
                ref="gender"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              /> -->
              <select
                class="dropdown-toggle px-2 py-2 bg-gray-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg active:text-black transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                name="department"
                v-model="sampleData.Stud_gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span
                v-for="error in v$.Stud_gender.$errors"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              >
            </div>
          </div>
          <div class="rounded mb-4 shadow appearance-none label-floating">
            <label class="mx-4 text-bold mb-4 font-bold" for="address"
              >Address</label
            >
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              v-model="sampleData.Stud_address"
              type="text"
              placeholder="Address"
            />
            <span
              v-for="error in v$.Stud_address.$errors"
              :key="error.$uid"
              class="text-red-500"
              >{{ error.$message }}</span
            >
          </div>
          <!-- <div>
            <label
              for="Stdimage"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Student Image</label
            >
            <input
              type="file"
              name="fileBookPath"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="onFileChange"
            />
            <button
              @click="uploadImage"
              class="py-1 px-5 bg-red-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
            >
              Upload
            </button>
          </div> -->
          <div>
            <button
              class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
              type="submit"
              @click="onSubmit()"
            >
              {{ State.Submit }}
            </button>
            <button
              class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
              type="reset"
              @click="resetForm()"
            >
              Reset
            </button>
          </div>

          <!-- <div class="mt-4 border-2 border-red-600">
            <p class="text-red-500">Errors:</p>
            <span
              class="text-red-500 p-11"
              v-for="error in v$.$errors"
              :key="error.$uid"
            >
              {{ error.$property }} - {{ error.$message }},</span
            >
          </div> -->
          <!-- <div>{{ State.errorBack }}</div> -->
        </table>
      </form>
      <!-- <hr class="border-4 border-red-600" /> -->
      <div class="flex justify-center">
        <input
          type="text"
          class="rounded-lg flex justify-center m-3 content-center ring-zinc-700 ring-3 px-4"
          name="check"
          id="check"
          v-model="Check1"
          @keyup="getSpecificBook(Check1)"
          placeholder="find by Book Data"
        />
      </div>
      <br />
      <table class="list">
        <tr>
          <th class="px-4 border-black rounded-lg border-2">Student Id</th>
          <th class="px-4 border-black rounded-lg border-2">First Name</th>
          <th class="px-4 border-black rounded-lg border-2">Last Name</th>
          <th class="px-4 border-black rounded-lg border-2">Email</th>
          <th class="px-4 border-black rounded-lg border-2">Gender</th>
          <th class="px-4 border-black rounded-lg border-2">Address</th>
          <!-- <th class="px-4 border-black rounded-lg border-2">Student Image</th> -->
          <th class="px-4 border-black rounded-lg border-2">Action</th>
        </tr>

        <tr v-for="item of State.allStud" :key="item.stdid">
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.stdid }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.fname }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.lname }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.Stud_email }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.Stud_gender }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.Stud_address }}
          </td>
          <!-- <td class="px-4 border-black rounded-lg border-2">
            {{ item.image }}
          </td> -->
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.Action }}
            <button
              class="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              @click="onDeleteOfStud(item.stdid)"
            >
              Delete
            </button>
            <button
              class="mx-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              @click="onClickOfEditStud(item.stdid)"
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script lang="ts">
import useVuelidate, {
  required,
  minLength,
  email,
  alpha,
  maxLength,
} from '~/utils/vuelidate/useVuelidate';
</script>

<script setup lang="ts">
// import { required, minLength, between } from 'vuelidate/lib/validators';
import { reactive, computed } from 'vue';

let Check1: any;
let isEdit = false;
let State = reactive({
  select: true,
  Submit: 'submit',
  allStud: [],
  StudDetails: [],
  stdid: '',
  errorBack: {},
});
let sampleData = reactive({
  fname: '',
  lname: '',
  Stud_email: '',
  Stud_gender: '',
  Stud_address: '',
});
//validation

// const Stud = (value: any) => {
//   return value.include('user');
// };
const rules = computed(() => {
  return {
    fname: {
      required,
      alpha,
      minLength: minLength(3),
      maxLength: maxLength(35),
    },
    lname: {
      required,
      alpha,
      minLength: minLength(3),
      maxLength: maxLength(35),
    },
    Stud_email: { required, email },
    Stud_gender: { required },
    Stud_address: { required },
  };
});
const v$ = useVuelidate(rules, sampleData);

getStdAPI();

// GET API
async function getStdAPI() {
  State.allStud = await $fetch('http://localhost:4000/student/stddata');
}
// async function onFormSubmit() {
//   alert('xvcv');
//   await $fetch('http://localhost:4000/student/stdcreate', {
//     method: 'POST',
//     body: sampleData,
//   });
//   getStdAPI();
// }

//clearData
async function clearData() {
  sampleData.fname = '';
  sampleData.lname = '';
  sampleData.Stud_email = '';
  sampleData.Stud_gender = '';
  sampleData.Stud_address = '';
}

// POST API
async function onSubmit() {
  const result = await v$.value.$validate();
  // if (!result) {
  //   alert('forms successfully submit..');
  // } else {
  //   alert('form validation failed');
  // }
  event.preventDefault();

  if (State.select === true) {
    const response = await $fetch('http://localhost:4000/student/stdCreate/', {
      method: 'POST',
      body: JSON.stringify(sampleData),
    });
    alert('data post');
    clearData();
  } else {
    putData();
   alert('data Update');
    State.Submit = 'Submit';
  }
  getStdAPI();
  clearData();

  // this.v$.value.$validate();
  // if (!this.v$.$error) {
  //   console.log('submit');
  // } else {
  //   console.log('not submit');
  // }

  //const payload = { ...sampleData };
}
// PATCH API
async function onClickOfEditStud(stdid: any) {
  State.Submit = 'Update';
  State.select = false;
  const studEdit: any = await $fetch('http://localhost:4000/student/' + stdid);
  State.stdid = studEdit.stdid;
  console.log(State.stdid);
  sampleData.fname = studEdit.fname;
  sampleData.lname = studEdit.lname;
  sampleData.Stud_email = studEdit.Stud_email;
  sampleData.Stud_gender = studEdit.Stud_gender;
  sampleData.Stud_address = studEdit.Stud_address;
  // isEdit = true;
}

async function putData() {
  const stdid = State.stdid;
  const response = await $fetch(
    'http://localhost:4000/student/update/' + stdid,
    {
      method: 'PATCH',
      body: sampleData,
    },
  );
  getStdAPI();
  clearData();
}
// Delete API
async function onDeleteOfStud(stdid: any) {
  await $fetch('http://localhost:4000/student/' + stdid, {
    method: 'DELETE',
  });
  isEdit = false;

  getStdAPI();
}

async function getSpecificBook(check: string) {
  console.log('abc');
  if (check != null) {
    State.StudDetails = State.allStud.filter((stdID) => {
      let stdid1 = check.toString();
      let stdid2 = stdID.stdid.toString();
      let stdfname1 = check.toLocaleLowerCase();
      let stdfname2 = stdID.fname.toLocaleLowerCase();

      let stdlname1 = check.toLocaleLowerCase();
      let stdlname2 = stdID.lname.toLocaleLowerCase();

      let stdemail1 = check.toString();
      let stdemail2 = stdID.Stud_email.toString();

      let stdgender1 = check.toString();
      let stdgender2 = stdID.Stud_gender.toString();

      let stdaddress1 = check.toString();
      let stdaddress2 = stdID.Stud_address.toString();

      if (
        stdid2.startsWith(stdid1) ||
        stdfname2.startsWith(stdfname1) ||
        stdlname2.startsWith(stdlname1) ||
        stdemail2.startsWith(stdemail1) ||
        stdgender2.startsWith(stdgender1) ||
        stdaddress2.startsWith(stdaddress1)
      ) {
        console.log(stdID);
        return stdID;
      }
    });
    resetForm();
    isEdit = false;
  }
  if (check == '') {
    State.StudDetails = State.allStud;
  }
}

//reset form
async function resetForm() {
  sampleData.fname = '';
  sampleData.lname = '';
  sampleData.Stud_email = '';
  sampleData.Stud_gender = '';
  sampleData.Stud_address = '';
  isEdit = false;
}

// const { error: backError, data: posts } = await useFetch(
//   'http://localhost:4000/student',
//   { method: 'POST', body: JSON.stringify(sampleData) },
// );
// State.errorBack = backError;
// console.log(backError);
// console.log(posts);
</script>
