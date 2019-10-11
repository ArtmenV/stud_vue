<template>
  <div class="home">
    <h1>Events</h1>
    <button @click="subtract(1)">Subtract a Year</button>
    <button @click="add(1)">Add a Year</button>
    <button @dblclick="subtract(10)">Subtract a Year</button>
    <button @dblclick="add(10)">Add a Year</button>
    <p>My age is {{age}}</p>
  </div>
</template>

<script>
import greetings from "./Greetings";
export default {
  name: "home",
  data() {
    return {
      age: 0
    };
  },
  components: {
    greetings
  },
  methods: {
    greet(sun) {
      return "Good " + sun + " " + this.name;
    },
    subtract(dec) {
      return (this.age -= dec);
    },
    add(inc) {
      return (this.age += inc);
    }
  }
};
</script>

    // <h1>{{greet('sunny')}}</h1>
    // <h3>Name: {{name}}</h3>
    // <h3>Job: {{job}}</h3>
    // <a :href="website">The Net Ninja</a>
    // <input type="text" v-bind:value="job" />
    // <p v-html="websiteTag"></p>
    // <greetings></greetings>
