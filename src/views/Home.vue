<template>
  <div class="home">
    <ul>
      <li v-for="(character, id) in characters" :key="id">{{character}}</li>
    </ul>
    <ul>
      <li v-for="(ninja, id) in ninjas" :key="id">{{id +1}} - {{ninja.name}} - {{ninja.age}}</li>
    </ul>
  </div>
</template>

<script>
import greetings from "./Greetings";
export default {
  name: "home",
  data() {
    return {
      name: "jack",
      characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
      ninjas: [
        { name: "Ryu", age: 25 },
        { name: "Flipp", age: 35 },
        { name: "Ken", age: 55 }
      ]
    };
  },
  components: {
    greetings
  },
  methods: {
    logName() {}
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
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

    //  <h1>Dynamic CSS</h1>
    // <!-- <h2>Example</h2>
    // <div @click="available = !available" :class="{available}">
    //   <span>Ryu</span>
    // </div>-->
    /*
    <!--
    // <h2>Example 2</h2>
//     // <button @click="nearby = !nearby">Toggle nearby</button>
//     // <button @click="available = !available">Toggle available</button>
//     // <div :class="compClasses">
//     //   <span>Ryu</span>
//     // </div>

// // span {
// //   background: red;
// //   display: inline-block;
// //   padding: 10px;
// //   color: #fff;
// //   margin: 10px 0;
// // }

// // .available span {
// //   background: green;
// // }

// // .nearby span:after {
// //   content: "nearby";
// //   margin-left: 10px;
// // }*/-->

//  <div class="home">
//     <h1>Conditionals</h1>
//     <button @click="error= !error">Toggle Error</button>
//     <button @click="success= !success">Toggle Success</button>
//     <p v-if="error">There has been an error</p>
//     <p v-else-if="success">I'ts success</p>
//   </div>