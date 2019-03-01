import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Blog from '@/components/pages/Blog'
import Contact from '@/components/pages/Contact'
import SinglePost from '@/components/pages/SinglePost'

Vue.use(Router)

export default new Router({
  
  mode : 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'SinglePost',
      component: SinglePost 
    }
  ]
})
