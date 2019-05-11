import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import NewItem from './views/NewItem.vue'
import ItemDetail from './views/ItemDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new-item',
      name: 'newitem',
      component: NewItem
    },
    {
      path: '/item-detail/:id',
      name: 'itemdetail',
      component: ItemDetail
    }
  ]
})
