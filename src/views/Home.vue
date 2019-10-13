<template>
  <div class="container-wrapper">
    <section>
      <h1>Home</h1>
    </section>
    <section>
      <div class="container">
        <div class="task-list">
          <div
            class="task-item"
            v-for="(task, id) in tasks"
            :key="id"
            :class="completed = !completed"
          >
            <v-card>
              <v-card-title>
                {{task.title}}
                <v-card-subtitle>
                  <v-card-text>
                    <v-card-actions></v-card-actions>
                  </v-card-text>
                </v-card-subtitle>
              </v-card-title>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Growth Busters",
          description: "I director",
          whatWatch: "Film",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Simpsons",
          description: "Randy Marsh",
          whatWatch: "MultFilm",
          completed: false,
          editing: false
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

   