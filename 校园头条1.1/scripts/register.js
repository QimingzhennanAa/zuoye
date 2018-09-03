/*
* @Author: Administrator
* @Date:   2018-08-31 15:49:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-31 16:45:37
*/
let app2=new Vue({
    el:'#register',
   data: {
        errorMessage: "",
        hasError: false,
        userName: "",
        password: "",
        confirmpsw:"",
    },
    method:{
        register:function(){
            app2.hasError=false;
            $.ajax({
                url:'',
                type:'post',
                data:{
                    'user':app2.userName,
                    'password':app2.password,
                    'confirmpsw':app2.confirmpsw

                }
                success:function(res){
                    if (res.success) {

                    }
                    else{
                        app2.hasError=true;
                        app2.errorMessage=res.message;
                    }
                }
            })
            },
        }
})