<template>
  <div>
    <h2>BlogPost Component</h2>
    The Title you have clicked is : <b>{{ title }}</b>
    <div class="postButton">
      <button class="postButton__back" @click="$router.back()">Back</button>
      <button class="postButton__back logout" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("credentials");
      this.$router.push("/");
    },
  },
  created() {
    this.title = this.$route.params.title;
  },
};
</script>

<style lang="scss">
@import "./BlogPost.scss";
</style>
