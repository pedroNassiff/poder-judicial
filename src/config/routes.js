//Layout
import LayoutMain from 'layouts/LayoutMain'

//Pages
import Home from 'pages/Home'
import Contact from 'pages/Contact'

//Other
import Error404 from 'pages/Error404'

//login
import Login from 'componentes/auth/Login'
import NuevaCuenta from 'componentes/auth/NuevaCuenta'
//routes.algo.js
import Acciones from 'config/acciones.routes'
import Biblioteca from 'config/biblioteca.routes'
import Institucional from 'config/institucional.routes'
import Mienbros from 'config/mienbros.routes'
import saludMental from 'config/saludMental.routes'

const routes = [
    Acciones,
    Biblioteca,
    Institucional,
    Mienbros,
    saludMental,
    {
        path: "/",
        component: LayoutMain,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/login",
                component: Login,
                exact: true
            },
            {
                path: "/nueva-cuenta",
                component: NuevaCuenta,
                exact: true
            },
            {
                component: Error404
            }
        ]

    },
]

export default routes