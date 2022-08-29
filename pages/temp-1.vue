<template>
  <head>
    <title>Learn Vue Tutorial Number 6</title>
  </head>

  <div id="games">
    <select v-model="mychoice" multiple>
      <option value="Football">Football</option>
      <option value="Cricket">Cricket</option>
      <option value="Tennis">Tennis</option>
    </select>
    <h1>To Select Multiple hold control key on Your Keyboard</h1>
    <h1>{{ mychoice }}</h1>
    <button @click="cleardata">Clear Data</button>
  </div>
</template>

<script>
// const VueComp = new Vue({
//   el: "#games",
//   data: {
//     mychoice: [],
//   },
export default {
  name: "xyz",
  data() {
    return {
      mychoice: [],
    };
  },
  methods: {
    cleardata() {
      console.log("Clear Data");
      this.mychoice = [];
    },
  },
};
</script>
