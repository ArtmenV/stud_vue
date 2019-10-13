<template >
  <v-app>
    <header>
      <v-toolbar dark class="indigo">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" class="head__link white--text">Title</router-link>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text v-for="(link, id) in linkMenu" :key="id">
            <router-link class="head__link white--text" :to="`${link.url}`">{{link.title}}</router-link>
          </v-btn>
        </v-toolbar-items>
        <v-navigation-drawer app class="indigo" v-model="drawer">
          <p>test</p>
        </v-navigation-drawer>
      </v-toolbar>
    </header>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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
 