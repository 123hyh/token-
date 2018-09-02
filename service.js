import axios from 'axios';
import qs from 'qs';

export default class service {
    constructor(user){
        this.user = 'http://127.0.0.1:3000/user';
    }
    $_Post_http(p){
        return new Promise((resolve,reject) => {
            axios({
                baseURL:p.base,
                url:p.url,
                method:'POST',
                data:p.data,
                headers:{
                    'token':'qqssqqs'
                }
            }).then( res => {
                resolve(res);
            }).catch( err =>{
                reject(err);
            })
        })
    }
    //登录
    oaLogin(url,datas){
        let data = qs.stringify(datas) //post 参数转url类型
        let params = {base:this.user,url,data}
        return this.$_Post_http(params);
    }
}