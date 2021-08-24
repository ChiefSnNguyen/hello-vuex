import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

const storeData = {
  state: {
    todos: [],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.completed),
    progress: (state, getters) => {
      return Math.round((getters.doneTodos.length / state.todos.length) * 100);
    },
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    MARK_COMPLETE(state, todoID) {
      state.todos.map((todo) => {
        if (todo.id === todoID) todo.completed = !todo.completed;
        return todo;
      });
    },
    DELETE_TODO(state, todoID) {
      state.todos = state.todos.filter((todo) => todo.id !== todoID);
    },
    ADD_TODO(state, newTodo){
      state.todos.unshift(newTodo)
    },
    SET_TODOS(state, todos){
      state.todos = todos
    }
  },
  actions: {
    async deleteTodo({ commit }, todoID) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
        commit("DELETE_TODO", todoID);
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo({ commit }, newTodo) {
      try {
        await axios.post(`https://jsonplaceholder.typicode.com/todos/`, newTodo);
        commit("ADD_TODO", newTodo);
      } catch (error) {
        console.log(error)
      }
    },
    async fecthTodos({commit}){
      try {
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
       commit('SET_TODOS', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
};

const store = new Vuex.Store(storeData);

export default store;
