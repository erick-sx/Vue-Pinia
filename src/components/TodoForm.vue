<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" /><button>Adicionar</button>
    </form>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import {ref} from "vue"
import {useTodoListStore} from '../store/useTodoListStore'

export default defineComponent ({
    setup () {
        const todo = ref ("")
        const store = useTodoListStore()
        return {todo, addItemAndClear}

        function addItemAndClear(item){
            if (item.length === 0){
                return
            }
            store.addTodo(item)
            todo.value = ''
        }
    }
})
</script>

<style lang="scss" scoped>

</style>