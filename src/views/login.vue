<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </h1>
            <p class="text-xs-center">
              <router-link v-if="isLogin" :to="{ name: 'register' }"
                >Have an account?</router-link
              >
              <router-link v-else :to="{ name: 'register' }"
                >Need an account?</router-link
              >
            </p>

            <ul class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form @submit.prevent="noSubmit">
              <fieldset class="form-group" v-if="!isLogin">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="fromData.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="fromData.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Pasinsword"
                  v-model="fromData.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ isLogin ? "Sign in" : "Sign up" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Login } from "@/api/user";
import { mapMutations } from "vuex";
import Cookie from "js-cookie";
import Vue from "vue";
export default Vue.extend({
  name: "loginIndex",
  data() {
    return {
      fromData: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    async noSubmit() {
      const loginRes = await Login({ user: this.fromData });
      const { user } = loginRes.data;
      Cookie.set("user", user);
      this.setUser(user);
    },
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
});
</script>

<style lang="scss" scoped></style>
