<template>
  <div>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <main>
      <TodoForm />
    </main>
  </div>
</template>

<script>
import TodoForm from '~/components/TodoForm'

export default {
  components: {
    TodoForm,
  },
  data() {
    return this.$store.state
  },
}
</script>


