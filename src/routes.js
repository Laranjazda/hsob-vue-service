import PhotoHome from "./components/photoPanel/PhotoHome"
import PhotoRegister from "./components/photo-register/PhotoRegister"

export const routes = [
    {path:'', component: PhotoHome},
    {path:'/cadastro', component: PhotoRegister}
]