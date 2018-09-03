let app = new Vue({
    el: '.row',
    data: {
        errorMessage: "错误原因",
        RerrorMessage: "错误原因",
        hasError: false,
        RhasError:false,
        userName: "",
        newUserName:"",
        password: "",
        newpsw:'',
        confirmpsw:"",
    },
    methods: {
        login: function(){

            app.hasError = false;
            
            // 模拟登录从后台获取登录结果
            // let randomUrl = 
            //     Math.round(Math.random()) === 1 ? 
            //     "https://cumtzzp.github.io/login-failure.json" : 
            //     "https://cumtzzp.github.io/login-success.json";
            /*
                由于涉及到密码，此处实际上应该用 $.post()
                为了获取模拟的 .json 数据，使用了 $.get()，参数实际上是一样的
            */
            // 防止跨域请求出错
            qwest.setDefaultOptions({ cache: true });
            // ajax 请求
            $.ajax({
                url: '',
                type: 'post',
                dataType: 'json',
                data: {'user': app.userName,'pswd': app.password },
                success:function(res){
                    // 后台放回的success的属性值为true时候
                    if (res.success) {
                        document.location.href="home.html";
                    }
                    else{
                        app.hasError=true;
                        //登陆不成功时候返回的错误原因
                        app.errorMessage=res.message;
                    }
                }
            });        
        },
        register:function(){
            app.RhasError=false;
            $.ajax({
                url:'',
                type:'post',
                data:{
                    'user':app.newUserName,
                    'password':app.newpsw,
                    'confirmpsw':app.confirmpsw

                },
                success:function(res){
                    if (res.success) {

                    }
                    else{
                        app.RhasError=true;
                        app.RerrorMessage=res.message;
                    }
                }
            })
            },
    }
});
