<!-- <template>
   <UserManagement
    v-bind:dataarray="dataarray"
    v-on:add-user="addUserTodata"
  ></UserManagement> 
  <Usercopy v-bind:dataarray="dataarray"
    v-on:add-user="addUserTodata"></Usercopy>
</template>
<script setup lang="ts">
// import UserManagement from "/components/UserManagement.vue";
// import Usercopy from "/components/Usercopy.vue";

let dataarray:Array<Object>= [
        {
          id: "1",
          Name: "Priyanka",
          Email: "pg@gmail.com",
          Roles: "SDE-1",
          Gender: "Female",
          // Mobile: "9922498956",
          // Address: "Pollard Farms Baner1",
          State: "MH",
          Country: "India",
          // completed:false
        },

      ];
    function addUserTodata(myuser) {
      this.dataarray = [...this.dataarray, myuser];
    }
    function deleteUser(id) {
      this.dataarray = this.dataarray.filter((items) => items.id);
    }
</script> -->

<template>
  <Usercopy></Usercopy>
</template>
