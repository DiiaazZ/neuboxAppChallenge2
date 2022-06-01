// VITAS PRINCIPALES
const Home = () => import('./components/Home.vue');

// COMPONENTES DE CADA VISTA ==============
// Intranet Components
const LoginUser = () => import('./components/login/login.vue');
const RegisterUser = () => import('./components/login/register.vue');
const ResetPasswordUser = () => import('./components/login/resetPassword.vue');

const Comment = () => import('./components/comment/comment.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },{
        name: 'loginUser',
        path: '/intranet',
        component: LoginUser
    },{
        name: 'registerUser',
        path: '/intranet/register',
        component: RegisterUser
    },{
        name: 'resetPassUser',
        path: '/intranet/resetPass',
        component: ResetPasswordUser
    },{
        name: 'Comment',
        path: '/intranet/comment/:id,:name,:api',
        component: Comment
    }
];