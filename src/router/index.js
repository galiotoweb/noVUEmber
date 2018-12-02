import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TodoApp from '@/components/TodoApp';
import VueRouterApp from '@/components/VueRouterApp';
import home from '@/components/vuerouter-components/home';
import blog from '@/components/vuerouter-components/blog';
import services from '@/components/vuerouter-components/services';
import contact from '@/components/vuerouter-components/contact';
import details from '@/components/vuerouter-components/details';

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
    {
      path: '/vue-router',
      name: 'VueRouterApp',
      component: VueRouterApp,
    },
    {
      path: '/vue-router',
      name: 'home',
      component: home,
    },
    {
      path: '/vue-router/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/vue-router/services',
      name: 'services',
      component: services,
    },
    {
      path: '/vue-router/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/vue-router/details/:Pid',
      name: 'details',
      component: details,
    },
  ],
});
