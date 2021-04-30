// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import MenuContainer from './main-views/MenuContainer'
import StartContainer from './main-views/StartContainer'

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
    }
]

export default routes
