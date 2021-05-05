import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/index',
    components: {
      nav: () => import('@components/nav/index.vue'),
      default: () => import('@components/default/index.vue')
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@views/home/index.vue'),
        meta: {
          title: '简创公关'
        }
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@views/service/index.vue'),
        meta: {
          title: '简创-服务'
        }
      },
      {
        path: 'case',
        name: 'case',
        component: () => import('@views/case/index.vue'),
        meta: {
          title: '简创-案例'
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@views/news/index.vue'),
        meta: {
          title: '简创-新闻'
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@views/contact/index.vue'),
        meta: {
          title: '简创-联系'
        }
      },
      {
        path: 'case_detail',
        name: 'case_detail',
        component: () => import('@views/detail/index.vue'),
        meta: {
          title: '简创-案例-详情'
        }
      },
      {
        path: 'news_detail',
        name: 'news_detail',
        component: () => import('@views/detail/index.vue'),
        meta: {
          title: '简创-新闻-详情'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const defaultTitle = '简创公关'
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : defaultTitle
    next()
})
export default router