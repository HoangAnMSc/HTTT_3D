const { render } = require('express/lib/response');
const database = require('../config/database.js');
class HomeController {
    index(req, res) {
        console.log("dang index");
        res.render('home');
    }
    store(req, res) {
        console.log("dang store");

          database.getdataHoDuongTinh(res);
    }
    dataphongtoa(req, res) {
        console.log("dang dataphong");
        database.getdataPhongToa(res);
    }
    phongtoa(req, res){
       
        res.render('phongtoa');
    }
    check_khoang_cach(req, res){
       console.log("check_khoang_cach");
   
        res.render('khoangcach');     
    }
    check_khoang_cach_data(req, res){
        console.log("dang kc");
    
        database.tinhKC(res,req.body.x_new, req.body.y_new);
     
    }

}
module.exports = new HomeController;