import React from 'react'
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
        layout: '/ibstu'
    },
    {
        path: '/menu',
        name: 'iBSTU UI',
        component: MenuContainer,
        layout: '/ibstu'
    },
    {
        path: '/teachers',
        name: 'iBSTU UI',
        component: TeachersContainer,
        layout: '/ibstu'
    },
    {
        path: '/teacher/:userId?',
        name: 'iBSTU UI',
        component: TeacherContainer,
        layout: '/ibstu'
    },
    {
        path: '/news',
        name: 'iBSTU UI',
        component: NewsContainer,
        layout: '/ibstu'
    },
    {
        path: '/new/:newsId?',
        name: 'iBSTU UI',
        component: NewContainer,
        layout: '/ibstu'
    },
    {
        path: '/materials',
        name: 'iBSTU UI',
        component: MaterialsContainer,
        layout: '/ibstu'
    },
    {
        path: '/material/:materialId?',
        name: 'iBSTU UI',
        component: MaterialContainer,
        layout: '/ibstu'
    },
    {
        path: '/start-user',
        name: 'iBSTU UI',
        component: (state, props) => <StartUser {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/materials-table',
        name: 'iBSTU UI',
        component: (state, props) => <MaterialsTable {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/teachers-table',
        name: 'iBSTU UI',
        component: (state, props) => <TeachersTable {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/news-table',
        name: 'iBSTU UI',
        component: (state, props) => <NewsTable {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/create-material',
        name: 'iBSTU UI',
        component: (state, props) => <CreateMaterial {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/register-page',
        name: 'iBSTU UI',
        component: (state, props) => <RegisterPage {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/create-news',
        name: 'iBSTU UI',
        component: (state, props) => <CreateNews {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/edit-material/:materialId?',
        name: 'iBSTU UI',
        component: (state, props) => <EditMaterial {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/edit-teacher/:userId?',
        name: 'iBSTU UI',
        component: (state, props) => <EditTeacher {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/edit-news/:newsId?',
        name: 'iBSTU UI',
        component: (state, props) => <EditNews {...state} {...props} />,
        layout: '/auth-ibstu'
    },
    {
        path: '/edit-profile/:userId?',
        name: 'iBSTU UI',
        component: (state, props) => <EditProfile {...state} {...props} />,
        layout: '/auth-ibstu'
    }
]

export default routes
