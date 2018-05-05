import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/tabbar/home'
import Cart from '@/components/tabbar/cart'
import Member from '@/components/tabbar/member'
import Search from '@/components/tabbar/search'

import GoodsList from '@/components/goods/list'
import GoodDetail from '@/components/goods/detail'
import GoodsComment from '@/components/goods/comment'
import GoodsDes from '@/components/goods/des'


import NewsList from '@/components/news/list'
import NewsDetail from '@/components/news/detail'

import PicList from '@/components/pictures/list'
import PicDetail from '@/components/pictures/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    //商品
    {
      path: "/goods",
      component: GoodsList
    },
    {
      path: "/goods/detail/:id",
      component: GoodDetail
    },
    {
      path: "/goods/comment/:id",
      component: GoodsComment
    },
    {
      path: "/goods/des/:id",
      component: GoodsDes
    },

    //新闻
    {
      path: "/news",
      component: NewsList
    },
    {
      path: "/news/detail/:id",
      component: NewsDetail
    },
    //图片
    {
      path: "/pics/:id",
      component: PicList
    },
    {
      path: "/pics/detail/:id",
      component: PicDetail
    },
  ]
})
