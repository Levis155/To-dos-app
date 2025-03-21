import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

function todosStore(set) {
    return{
        todos: [],

        addTodo: function(newTodo) {
            set((previousState) => {return {todos: [newTodo,...previousState.todos]}})
        },

        markAsComplete: function (todoId) {
            set((previousState) => {
                const updatedTodos = previousState.todos.map((todo) => {
                    if(todo.id === todoId) {
                        todo.complete = true;
                        return todo;
                    }

                    return todo;
                })

                return {todos:updatedTodos}
        })
        },

        markAsIncomplete: function(todoId) {
            set((previousState) => {
                const updatedTodos = previousState.todos.map((todo) => {
                    if(todo.id === todoId){
                        todo.complete = false;
                        return todo;
                    }

                    return todo;
                })

                return {todos:updatedTodos}
            })
        },

        deleteTodo: function(todoId) {
            set((previousState) => {
                const remainingTodos = previousState.todos.filter((todo) => {
                    return todo.id !== todoId;
                })
                
                return {todos: remainingTodos};
            })
        }, 
        
        clearCompleteTodos: function() {
            set((previousState) => {
                const incompleteTodos = previousState.todos.filter((todo) => {
                    return !todo.complete;
                })
                return {todos: incompleteTodos}
            })
        }
}}


const useTodosStore = create(devtools(persist(todosStore, {name:"todos-store"})));
export default useTodosStore;