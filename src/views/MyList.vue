<template>
  <div class="container">
    <h1>PWA Youtube demo</h1>
    <input v-model="itemName" type="text" /><br />
    <button @click="addItem()">Add Item</button>

    <ul>
      <li
        v-for="item of items"
        :class="{ bought: item.bought }"
        :key="item._id"
      >
        {{ item.name }} | {{item.age}} | {{item.datetime}}
        <router-link :to="{name: 'contact',params:{id:item._id,name:item.name,age:item.age}}">View</router-link>
        ------<button @click="removeItem(item._id)">Delete</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.container {
  background-color: #24e02dd2;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
}
li {
  font-size: 1.5rem;
  list-style: none;
}
button {
  margin-top: 5px;
  background-color: #3498db;
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
input {
  margin-top: 5px;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.bought {
  text-decoration: line-through;
}
</style>
