import LayoutMain from 'layouts/LayoutMain'
import Error404 from 'pages/Error404'
//acciones
import ORMS from 'pages/saludMental/orsm'

export default {
    path: "/saludMental",
    component: LayoutMain,
    exact: false,
    routes: [
        {
            path: "/saludMental/orsm",
            component: ORMS,
            exact: true
        },
        {
            component: Error404
        }
    ]
}