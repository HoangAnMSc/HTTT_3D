class UserController {

    login(req, res) {
        res.render('user/login');
    }
}
module.exports = new UserController;