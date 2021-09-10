const usersSet = require("../Users")


class UserService{
    async auth(candidate){
        let is = true
        for(let user of usersSet){
            if(user.name == candidate.name){
                is = false
                break;
            }else{
                is = true
            }
        }
        if(is){
            usersSet.add(candidate)
            //console.log(usersSet)
            return true
        }else{
            return false
        }
    }
    checkAuth(candidate){
        let is = false
        for(let user of usersSet){
            if(user.name == candidate){
                is = true
                break;
            }else{
                is = false
            }
        }
        return is
    }
}

module.exports = new UserService()