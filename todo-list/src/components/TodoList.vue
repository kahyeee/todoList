<template>
  <div class="text-center mt-5">
    <p class="h2 title">TO-DO LIST</p>
    <div class="add_task hstack gap-3 d-flex justify-content-center mb-3">
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="新增你的待辦事項">
      <button type="button" class="btn add btn-primary">+</button>
    </div>
    <div class="card text-center border-light">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">全部</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">進行中</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">已完成</a>
          </li>
        </ul>
      </div>
    </div>
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