document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myform');
    const inputField = document.getElementById('name');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // 阻止默认表单提交行为

        const inputValue = inputField.value;

        if (inputValue.trim() !== '') {
            // 保存输入值，例如通过URL参数传递
            const url = 'second.html?value=' + encodeURIComponent(inputValue);
            
            // 或者你可以选择其他方式保存值，例如 localStorage
            // localStorage.setItem('savedInputValue', inputValue);

            // 页面跳转
            window.location.href = url;
            alert(inputValue+'祝您开心快乐');
        } else {
            alert('输入框不能为空！');
        }
    });
});


var phoneWidth =  parseInt(window.screen.width);
var phoneScale = phoneWidth/640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}

