<template>
<table class="table table-stripped table-border">
    <thead>
      <tr>
        <th>#</th>
        <th>Drug</th>
        <th>Milligram</th>
        <th>Box</th>
        <th>Total</th>
        <th>Drugstore Name</th>
        <th>Drugstore Address</th>
        <th>Drugstore PS.code</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in requestItems" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <select
            name="drugCode"
            @change="onDrugChange($event)"
            class="form-control"
          >
            <option selected>--Drug--</option>
            <option
              v-for="item in drugs"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </td>
        <td>
          <input
            type="number"
            v-model="item.milligram"
            class="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            v-model="item.box"
            class="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            v-model="item.total"
            class="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            class="form-control"
            v-model="item.drugStoreName"
            :readonly="patients.isElga"
          />
        </td>
        <td>
          <input
            type="text"
            class="form-control"
            v-model="item.drugStoreAddress"
            :readonly="patients.isElga"
          />
        </td>
        <td>
          <input
            type="text"
            class="form-control"
            v-model="item.drugStorePostalCode"
            :readonly="patients.isElga"
          />
        </td>
        <td>
          <button
            type="button"
            @click="deleteRequestItemRow(index)"
            class="btn btn-sm btn-danger"
          >
            -
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  data() {
    return {
      patients: {
        id: 0,
        fullName: "",
        telephone: "",
        email: "",
        birthDate: "",
        isElga: true,
      },
      drugs: {
        id: 0,
        name: "",
      },
      requestItems: [
        {
          drugCode: 0,
          milligram: 0,
          box: 0,
          total: 0,
          drugStoreName: "",
          drugStoreAddress: "",
          drugStorePostalCode: "",
        },
      ],
    };
  },

  methods: {
    onDrugChange(event) {
      this.requestItems.drugCode = event.target.value;
      console.log(this.requestItems.drugCode);
    },
    async insertRequest() {
      if (this.checkValidation()) {
        let result = await axios
          .post("https://localhost:44313/api/request", {
            patientDetails: this.patients,
            patientRequests: this.requestItems,
          })

        if (result.status == 201) {
          this.$router.push("/");
          Swal.fire(
            "Your request has been sent, the reply will be soon sent to your email."
          );
        }
      }
    },
    async getDrugs() {
      let result = await axios.get("https://localhost:44313/api/drug");
      this.drugs = result.data;
    },
</script>
