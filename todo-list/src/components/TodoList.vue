<template>
  <div class="text-center mt-5">
    <p class="h2 title">TO-DO LIST</p>
    <div class="add_task hstack gap-3 d-flex justify-content-center">
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="新增你的待辦事項">
      <button type="button" class="btn add btn-primary">+</button>
    </div>
      <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>