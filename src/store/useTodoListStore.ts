import { defineStore } from "pinia";

interface ToDoItem{
    item: String,
    id: Number,
    completed: boolean
}

export const useTodoListStore = defineStore('todoList',{
    state: () => ({
        todoList: [] as ToDoItem[],
        id: 0,
    }),
    actions:{
        addTodo(item: string){
            var idn = this.id++
            this.todoList.push({item, id: idn, completed: false})
        },
        deleteTodo(itemID:number){
            this.todoList = this.todoList.filter((object)=>{
                return object.id !== itemID;
            });
        },
        toggleCompleted(idToFind:number){
            const todo = this.todoList.find((obj)=> obj.id === idToFind)
            if (todo){
                todo.completed = !todo.completed
            }
        }
    },
})