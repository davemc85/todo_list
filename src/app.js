import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {job: "Wash Car", priority: "high"},
        {job: "Grocery Shop", priority: "low"},
        {job: "Clean Kitchen", priority: "low"},
        {job: "Put Bins Out", priority: "high"},
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          job: this.newTodo,
          priority: this.priority
        })
        this.newTodo = "";
      }

    }
  })
})
