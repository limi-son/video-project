import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mpfour from '@/components/Mpfour'
import PosterVideo from '@/components/PosterVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mpfour',
      name: 'Mpfour',
      component: Mpfour
    },
    {
      path: '/poster',
      name: 'PosterVideo',
      component: PosterVideo
    }
  ]
})
