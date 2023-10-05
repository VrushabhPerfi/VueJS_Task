<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="userLogin">
        <label for="username" class="userLogin__label">Username * : </label>
        <input
          type="text"
          placeholder="Enter Username"
          required
          v-model="loginform.username"
          class="userLogin__text"
        />
      </div>
      <div class="userLogin">
        <label for="password" class="userLogin__label">Password * : </label>
        <input
          type="password"
          placeholder="Enter Password"
          required
          minlength="5"
          maxlength="10"
          v-model="loginform.password"
          class="userLogin__text"
        />
      </div>
      <div>
        <button class="loginButton">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComp",
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    submitForm() {
      let credentialData = JSON.parse(localStorage.getItem("credentials"));
      if (credentialData[0]?.username === this.loginform.username && credentialData[1]?.password === this.loginform.password) {
        this.$router.push("/blog");
      }
      else{
        alert('Invalid Username or Password');
      }
    },
  },
};
</script>

<style lang="scss">
@import "./LoginComp.scss";
</style>
