import Auth from "../pages/Auth";
import Chat from "../pages/Chat";


export const publicRoutes = [
    {path: '/auth', component: Auth, exact: true}
]
export const privateRoutes = [
    {path: '/chat', component: Chat, exact: true}
]

export let groupRoutes = [
    {name:"Home"},
    {name:"Game"}
]