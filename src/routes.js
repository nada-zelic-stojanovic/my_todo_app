import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

export default [
    {name:'login', path: '/login', component: Login},
    {name:'register', path: '/register', component: Register},
    {name: 'home', path: '/', component: Home}
]