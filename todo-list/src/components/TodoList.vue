<template>
  <div class="mt-5 container-fluid">
    <p class="h2 title text-center">TO-DO LIST</p>
    <div class="add_task hstack gap-3 d-flex justify-content-center mb-3">
      <input v-model="newTodo" @keyup.enter="addTodo" type="text" class="form-control" placeholder="新增你的待辦事項">
      <button @click="addTodo" type="button" class="btn add btn-primary custom-button">+</button>
    </div>
    <div class="card border-light mx-auto">
      <div class="card-header mb-2">
        <ul class="nav card-header-item text-center d-flex justify-content-center">
          <li class="nav-item" @click="currentCard = 'all'">
            <a class="nav-link" :class="{ active: currentCard === 'all' }">全部</a>
          </li>
          <li class="nav-item" @click="currentCard = 'inProgress'">
            <a class="nav-link" :class="{ active: currentCard === 'inProgress' }">進行中</a>
          </li>
          <li class="nav-item" @click="currentCard = 'completed'">
            <a class="nav-link" :class="{ active: currentCard === 'completed' }">已完成</a>
          </li>
        </ul>
      </div>
      <div class="card-body d-flex justify-content-center">
        <div class="card-body-item d-flex flex-column">
          <div class="form-check mt-2 hstack" v-for="todo in filteredTodos" :key="todo.id" >
            <div class="left gap-3">
              <input class="form-check-input" type="checkbox" v-model="todo.done">
              <label class="form-check-label" :class="{ 'completed': todo.done }">
                {{ todo.text }}
              </label>
            </div>
            <span class="material-symbols-outlined ms-auto" @click="removeTodo(todo)">
                delete
            </span>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: '吃飯', done: false },
        // 添加更多待办事项对象
      ],
      newTodo: '',
      currentCard: 'all'
    };
  },
  computed: {
    filteredTodos() {
      if (this.currentCard === 'all') {
        return this.todos;
      } else if (this.currentCard === 'inProgress') {
        return this.todos.filter(todo => !todo.done);
      } else if (this.currentCard === 'completed') {
        return this.todos.filter(todo => todo.done);
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === '') return;
      this.todos.push({ id: this.todos.length + 1, text: this.newTodo, done: false });
      this.newTodo = '';
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  }
};
</script>