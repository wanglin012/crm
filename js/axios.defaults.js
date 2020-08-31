axios.defaults.baseURL = "http://localhost:8888";  //配置请求的基本路径
//数据以表单的形式扔给服务器
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

//还是以表单的形式扔给服务器
axios.defaults.transformRequest = function(data){
    if(!data) return data;  //不给读物去传递数据
    let result = '';
    for(let attr in data){
        if(!data.hasOwnProperty(attr)) break;
        result +=`&${attr}=${data[attr]}`;
    }
    return result.substring(1);
}