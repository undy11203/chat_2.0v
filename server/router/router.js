const { Router } = require("express")
const UserController = require("../controllers/UserController")

const router = new Router

router.post('/auth', UserController.auth)
router.post('/checkAuth', UserController.checkAuth)
router.post('/logout', UserController.logout)


module.exports = router