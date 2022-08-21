<template>
  <UserManagement
    v-bind:dataarray="dataarray"
    v-on:add-user="addUserTodata"
  ></UserManagement>
</template>
<script>
import UserManagement from "/components/UserManagement.vue";
export default {
  name: "User Form",
  components: { UserManagement },
  data() {
    return {
      dataarray: [
        {
          id: "1",
          Name: "Priyanka",
          Email: "pg@gmail.com",
          Role: "SDE-1",
          Gender: "Female",
          // Mobile: "9922498956",
          // Address: "Pollard Farms Baner1",
          State: "MH",
          Country: "India",
          // completed:false
        },
        {
          id: "2",
          Name: "Amita",
          Email: "ak@gmail.com",
          Role: "SDE-1",
          Gender: "Female",
          // Mobile: "9765568956",
          // Address: "Pollard Farms Baner2",
          State: "MH",
          Country: "India",
          // completed: false
        },
      ],
    };
  },
  methods: {
    addUserTodata(newUser) {
      this.dataarray = [...this.dataarray, newUser];
    },
    deleteUser(id) {
      this.dataarray = this.dataarray.filter((items) => items.id);
    },
  },
};
</script>
