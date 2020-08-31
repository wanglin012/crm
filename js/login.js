$(function(){
    //登陆功能
    $(".submit").click(async function(e){
        let account = $(".userName").val().trim();
        let password = $(".userPass").val().trim();

        if(account === "" || password === ""){
            aleart("账号和密码不能为空");
            return;
        }
        //可以通过正则自己校验你的用户名和密码的规则   test
        password = md5(password);
        // console.log(account,password);
        //发出ajax请求
        // axios.post("/user/login",{
        //     account,
        //     password
        // }).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })

        try{
            let res = await axios.post("/user/login",{account,password});
            
        }catch(e){
            console.log(res);
        }

        let res = await axios.post("/user/login",{account,password});

        if(parseInt(res.code) === 0 ){
            alear("登录成功")
            window.localtion.href = "index.html"
            return;
        }
        alert("用户名或密码出错了")
    });
})