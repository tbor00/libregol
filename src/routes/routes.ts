import Home from '../pages/Home'
import Live from '../pages/Live'

const routes = [
    {
        title: 'Live',
        path: '/live/:id',
        component: Live
    },
    {
        title: 'home.title',
        path: '/',
        component: Home
    }
]

export default routes
