import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/general.css'
import NavBar from './components/Navbar/Navbar'

interface componentInterface {
    path: string
    component: any
    title: string
}

const RenderRoute = (route: componentInterface) => {
    const [t] = useTranslation('global')
    document.title = `${t(route.title)} - LIBREGOL` || 'LIBREGOL'
    return (
        <>
            <Route exact path={route.path} component={route.component as any} />
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading</p>}>
                <NavBar />
                <Switch>
                    {routes.map((route, index) => (
                        <RenderRoute {...route} key={index} />
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
