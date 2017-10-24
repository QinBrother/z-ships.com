/**
 * Created by Administrator on 2017/8/8.
 */
$(function(){
    $('#tijiao').click(function () {
        var name=$('#name').val();
        var phone=$('#phone').val();
        var work=$('#work').val();
        var email=$('#email').val();
        var words=$('#words').val();
        if(name==""||words==""){
            alert("请填写姓名和留言内容")
        }else{
            $.ajax({
                type:'post',
                asnc:'false',
                url:'http://192.168.1.105:8080/zhanjian-web/insertGuestbook.do',
                data:{
                    'username':name,'position':work,'phone':phone,'email':email,'guestbook':words
                },
                success:function (msg) {
                    console.log(msg)
                    if(msg=='true'){
                        window.location.href="success.html"
                    }
                }
            })
        }



    })


})
