<template >
  <div class="wrapper">
    <header>
      <div id="app">
        <v-app id="inspire">
          <div>
            <v-toolbar>
              <v-toolbar-title>
                <router-link to="/">Title</router-link>
              </v-toolbar-title>

              <div class="flex-grow-1"></div>

              <v-toolbar-items>
                <v-btn text v-for="link in linkMenu" :key="link.title">
                  <router-link :to="`${link.url}`">{{link.title}}</router-link>
                </v-btn>
              </v-toolbar-items>

              <template v-if="$vuetify.breakpoint.smAndUp">
                <v-btn icon>
                  <v-icon>mdi-export-variant</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
          </div>
        </v-app>
      </div>
    </header>
    <div class="content-wrapper"></div>
  </div>
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
  },

  components: {}
};
</script >

<style lang="scss">
</style>
 