import Vue from 'vue'
import VueRouter from 'vue-router'
import TopNav from '@components/topNav'
import DefaultC from '@views/default.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
        name: 'index'
    },
    components: {
        nav: TopNav,
        default: DefaultC
    },
    children: [{
            path: 'index',
            name: 'index',
            component: () =>
                import ('@views/home'),
            meta: {
                title: '简创'
            }
        },
        {
            path: 'service',
            name: 'service',
            component: () =>
                import ('@views/service'),
            meta: {
                title: '简创-服务'
            }
        },
        {
            path: 'case',
            name: 'case',
            component: () =>
                import ('@views/case'),
            meta: {
                title: '简创-案例'
            }
        },
        {
            path: 'detail',
            name: 'detail',
            component: () =>
                import ('@views/detail'),
            meta: {
                title: '简创-详情'
            }
        },
        {
            path: 'news',
            name: 'news',
            component: () =>
                import ('@views/news'),
            meta: {
                title: '简创-新闻'
            }
        },
        {
            path: 'cantact',
            name: 'cantact',
            component: () =>
                import ('@views/cantact'),
            meta: {
                title: '简创-联系我们'
            }
        }
    ]
}, ]

const router = new VueRouter({
    mode: 'hash',
    routes
})

const defaultTitle = '简创公关'
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : defaultTitle
    next()
})
export default router