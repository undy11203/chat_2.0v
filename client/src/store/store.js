import { makeAutoObservable } from "mobx"
import AuthService from "../service/AuthService"

export default class Store {
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }
    setAuth(bool) {
        this.isAuth = bool
    }
    setUser(user) {
        this.user = user
    }
    setLoading(bool) {
        this.isLoading = bool
    }

    async auth(username) {
        const response = await AuthService.auth(username)
        console.log(response)
        if(response.data.status == 200){
            this.setUser(response.data.username)
            this.setAuth(true)
            localStorage.setItem('username', this.user)
            console.log(localStorage.getItem('isAuth'))
        }
    }
    async checkAuth() {
        if(localStorage.getItem('username')){
            const response = await AuthService.checkAuth(localStorage.getItem('username'))
            console.log(response)
            if(response.data.status == 200){
                this.setAuth(true)
                this.setUser(localStorage.getItem('username'))
            }else{
                localStorage.removeItem('username')
            }
            
        }
    }
    async logout(username){
        await AuthService.logout(username)
        this.setAuth(false)
        localStorage.removeItem('username')
    }
}