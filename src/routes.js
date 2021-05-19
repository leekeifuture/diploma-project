// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import MaterialContainer from './main-views/Materials/MaterialContainer'
import MaterialsContainer from './main-views/Materials/MaterialsContainer'
import MenuContainer from './main-views/MenuContainer'
import NewContainer from './main-views/News/NewContainer'
import NewsContainer from './main-views/News/NewsContainer'
import StartContainer from './main-views/StartContainer'
import StartUser from './main-views/StartUser'
import TeachersContainer from './main-views/Teachers/TeachersContainer'
import RegisterPage from './views/Pages/RegisterPage'
import TeacherContainer from './views/Pages/TeacherContainer'
import CreateMaterial from './views/Tables/CreateMaterial'
import EditMaterial from './views/Tables/EditMaterial'
import EditProfile from './views/Tables/EditProfile'
import EditTeacher from './views/Tables/EditTeacher'
import ReactTables from './views/Tables/ReactTables'
import TeacherTables from './views/Tables/TeacherTables'

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
        path: '/register-page',
        name: 'Страница регистрации',
        icon: Schedule,
        component: RegisterPage,
        layout: '/auth'
    },
    {
        path: '/start-user',
        name: 'Страница пользователя',
        icon: Schedule,
        component: StartUser,
        layout: '/ibstu'
    },
    {
        path: '/table',
        name: 'Таблица',
        icon: Schedule,
        component: ReactTables,
        layout: '/ibstu'
    },
    {
        path: '/edit-teachers',
        name: 'Править преподавателей',
        icon: Schedule,
        component: TeacherTables,
        layout: '/ibstu'
    },
    {
        path: '/edit-material/:materialId?',
        name: 'Изменить материал',
        icon: Schedule,
        component: EditMaterial,
        layout: '/ibstu'
    },
    {
        path: '/edit-teacher/:userId?',
        name: 'Изменить материал',
        icon: Schedule,
        component: EditTeacher,
        layout: '/ibstu'
    },
    {
        path: '/new-mateial',
        name: 'Создать материал',
        icon: Schedule,
        component: CreateMaterial,
        layout: '/ibstu'
    },
    {
        path: '/edit-profile/:userId?',
        name: 'Править информацию',
        icon: Schedule,
        component: EditProfile,
        layout: '/ibstu'
    }
]

export default routes
