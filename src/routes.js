// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import MaterialsContainer from './main-views/Materials/MaterialsContainer'
import MenuContainer from './main-views/MenuContainer'
import NewsContainer from './main-views/News/NewsContainer'
import StartContainer from './main-views/StartContainer'
import TeachersContainer from './main-views/Teachers/TeachersContainer'
import UserProfile from './views/Pages/TeacherContainer'

const routes = [
    {
        path: '/start',
        name: 'Старт',
        rtlName: '',
        icon: Schedule,
        component: StartContainer,
        layout: '/ibstu'
    },
    {
        path: '/menu',
        name: 'Меню',
        rtlName: '',
        icon: Schedule,
        component: MenuContainer,
        layout: '/ibstu'
    },
    {
        path: '/teachers',
        name: 'Преподаватели',
        rtlName: '',
        icon: Schedule,
        component: TeachersContainer,
        layout: '/ibstu'
    },
    {
        path: '/news',
        name: 'Новости',
        rtlName: '',
        icon: Schedule,
        component: NewsContainer,
        layout: '/ibstu'
    },
    {
        path: '/materials',
        name: 'Материалы',
        rtlName: '',
        icon: Schedule,
        component: MaterialsContainer,
        layout: '/ibstu'
    },
    {
        path: '/teacher/:userId?',
        name: 'Teacher',
        rtlName: '',
        icon: Schedule,
        component: UserProfile,
        layout: '/ibstu'
    }
]

export default routes
