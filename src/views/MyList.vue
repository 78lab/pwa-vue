<template>
  <div class="container">
    <h1 class="text-3xl font-bold underline">PWA Youtube demo 12</h1>
    <input v-model="itemName" type="text" /><br />
    <button class="btn btn-primary" @click="addItem()">Add Item</button>

    <ul>
      <li
        v-for="item of items"
        :class="{ bought: item.bought }"
        :key="item._id"
      >
        {{ item.name }} | {{item.age}} | {{item.datetime}}
        <router-link :to="{name: 'contact',params:{id:item._id,name:item.name,age:item.age}}">View</router-link>
        ------<button class="btn w-32 rounded-full" @click="removeItem(item._id)">Delete</button>
        </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'MyList',
  props: {
    msg: String
  },
  data() {
    return {
    //   apiHost:'http://localhost:8081',

      apiHost:'https://pwapi.jennyhoney.com/api',
      items: [],
      itemName: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(`${this.apiHost}/getAll`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async boughtItem(id) {
      await axios.patch(`${this.apiHost}/update/${id}`, {
        bought: true,
      });
      this.items = this.items.map((item) => {
        if (item._id === id) {
          item.bought = true;
        }
        return item;
      });
    },
    //on double clicking the item, it will call removeItem(id) method
    removeItem(id) {
      axios.delete(`${this.apiHost}/delete/${id}`);
      this.items = this.items.filter((item) => item._id !== id);
    },
    //method for adding items in the list
    async addItem() {
      const res = await axios.post(`${this.apiHost}/post`, {
        name: this.itemName,
        age: 1
      });
      this.items = [...this.items, res.data];
      this.itemName = "";
    },
  },

}
</script>

