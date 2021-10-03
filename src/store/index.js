import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            title: 'Vue Todos App~~',
            todoText:'',
            todoList:[]
        }
    },
    getters:{
        completedCount(state){
            return state.todoList.filter(todo => todo.completed === true).length
        }
    },
    mutations:{
        addTodo(state){
            if(state.todoText){
                state.todoList.push({
                    title: state.todoText,
                    completed: false
                })
                state.todoText=''
            }
        },
        completedSwitch(state, title){
            const todoIdx = state.todoList.findIndex(todo => todo.title === title)
            state.todoList[todoIdx].completed = !state.todoList[todoIdx].completed
        },
        deleteTodo(state, title){
            state.todoList = state.todoList.filter(todo => todo.title !== title)
        }
    }
})