import Vue from 'vue'
import Router from 'vue-router'

//使用插件

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

/* const VuesRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
} */

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{show:true}
    },
    {
      path: '/search/:keyword?',
      component: Search,
      meta:{show:true},
      name:"search"
    },
    {
      path: '/login',
      component: Login,
      meta:{show:false}
    },
    {
      path: '/register',
      component: Register,
      meta:{show:false}
    },
    {
      path:'/',
      redirect:"/home"

    }
  ]
})
