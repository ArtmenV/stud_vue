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
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="indigo">
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
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
      ],
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
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
 