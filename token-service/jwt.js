const fs = require('fs');
let path = require('path');
const jwts = require('jsonwebtoken');
class jwt{
    constructor(data){
        this.data = data;
    }
    // 生产token
    generateToken(){
        let data = this.data;
        let created = Math.floor(Date.now()/1000);
        let cert = fs.readFileSync(path.join(__dirname, './config/pri.pem'));
        let token = jwts.sign({
            data,
            exp:created + 60*3,  
        },cert,{algorithm: 'RS256'});
        return token;
    }
    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, '../pem/public_key.pem'));//公钥 可以自己生成
        let res;
        try {
            let result = jwts.verify(token, cert, {algorithms: ['RS256']}) || {};
            let {exp = 0} = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}
module.exports  = jwt