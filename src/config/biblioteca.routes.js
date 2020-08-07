import LayoutMain from 'layouts/LayoutMain'
import Error404 from 'pages/Error404'

//biblioteca
import Legislaciones from 'pages/biblioteca/legislaciones'
import Leyes from 'pages/biblioteca/leyes'
import Reglamentos from 'pages/biblioteca/reglamentos'
import Resoluciones from 'pages/biblioteca/resoluciones'

export default {
    path: "/biblioteca",
    component: LayoutMain,
    exact: false,
    routes: [
        {
            path: "/biblioteca/legislaciones",
            component: Legislaciones,
            exact: true
        },
        {
            path: "/biblioteca/leyes",
            component: Leyes,
            exact: true
        },
        {
            path: "/biblioteca/reglamentos",
            component: Reglamentos,
            exact: true
        },
        {
            path: "/biblioteca/resoluciones",
            component: Resoluciones,
            exact: true
        },
        {
            component: Error404
        }
    ]

}