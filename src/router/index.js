import Vue from 'vue';
import Router from 'vue-router';
import Shows from '@/components/Shows';
import Show from '@/components/Shows/Show';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shows',
      component: Shows,
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: Show,
      props: true,
    },
  ],
});
