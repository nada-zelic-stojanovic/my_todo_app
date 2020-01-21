import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

export default [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/', component: Home}
]