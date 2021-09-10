import $api from "../http/http";


export default class AuthService {
    static async auth(username) {
        return $api.post('/auth', { username })
    }
    static async logout(username) {
        return $api.post('/logout', { username })
    }
    static async checkAuth(username) {
        return $api.post('/checkAuth', { username })
    }
}