import { Route, Switch } from 'react-router-dom'
import App from '../App'
import Login from './../Components/Auth/Login'
const routes = () => (

    <Switch>
        <Route path="/" exact component={App} />

        {/* //Login */}
        <Route path="/login" exact component={Login} />







        <Route path='' render={() => (<div>No Page</div>)} />
    </Switch>


);

export default routes;