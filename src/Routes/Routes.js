import { Route, Switch } from 'react-router-dom'
import App from '../App'

//Login
import Login from './../Components/Auth/Login'

//Pages
import Home from '../Components/Home/Home'
const routes = () => (

    <Switch>
        <Route path="/" exact component={App} />

        {/* //Login */}
        <Route path="/login" exact component={Login} />

        {/* Pages */}
        {/*Home */}
        <Route path='/home' exact component={Home} />




        <Route path='' render={() => (<div>No Page</div>)} />
    </Switch>


);

export default routes;