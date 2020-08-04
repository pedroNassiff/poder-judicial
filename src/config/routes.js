//Layout
import LayoutMain from 'layouts/LayoutMain'

//Pages
import Home from 'pages/Home'
import Contact from 'pages/Contact'

//Other
import Error404 from 'pages/Error404'

//login
import Login from 'componentes/auth/Login'


const routes = [
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
                component: Error404
            }
        ]

    }
]

export default routes