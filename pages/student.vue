
<template>
  <main class="flex justify-center w-full h-screen">
    <div>
      <form
        @submit="onFormSubmit()"
        class="bg-gray-100 border-black rounded-lg border-2 px-12"
      >
        <table>
          <h2 class="text-teal-900 text-xl font-bold pt-6">Information Form</h2>
          <hr />
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="fname"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              id="fname"
              v-model="sampleData.fname"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="lastname"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lname"
              v-model="sampleData.lname"
              type="text"
              placeholder="Last Name"
            />
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
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Stud_gender"
                v-model="sampleData.Stud_gender"
                type="text"
                placeholder="Gender"
              />
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
              > -->
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
          </div>
          <div>
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
          </div>
          <div id="hide">
            <button
              class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
              type="submit"
              @click="onFormSubmit()"
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
      <hr class="border-4 border-red-600" />
      <div class="flex justify-center">
        <button
          class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
          type="submit"
          @click="getStdAPI()"
        >
          Get
        </button>
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
          <th class="px-4 border-black rounded-lg border-2">Student Image</th>
          <th class="px-4 border-black rounded-lg border-2">Action</th>
        </tr>

        <tr v-for="item of state.allStud" :key="item.stdid">
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
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.image }}
          </td>
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

<script setup>
let state = reactive({
  allStud: [],
});
let sampleData = {
  stdid: '',
  fname: '',
  lname: '',
  Stud_email: '',
  Stud_gender: '',
  Stud_address: '',
};
getStdAPI();

// GET API
async function getStdAPI() {
  state.allStud = await $fetch('http://localhost:3003/student/stddata');
}
// POST API
async function onFormSubmit() {
  // stdid: state.allStud.length,
  // fname: 'vaibhav' + state.allStud.length,
  // lname: 'rahinj' + state.allStud.length,
  // Stud_email: 'v@gmail.com' + state.allStud.length,
  // Stud_gender: 'male' + state.allStud.length,
  // Stud_address: 'ghjgj' + state.allStud.length,
  // await $fetch("http://localhost:8080/product", {
  //   method: "POST",
  //   body: JSON.stringify(mydata.product),
  // };
  await $fetch('http://localhost:3003/student/stdcreate', {
    method: 'POST',
    body: sampleData,
  });
  getStdAPI();
}

// PATCH API
async function onClickOfEditStud(stdid) {
  let studEdit = state.allStud.filter((std) => {
    if (std.stdid == stdid) {
      sampleData.stdid = std.stdid;
      sampleData.fname = std.fname;
      sampleData.lname = std.lname;
      sampleData.Stud_email = std.Stud_email;
      sampleData.Stud_gender = std.Stud_gender;
      sampleData.Stud_address = std.Stud_address;
      return std;
    }
  });
  console.log(studEdit);
  //   sampleBookData.book_id = bookEdit.book_id;
  const response = await $fetch(
    'http://localhost:3003/student/update/' + stdid,
    {
      method: 'PATCH',
      body: sampleData,
    },
  );
  getStdAPI();
}

// Delete API
async function onDeleteOfStud(stdid) {
  await $fetch('http://localhost:3003/student/' + stdid, {
    method: 'DELETE',
  });
  getStdAPI();
}
</script>
