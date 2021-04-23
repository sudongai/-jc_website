import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../views/index.vue'
import TopNav from '@components/topNav'
import DefaDultC from '@views/default.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'index'
    },
    {
        path: '/',
        name: 'Home',
        components: {
            nav: TopNav,
            default: DefaDultC
        },
        meta: {
            title: '简创'
        },
        children: [{
                path: '/index',
                name: 'indexP',
                component: () =>
                    import ('../views/index.vue'),
                meta: {
                    title: '简创公关'
                }
            },
            {
                path: '/service',
                name: 'service',
                component: () =>
                    import ('../views/service.vue'),
                meta: {
                    title: '简创-服务'
                }
            },
            {
                path: '/case',
                name: 'case',
                component: () =>
                    import ('../views/case.vue'),
                meta: {
                    title: '简创-案例'
                }
            },
            {
                path: '/news',
                name: 'news',
                component: () =>
                    import ('../views/news.vue'),
                meta: {
                    title: '简创-新闻'
                }
            },
            {
                path: '/cantact',
                name: 'cantact',
                component: () =>
                    import ('../views/cantact.vue'),
                meta: {
                    title: '简创-联系我们'
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