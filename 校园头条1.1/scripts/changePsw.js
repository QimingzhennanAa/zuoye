/*
* @Author: Administrator
* @Date:   2018-08-09 20:31:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-09 20:38:23
*/

        var windowInfor;
        window.onload = function () {
            windowInfor = document.getElementById('alertWindow');
            windowInfor.style.display = 'none';
        };


        function sumbitValue() {

            var initPwd = document.getElementById('initpwd').value;
            var newPwd = document.getElementById('newpwd').value;
            var confirmpwd = document.getElementById('confirmpwd').value;

            if(initPwd == '' || newPwd == '' || confirmpwd == ''){
//                alert('密码不能为空!');
                windowInfor.innerHTML = '密码不能为空!';
                windowInfor.style.display = 'block';
            }else{
                if(newPwd != confirmpwd){
                    windowInfor.innerHTML = '密码不一致!';
                    windowInfor.style.display = 'block';
                }else{
                    windowInfor.style.display = 'none';

                    $.ajax({
                        type: "post",
                        url: 'http://XXXX.com/',
                        data: {'initPwd' : initPwd, 'newPwd':newPwd, 'confirmpwd' : confirmpwd  },
                        dataType: 'json',
                        success: function (data) {


                        }
                    });


                }
            }


        }