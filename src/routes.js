import PhotoHome from "./components/photoPanel/PhotoHome"
import PhotoRegister from "./components/photo-register/PhotoRegister"
import LoginUser from "./components/login/LoginUser"

export const routes = [
    {
        path:'/', 
        name:'PhotoHome',
        component: PhotoHome
    },
    {
        path:'/cadastro', 
        name:'Cadastro',
        component: PhotoRegister
    },
    {
        path:'/login', 
        name:'Login',
        component: LoginUser
    }
]