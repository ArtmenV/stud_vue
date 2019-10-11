<template>
  <div class="home">
    <h1>Dynamic CSS</h1>
    <!-- <h2>Example</h2>
    <div @click="available = !available" :class="{available}">
      <span>Ryu</span>
    </div>-->
    <h2>Example 2</h2>
    <button @click="nearby = !nearby">Toggle nearby</button>
    <button @click="available = !available">Toggle available</button>
    <div :class="compClasses">
      <span>Ryu</span>
    </div>
  </div>
</template>

<script>
import greetings from "./Greetings";
export default {
  name: "home",
  data() {
    return {
      available: false,
      nearby: false
    };
  },
  components: {
    greetings
  },
  methods: {
    logName() {}
  },
  computed: {
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
};
</script>
<style lang="scss">
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0;
}

.available span {
  background: green;
}

.nearby span:after {
  content: "nearby";
  margin-left: 10px;
}
</style>

    // <h1>{{greet('sunny')}}</h1>
    // <h3>Name: {{name}}</h3>
    // <h3>Job: {{job}}</h3>
    // <a :href="website">The Net Ninja</a>
    // <input type="text" v-bind:value="job" />
    // <p v-html="websiteTag"></p>
    // <greetings></greetings>

    //  <h1>Events</h1>
    // <button @click="subtract(1)">Subtract a Year</button>
    // <button @click="add(1)">Add a Year</button>
    // <button @dblclick="subtract(10)">Subtract a Year</button>
    // <button @dblclick="add(10)">Add a Year</button>
    // <p>My age is {{age}}</p>

    //     greet(sun) {
    //   return "Good " + sun + " " + this.name;
    // },
    // subtract(dec) {
    //   return (this.age -= dec);
    // },
    // add(inc) {
    //   return (this.age += inc);
    // }


// двухсторонняя привязка данных
    //     <h1>Keyboard events</h1>
    // <label>Name</label>
    // <input type="text" v-model="name" />
    // <span>{{name}}</span>
    // <label>Age</label>
    // <input type="text" v-model="age" />
    // <span>{{age}}</span>
