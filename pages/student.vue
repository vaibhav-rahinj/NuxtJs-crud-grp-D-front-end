

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
