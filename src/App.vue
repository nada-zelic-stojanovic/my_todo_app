<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "app",

  created() {
    if (!localStorage.token || window.location.pathname !== "/register") {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style>
</style>