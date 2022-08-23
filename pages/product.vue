<template>
<div>
    <h1 class="font-bold text-center text-2xl mt-10 text-green-400">
        Product Management
    </h1>
    <div class="grid grid-cols-2">
        <div class="border-black border-2 m-8 p-8">
            <form @submit="onFormSubmit()" class="bg-green-100 border-green-400 rounded-lg border-2 px-12">
                <table>
                    <h2 class="text-teal-900 text-xl font-bold pt-6">“Add Product”</h2>
                    <hr />
                    <label class="pt-10 py-10" for="ProductName">Product Name:</label><br />
                    <input type="text" ref="productName" id="ProductName" name="ProductName" placeholder="" /><br /><br />
                    <label for="Price">Price:</label><br />
                    <input type="number" ref="price" id="Price" name="Price" placeholder="" /><br /><br />
                    <label for="state">Stock:</label>
                    <select class="p-1" name="Stock" id="Stock" ref="stock">
                        <option value="Available" selected>Available</option>
                        <option value="Out of Stock ">Out of Stock</option>
                    </select><br /><br />
                    <label for="state">Size:</label>
                    <select class="p-1" name="Size" id="Size" ref="size">
                        <option value="XS">XS</option>
                        <option value="S ">S</option>
                        <option value="M" selected>M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select><br /><br />
                    <label for="Image">Upload Image</label><br /><br />
                    <input type="file"  id="Image" name="Image" /><br /><br />
                    <div class="mt-10">
                        <button class="
                  py-1
                  px-5
                  mr-5
                  bg-black
                  hover:bg-blue-400
                  text-white
                  font-bold
                  text-center
                  rounded-md
                  mb-3
                " type="submit" @click="onFormSubmit()">
                            Add Product
                        </button>
                        <button class="
                  py-1
                  px-5
                  bg-black
                  hover:bg-blue-400
                  text-white
                  font-bold
                  text-center
                  rounded-md
                  mb-3
                " type="reset">
                            Reset
                        </button>
                    </div>
                </table>
            </form>
        </div>
        <div class="border-black border-2 m-8 p-8">
            <table class="list">
                <tr>
                    <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
                    <th class="px-4 border-green-400 rounded-lg border-4">ProductId</th>
                    <th class="px-4 border-green-400 rounded-lg border-4">
                        ProductName
                    </th>
                    <th class="px-4 border-green-400 rounded-lg border-4">Price</th>
                    <th class="px-4 border-green-400 rounded-lg border-4">Stock</th>
                    <th class="px-4 border-green-400 rounded-lg border-4">Size</th>
                    <th class="px-4 border-green-400 rounded-lg border-4">Image</th>
                    <th class="px-4 border-green-400 rounded-lg border-4">Action</th>
                </tr>
                <tr v-for="(item) in state.allProduct" :key="item.id">
                    <!-- <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td> -->
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.id }}
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.productName }}
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.price }}
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.stock }}
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.size }}
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        <img src="{{item.image}}" alt="" srcset="" />
                    </td>
                    <td class="px-4 border-green-400 rounded-lg border-4">
                        {{ item.Action }}
                        <button class="
                  mx-3
                  rounded-lg
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  w-20
                " @click="onDeleteOfProduct(item.id)">
                            Delete
                        </button>
                        <button class="
                  mx-3
                  rounded-lg
                  bg-green-600
                  hover:bg-green-600
                  text-white
                  w-20
                " @click="onClickOfEditProduct(item.id)">
                            Edit
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script setup>
const id = ref("");
const productName = ref("");
const price = ref("");
const stock = ref("");
const size = ref("");
const image = ref("");


let state = reactive({
  allProduct: []
});

getProductAPI();
// function getBooks() {
//   getBookAPI().then((data: any) => {
//     state.allProduct = data;
//   });
//  }
// GET API
async function getProductAPI() {
  state.allProduct = await $fetch('http://localhost:3003/product/allData');
  console.log(state)
}


async function onFormSubmit() {
   console.log("Hey POST")
  const sampleData = {
    id: id.value,
    productName: email.value,
    price: price.value,
    stock: stock.value,
    size: size.value,
    image:image.value
  };
  const response = await $fetch("http://localhost:3003/Product", {
    method: "POST",
    body: JSON.stringify(sampleData),
  });
  getProductAPI();

//    async function getspecificuser() {
//     console.log(id);
//     const response = await $fetch(
//       "http://localhost:3003/product/allData" + id.value
//     );
//     console.log(response)
//     state.allProduct = [response];
//   }
}

// async function onClickOfEditProduct(productId) {
//   const sampleData = {
//     "id": productId,
//     "productName": "Shaktiman" + productId,
//     "price": "ankita" + state.allProduct.length,
//     "stock": 200 + state.allProduct.length,
//     "size": "ghjgj" + state.allProduct.length,
//     "image": "91001" + state.allProduct.length
//   };
//   getProductAPI();
// }

async function onDeleteOfProduct(productId) {
  await $fetch('http://localhost:3003/Product/' + productId, {
    method: 'DELETE'
  });
  getProductAPI();
}
</script>






