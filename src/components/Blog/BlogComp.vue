<template>
  <div>
    <h2>Blog Data</h2>
    <ul class="bloglist">
      <li v-for="item in data" :key="item.id">
        <router-link :to="'/blogpost/' + item.title">
          {{ item.title }}
        </router-link>
        <router-view></router-view>
      </li>
    </ul>
    <div class="logout">
      <button class="logout__button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComp",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => {
        this.data = this.data = response.slice(0, 10);
      });
  },
  methods: {
    logout() {
      localStorage.removeItem("credentials");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
@import "./BlogComp.scss";
</style>
