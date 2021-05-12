// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import MaterialContainer from './main-views/Materials/MaterialContainer'
import MaterialsContainer from './main-views/Materials/MaterialsContainer'
import MenuContainer from './main-views/MenuContainer'
import NewContainer from './main-views/News/NewContainer'
import NewsContainer from './main-views/News/NewsContainer'
import StartContainer from './main-views/StartContainer'
import TeachersContainer from './main-views/Teachers/TeachersContainer'
import LoginPage from './views/Pages/LoginPage'
import RegisterPage from './views/Pages/RegisterPage'
import TeacherContainer from './views/Pages/TeacherContainer'

const routes = [
    {
        path: '/start',
        name: 'Старт',
        icon: Schedule,
        component: StartContainer,
        layout: '/ibstu'
    },
    {
        path: '/menu',
        name: 'Меню',
        icon: Schedule,
        component: MenuContainer,
        layout: '/ibstu'
    },
    {
        path: '/teachers',
        name: 'Преподаватели',
        icon: Schedule,
        component: TeachersContainer,
        layout: '/ibstu'
    },
    {
        path: '/teacher/:userId?',
        name: 'Преподаватель',
        icon: Schedule,
        component: TeacherContainer,
        layout: '/ibstu'
    },
    {
        path: '/news',
        name: 'Новости',
        icon: Schedule,
        component: NewsContainer,
        layout: '/ibstu'
    },
    {
        path: '/new/:newsId?',
        name: 'Новость',
        icon: Schedule,
        component: NewContainer,
        layout: '/ibstu'
    },
    {
        path: '/materials',
        name: 'Материалы',
        icon: Schedule,
        component: MaterialsContainer,
        layout: '/ibstu'
    },
    {
        path: '/material/:materialId?',
        name: 'Материал',
        icon: Schedule,
        component: MaterialContainer,
        layout: '/ibstu'
    },
    {
        path: '/login-page',
        name: 'Страница авторизации',
        icon: Schedule,
        component: LoginPage,
        layout: '/auth'
    },
    {
        path: '/register-page',
        name: 'Страница регистрации',
        icon: Schedule,
        component: RegisterPage,
        layout: '/auth'
    }
]

export default routes
