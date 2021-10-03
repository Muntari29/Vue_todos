<template>
  <div>
    <h2>TodoForm</h2>
    <form @submit.prevent="addTodo">
      <label for="input"></label>
      <input
        id="input"
        v-model="todoText"
        placeholder="Todo title" />
      <button>
        Add
      </button>
    </form>
    <TodoList
      :todo-list="todoList"
      @isCompleted="completedSwitch"
      @delete="deleteTodo" />
    <TodoCount 
      :todo-list="todoList" />
  </div>
</template>

<script>
import TodoList from '~/components/TodoList'
import TodoCount from '~/components/TodoCount'

export default {
  components: {
    TodoList,
    TodoCount
  },
  data(){
    return this.$store.state
  },
  methods: {
    addTodo(){
      this.$store.commit('addTodo')
    },
    completedSwitch(title){
      this.$store.commit('completedSwitch', title)
    },
    deleteTodo(title){
      this.$store.commit('deleteTodo', title)
    }
  }
}
</script>

<style lang="scss" scoped>
$color: orange;
h2 { 
  color: $color;
}
</style>