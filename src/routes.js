// @material-ui/icons
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
import CreateNews from './views/Tables/CreateNews'
import EditMaterial from './views/Tables/EditMaterial'
import EditNews from './views/Tables/EditNews'
import EditProfile from './views/Tables/EditProfile'
import EditTeacher from './views/Tables/EditTeacher'
import MaterialsTable from './views/Tables/MaterialsTable'
import NewsTable from './views/Tables/NewsTable'
import TeachersTable from './views/Tables/TeachersTable'

const routes = [
    {
        path: '/start',
        name: 'iBSTU UI',
        component: StartContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/menu',
        name: 'iBSTU UI',
        component: MenuContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/teachers',
        name: 'iBSTU UI',
        component: TeachersContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/teacher/:userId?',
        name: 'iBSTU UI',
        component: TeacherContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/news',
        name: 'iBSTU UI',
        component: NewsContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/new/:newsId?',
        name: 'iBSTU UI',
        component: NewContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/materials',
        name: 'iBSTU UI',
        component: MaterialsContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/material/:materialId?',
        name: 'iBSTU UI',
        component: MaterialContainer,
        layout: '/ibstu',
        needAuth: false
    },
    {
        path: '/start-user',
        name: 'iBSTU UI',
        component: StartUser,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/materials-table',
        name: 'iBSTU UI',
        component: MaterialsTable,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/teachers-table',
        name: 'iBSTU UI',
        component: TeachersTable,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/news-table',
        name: 'iBSTU UI',
        component: NewsTable,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/create-material',
        name: 'iBSTU UI',
        component: CreateMaterial,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/register-page',
        name: 'iBSTU UI',
        component: RegisterPage,
        layout: '/auth',
        needAuth: true
    },
    {
        path: '/create-news',
        name: 'iBSTU UI',
        component: CreateNews,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/edit-material/:materialId?',
        name: 'iBSTU UI',
        component: EditMaterial,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/edit-teacher/:userId?',
        name: 'iBSTU UI',
        component: EditTeacher,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/edit-news/:newsId?',
        name: 'iBSTU UI',
        component: EditNews,
        layout: '/ibstu',
        needAuth: true
    },
    {
        path: '/edit-profile/:userId?',
        name: 'iBSTU UI',
        component: EditProfile,
        layout: '/ibstu',
        needAuth: true
    }
]

export default routes
