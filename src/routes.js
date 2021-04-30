// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import MaterialsContainer from './main-views/Materials/MaterialsContainer'
import MenuContainer from './main-views/MenuContainer'
import NewsContainer from './main-views/News/NewsContainer'
import StartContainer from './main-views/StartContainer'
import Teacher from './main-views/Teachers/Teacher'
import TeachersContainer from './main-views/Teachers/TeachersContainer'

const routes = [
    {
        path: '/start',
        name: 'Старт',
        rtlName: '',
        icon: Schedule,
        component: StartContainer,
        layout: '/admin'
    },
    {
        path: '/menu',
        name: 'Меню',
        rtlName: '',
        icon: Schedule,
        component: MenuContainer,
        layout: '/admin'
    },
    {
        path: '/teachers',
        name: 'Преподаватели',
        rtlName: '',
        icon: Schedule,
        component: TeachersContainer,
        layout: '/admin'
    },
    {
        path: '/news',
        name: 'Новости',
        rtlName: '',
        icon: Schedule,
        component: NewsContainer,
        layout: '/admin'
    },
    {
        path: '/materials',
        name: 'Материалы',
        rtlName: '',
        icon: Schedule,
        component: MaterialsContainer,
        layout: '/admin'
    },
    {
        path: '/teacher',
        name: 'Teacher',
        rtlName: '',
        icon: Schedule,
        component: Teacher,
        layout: '/admin'
    }
]

export default routes
