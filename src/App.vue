<template>
  <router-view></router-view>
</template>
<script>
import { router } from "./main";
export default {
  name: "app",

  mounted() {
    if (!localStorage.token || window.location.pathname !== "/register") {
      router.push({ name: "login" });
    }
  }
};
</script>
<style>
</style>