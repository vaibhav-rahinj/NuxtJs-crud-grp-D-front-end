<!-- <div class="grid items-center">
    <form class="w-full max-w-lg grid justify-center" onsubmit="onFormSubmit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="firstName"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="lastName"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <input
            id="gender"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="gender"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Male</label
          >
          <input
            id="gender"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="gender"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Female</label
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
          type="text"
          placeholder="Address"
        />
      </div>
      <div
        class="form_action-button flex flex-wrap py-2 items-center justify-evenly pt-4 my-4"
      >
        <input
          class="bg-black hover:bg-white hover:text-black hover:border-black text-white py-2 px-4 rounded"
          type="submit"
          value="Save Details"
        />
      </div>
    </form>
    <table
      class="list table-auto top-2 mb-8 border-8 border-black border-separate border-spacing-2 border border-slate-400"
      id="storelist"
    >
      <thead>
        <tr>
          <th class="border border-slate-300">FirstName</th>
          <th class="border border-slate-300">LastName</th>
          <th class="border border-slate-300">Email</th>
          <th class="border border-slate-300">Gender</th>
          <th class="border border-slate-300">Address</th>
        </tr>
      </thead>
      <tbody class="border border-slate-300"></tbody>
    </table>
  </div>
</template>
<script setup>
var selectedRow = null; // globla varialbe
function onFormSubmit(event) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updatRecord(formData);
  }
  resetForm(formData);
}

// retrive the data form
function readFormData() {
  var formData = {};
  formData['firstName'] = document.getElementById('firstName').value;
  formData['lastName'] = document.getElementById('lastName').value;
  formData['email'] = document.getElementById('email').value;
  formData['gender'] = document.getElementById('gender').value;
  formData['address'] = document.getElementById('address').value;
  return formData;
}

//Insert the data form table

function insertNewRecord(data) {
  var table = document
    .getElementById('storelist')
    .getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.gender;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.address;
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onclick='onEdit(this)' > Edit </button><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onclick='onDelete(this)'> Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
  document.getElementById('email').value = selectedRow.cells[2].innerHTML;
  document.getElementById('gender').value = selectedRow.cells[3].innerHTML;
  document.getElementById('address').value = selectedRow.cells[4].innerHTML;
}
function updatRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.gender;
  selectedRow.cells[4].innerHTML = formData.address;
}

// deleted data

function onDelete(td) {
  if (confirm('do you want to delete the recored....?')) {
    row = td.parentElement.parentElement;
    document.getElementById('storelist').deleteRow(row.rowIndex);
  }
  resetForm();
}
</script>
<style scoped></style> -->

<template>
  <main class="flex justify-center w-full h-screen">
    <div>
      <form
        @submit="login"
        class="bg-gray-100 border-black rounded-lg border-2 px-12"
      >
        <table>
          <h2 class="text-teal-900 text-xl font-bold pt-6">Information Form</h2>
          <hr />
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="firstname"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              id="firstname"
              v-model="user.firstname"
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
              id="lastname"
              v-model="user.lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                v-model="user.email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                id="gender"
                type="radio"
                v-model="user.gender"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="gender"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Male</label
              >
              <input
                id="gender"
                type="radio"
                v-model="user.gender"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="gender"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Female</label
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
              v-model="user.address"
              type="text"
              placeholder="Address"
            />
          </div>
          <div id="hide">
            <button
              class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3"
              type="submit"
              @click="login"
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
          <th class="px-4 border-black rounded-lg border-2">First Name</th>
          <th class="px-4 border-black rounded-lg border-2">Last Name</th>
          <th class="px-4 border-black rounded-lg border-2">Email</th>
          <th class="px-4 border-black rounded-lg border-2">Gender</th>
          <th class="px-4 border-black rounded-lg border-2">Address</th>
          <th class="px-4 border-black rounded-lg border-2">Action</th>
        </tr>
        <tr v-for="(item, index) in users" v-bind:index="index" :key="item">
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.firstname }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.lastname }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.email }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.gender1 }}
            {{ item.gender2 }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.address }}
          </td>
          <td class="px-4 border-black rounded-lg border-2">
            {{ item.Action }}
            <button
              class="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              @click="userDelete(index)"
            >
              Delete
            </button>
            <button
              class="mx-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              @click="editIndex(index)"
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      indexEdit: -1,
      users: [],
      errors: [],
      user: {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        address: '',
      },
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      if (this.isEdit == true) {
        this.users[this.indexEdit] = this.user;
        this.isEdit = false;
        this.indexEdit = -1;
      } else {
        this.users.push(this.user);
      }
      this.user = {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        address: '',
      };
    },
    // onclick() {
    //   var gender = document.querySelector('input[name = gender]:checked').value;
    //   result.innerHTML = 'You Gender: ' + gender;
    // },
    onReset(event) {
      event.preventDefault();
      this.form.email = '';
      this.form.name = '';
      this.form.address = '';
      this.form.number = '';
    },
    userDelete(index) {
      if (confirm('Are you sure to delete this record ?')) {
        this.users.splice(index, 1);
      }
    },
    editIndex(index) {
      this.user.firstname = this.users[index].firstname;
      this.user.lastname = this.users[index].lastname;
      this.user.email = this.users[index].email;
      this.user.gender = this.users[index].gender;
      this.user.address = this.users[index].address;

      this.isEdit = true;
      this.indexEdit = index;
    },
  },
};
</script>
