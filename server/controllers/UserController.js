const User = require("../User/User")
const usersSet = require("../Users")
const uuid = require('uuid')
const UserService = require("../service/UserService")

class UserController {
    async auth(req, res) {
        try {
            const { username } = req.body
            const user = new User(username, uuid.v4())
            const data = UserService.auth(user)
            if(data){
                return res.json({status:200, username: username})
            }else{
                return res.json({status: 404})
            }
            
        } catch (e) {
            console.log('Error in controller: ' + e)
        }
    }
    async logout(req, res) {
        try {
            const { username } = req.body
            for(let user of usersSet){
                if(user.name == username){
                    usersSet.delete(user)
                }
            }
            return res.json()
        } catch (e) {
            console.log('Error in controller: ' + e)
        }
    }
    async checkAuth(req, res) {
        try {
            const { username } = req.body
            const data = UserService.checkAuth(username)
            if(data){
                return res.json({status:200, username: username})
            }else{
                return res.json({status: 404})
            }
        } catch (e) {
            console.log('Error in controller: ' + e)
        }
    }
}


module.exports = new UserController()