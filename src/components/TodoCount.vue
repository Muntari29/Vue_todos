<template>
  <div>
    <p>TodoCount</p>
    <span>{{ completedCount }} / {{ todoList.length }}</span>
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
    computed: {
        completedCount(){
            return this.$store.getters.completedCount
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    color: red;
}
</style>