<template>
  <div>
    <h2>Authentication Form</h2>
    <form @submit.prevent="submitForm">
      <div class="userRegistration">
        <label for="name" class="userRegistration__label">Full Name* : </label>
        <input
          placeholder="Enter Full Name"
          type="text"
          v-model="formValues.name"
          required
          class="userRegistration__text"
        />
      </div>
      <div class="userRegistration">
        <label for="mobile" class="userRegistration__label">Mobile No* : </label>
        <input
          placeholder="Enter Mobile No."
          type="tel"
          v-model="formValues.mobile"
          required
          minlength="10"
          maxlength="10"
          class="userRegistration__text"
        />
      </div>
      <div class="userRegistration">
        <label for="email" class="userRegistration__label">Email* : </label>
        <input
          placeholder="Enter Email"
          type="email"
          v-model="formValues.email"
          required
          class="userRegistration__text"
        />
      </div>
      <div class="userRegistration">
        <label for="username" class="userRegistration__label">Username* : </label>
        <input
          placeholder="Enter Username"
          type="text"
          v-model="formValues.username"
          required
          class="userRegistration__text"
        />
      </div>
      <div class="userRegistration">
        <label for="password" class="userRegistration__label">Password* : </label>
        <input
          placeholder="Enter Password"
          type="password"
          v-model="formValues.password"
          required
          minlength="5"
          maxlength="10"
          class="userRegistration__text"
          @input="handleInput"
        />
      </div>
      <div>
        <button class="registrationButton">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthenticationComp",
  data() {
    return {
      formValues: {
        name: "",
        mobile: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      localStorage.setItem(
        "credentials",
        JSON.stringify([
          { username: this.formValues.username },
          { password: this.formValues.password },
        ])
      );
      this.$router.push("/login");
    },
    handleInput(event) {
      event.target.value.length === 10 &&
        alert("You are not enter more than 10 charachter.");
    },
  },
};
</script>

<style lang="scss">
@import "./AuthenticationComp.scss";
</style>
