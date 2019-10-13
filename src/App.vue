<template >
  <v-app>
    <header>
      <v-toolbar dark class="head__bar">
        <v-toolbar-title>
          <router-link to="/" class="head__link">Title</router-link>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text v-for="(link, id) in linkMenu" :key="id">
            <router-link class="head__link" :to="`${link.url}`">{{link.title}}</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </header>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      linkMenu: [
        { title: "Home", url: "/" },
        { title: "Login", url: "/login" },
        { title: "Registration", url: "/registration" }
      ]
    };
  }
};
</script >

<style lang="scss" scoped>
.v-application--wrap {
  min-height: none;
}
.head__link {
  text-decoration: none;
  color: black !important;
}
</style>
 