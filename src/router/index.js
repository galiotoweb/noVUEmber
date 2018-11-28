import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TodoApp from '@/components/TodoApp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/todo-app',
      name: 'TodoApp',
      component: TodoApp,
    },
  ],
});
