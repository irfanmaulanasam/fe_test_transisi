<template>
  <div class="w-full max-w-xs my-10">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">email</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="{'border-red-500':!email && notCompleted}"
          id="email"
          type="text"
          placeholder="your mail"
          v-model="email"
        />
        <p
          v-if="!email && notCompleted"
          class="text-red-500 text-xs italic"
        >Please choose your email.</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{'border-red-500':!password && notCompleted}"
          id="password"
          type="password"
          v-model="password"
          placeholder="******************"
        />
        <p
          v-if="!password && notCompleted"
          class="text-red-500 text-xs italic"
        >Please fill your password.</p>
      </div>
      <div v-if="!error" class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="sendLogin"
          type="button"
        >
          <span v-if="!requesting">Sign In</span>
          <span v-else>Waiting...</span>
        </button>
        <!-- <a
          class="inline-block align-baseline font-medium text-sm text-blue-300 hover:text-blue-800"
          href="#"
        >Forgot Password?</a> -->
      </div>
      <div v-else class="flex flex-col items-center justify-center">
        <p
          class="text-xs mx-2 my-1 text-gray-800 font-medium italic"
          v-if="approvedSignUp"
        >User not Found, Wanna Sign Up?</p>
        <p class="text-sm mx-2 my-1 text-red-500 font-medium" v-if="membership">
          Sorry You cant register as a member today
          <br />
          <span class="text-gray-800">please contacting our admin</span>
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="sendRegister"
          type="button"
        >
          <span v-if="!requesting">Sign Up</span>
          <span v-else>Waiting...</span>
        </button>
      </div>
        <div class="w-auto mt-6" v-if="!error">
          new to this app?
          <span 
            class="inline-block align-baseline font-medium text-sm text-blue-300 hover:text-blue-800"
            @click="gotoSignUp"
          >
            sign up
          </span>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      notCompleted: false,
      requesting: false,
      approvedSignUp:false,
      membership: false,
      res: null,
      error: null
    };
  },
  methods: {
    gotoSignUp(){
      this.approvedSignUp = false
      this.error = true
    },
    checkForm() {
      this.requesting = !this.requesting;
      if (!this.email || !this.password) {
        this.requesting = !this.requesting;
        this.notCompleted = !this.notCompleted;
        return false;
      } else {
        return true;
      }
    },
    saveEmail() {
      this.$store.state.userDetail.email = this.email;
      this.$store.state.userDetail.password = this.password;
    },
    sendLogin() {
      if (this.checkForm()) {
        axios
          .post("https:/reqres.in/api/login", {
            email: this.email,
            password: this.password
          })
          .then(({ data }) => {
            this.saveEmail();
            this.requesting = !this.requesting;
            this.$store.state.token = data.token;
          })
          .catch(error => {
            this.requesting = !this.requesting;
            this.approvedSignUp= !this.approvedSignUp
            this.error = error;
          });
      }
    },
    sendRegister() {
      if (this.checkForm()) {
        axios
          .post("https:/reqres.in/api/register", {
            email: this.email,
            password: this.password
          })
          .then(({ data }) => {
            this.saveEmail();
            this.requesting = !this.requesting;
            this.$store.state.token = data.token;
          })
          .catch(error => {
            this.requesting = !this.requesting;
            this.membership = !this.membership;
            this.error = error;
          });
      }
    }
  }
};
</script>

<style>
</style>