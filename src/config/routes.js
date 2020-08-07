//Layout
import LayoutMain from 'layouts/LayoutMain'

//Pages
import Home from 'pages/Home'
import Contact from 'pages/Contact'

//pages from menus
//acciones
import AccionesJudiciales from 'pages/acciones/accionesJudiciales'
import Convenios from 'pages/acciones/convenios'
import DefensoriaItinerante from 'pages/acciones/defensoriaItinerante'
import Informes from 'pages/acciones/informes'
import Monitoreos from 'pages/acciones/monitoreos'
import ProyectoDeLey from 'pages/acciones/proyectoDeLey'
//biblioteca
import Legislaciones from 'pages/biblioteca/legislaciones'
import Leyes from 'pages/biblioteca/leyes'
import Reglamentos from 'pages/biblioteca/reglamentos'
import Resoluciones from 'pages/biblioteca/resoluciones'
//institucional

//miembros

//saludMental


//Other
import Error404 from 'pages/Error404'

//login
import Login from 'componentes/auth/Login'
import NuevaCuenta from 'componentes/auth/NuevaCuenta'


const routes = [
    {
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

    },
    {
        path: "/acciones",
        component: LayoutMain,
        exact: false,
        routes: [
            {
                path: "/acciones/accionesJudiciales",
                component: AccionesJudiciales,
                exact: true
            },
            {
                path: "/acciones/convenios",
                component: Convenios,
                exact: true
            },
            {
                path: "/acciones/defensoriaItinerante",
                component: DefensoriaItinerante,
                exact: true
            },
            {
                path: "/acciones/informes",
                component: Informes,
                exact: true
            },
            {
                path: "/acciones/monitoreos",
                component: Monitoreos,
                exact: true
            },
            {
                path: "/acciones/proyectoDeLey",
                component: ProyectoDeLey,
                exact: true
            },
            
            {
                component: Error404
            }
        ]
    },
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