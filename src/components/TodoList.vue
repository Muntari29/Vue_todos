<template>
  <div>
    <p>
      TodoList
    </p>
    <ul>
      <li
        v-for="todo in todoList"
        :key="todo.title">
        <span @click="$emit('isCompleted', todo.title)">{{ todo.title }}</span>
        <button @click.stop="$emit('delete', todo.title)">
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            default: function(){
                return []
            }
        }
    },
    emits: ['isCompleted', 'delete'],
}
</script>

<style lang="scss" scoped>
p {
    color: blue;
}
</style>