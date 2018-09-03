/*
* @Author: Administrator
* @Date:   2018-08-31 17:14:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-31 17:14:52
*/
var app=new Vue({
	el: '.form-signin',
    data: {
        errorMessage: "错误原因",
        hasError: false,
        userName: "",
        password: "",
        confirmpsw:""
    },
    methods:{
    	submit:function(){
    		hasError=false;
    		$.ajax({
    			url: '/path/to/file',
    			type: 'post',
    			dataType: 'json',
    			data: {"userName": app.userName,"password":app.password,"confirmpsw":app.confirmpsw},
    			success:function(res){
    				if (res.success) {
    					document.location="login.html"
    				}
    				else{
    					app.hasError=true;
    					app.errorMessage=res.message;
    				}
    			}
    		})
    		
    	}
    }
    	
    });