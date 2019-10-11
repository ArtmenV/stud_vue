<template>
  <div class="home">
    <p>Hello {{name}}</p>
    <p>my {{surName}}</p>
    <greetings></greetings>
  </div>
</template>

<script>
import greetings from "./Greetings";
export default {
  name: "home",
  data() {
    return {
      name: "Artem",
      surName: "Viliutich"
    };
  },
  components: {
    greetings
  },
  methods: {
    fullname() {
      this.name + this.surName;
    }
  }
};
</script>
