// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import StartContainer from './main-views/StartContainer'

const routes = [
    {
        path: '/start',
        name: 'Старт',
        rtlName: '',
        icon: Schedule,
        component: StartContainer,
        layout: '/admin'
    }
]

export default routes
