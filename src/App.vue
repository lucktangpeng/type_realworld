<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script lang="ts">
import CommonHeader from "@/views/header.vue";
import CommonFooter from "@/views/footer.vue";
import Vue from "vue";
export default Vue.extend({
  name: "homeHeader",
  components: {
    CommonHeader,
    CommonFooter
  }
});
</script>

<style>
</style>
