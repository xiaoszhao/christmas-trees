// document.addEventListener('DOMContentLoaded', (event) => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const inputValue = urlParams.get('value');
   
// //传入值inputValue，这里inputvalue作为一个要说话的对象
//     if (inputValue) {
//         document.getElementById('displayValue').textContent = inputValue+'终于等到你了';
//     }
// });

//一个个打印
// document.addEventListener('DOMContentLoaded', function() {
//     // 注意：这里使用了HTML的换行标签<br>
//     const urlParams = new URLSearchParams(window.location.search);
//     const inputValue = urlParams.get('value');
//     const textToType = inputValue+"您好啊\n"+"雪花轻舞，圣诞钟声悠扬，愿这温馨时刻，为你编织一曲梦幻般的冬日赞歌\n\n愿圣诞的烛光照亮你的心房\n\n带给你无尽的喜悦与温暖\n\n祝你圣诞快乐，永远幸福\n\n新的一年里\n\n暴富暴美\n\n一切美好如愿\n\n祝你越来越开心\n\n越来越顺心\n\n每一件事都如约而至\n\n事事愿\n\n事事顺\n\n人生如开挂";
//     const typedTextElement = document.getElementById('typed-text');
//     let textIndex = 0;
//     let textLength = textToType.replace(/<br>/g, '').length; // 计算不包括<br>标签的文本长度
//     let typingSpeed = 100; // 打字速度，以毫秒为单位
//     let isNewLine = false; // 标记是否遇到了换行符

//     function typeText() {
//         if (textIndex < textLength) {
//             const currentChar = textToType.charAt(textIndex);
//             if (currentChar === '<') {
//                 // 遇到了<br>标签的开始，直接添加整个标签
//                 if (textToType.substr(textIndex, 4) === '<br>') {
//                     typedTextElement.innerHTML += '<br>';
//                     textIndex += 4; // 跳过<br>标签
//                     isNewLine = true; // 标记为换行
//                     // 可以选择在这里添加一个短暂的延迟来模拟换行时的停顿
//                     setTimeout(() => { isNewLine = false; }, typingSpeed / 2);
//                 } else {
//                     // 如果不是<br>，则按普通字符处理（这里假设不会有其他HTML标签）
//                     typedTextElement.innerHTML += currentChar;
//                     textIndex++;
//                 }
//             } else {
//                 // 普通字符，直接添加
//                 typedTextElement.innerHTML += currentChar;
//                 textIndex++;
//                 isNewLine = false; // 重置换行标记
//             }

//             // 如果不是换行后紧接着的字符，则继续打字
//             if (!isNewLine) {
//                 setTimeout(typeText, typingSpeed);
//             } else {
//                 // 如果需要，可以在这里添加一个短暂的延迟后再继续打字
//                 // 但由于我们已经在上面通过跳过<br>标签来实现了停顿效果，这里就不需要了
//                 // 不过，如果你想要更明显的停顿，可以取消注释下面的代码并调整时间
//                 // setTimeout(() => {
//                 //     setTimeout(typeText, typingSpeed); // 在换行后继续打字
//                 // }, typingSpeed * 1.5); // 例如，增加1.5倍的打字速度作为停顿时间
//             }
//         }
//     }

//     typeText();
// });


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const inputValue = urlParams.get('value');
    const textToType = inputValue+"您好啊\n\n"+"雪花轻舞，圣诞钟声悠扬，愿这温馨时刻，为你编织一曲梦幻般的冬日赞歌\n\n愿圣诞的烛光照亮你的心房\n\n带给你无尽的喜悦与温暖\n\n祝你圣诞快乐\n\n永远幸福\n\n新的一年里\n\n暴富暴美\n\n一切美好如愿\n\n祝你越来越开心\n\n越来越顺心\n\n每一件事都如约而至\n\n也许你会有烦恼\n\n但是我相信对你来说那都不是问题\n\n一切都会过去\n\n点击下面\n\n送给你一个圣诞树\n";
    const typedTextElement = document.getElementById('typed-text');
    let textIndex = 0;
    let typingSpeed = 100; // 打字速度，以毫秒为单位
 
    function typeText() {
        if (textIndex < textToType.length) {
            typedTextElement.textContent += textToType.charAt(textIndex);
            textIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }
 
    typeText();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // 设置一个x秒的延迟
    setTimeout(() => {
        // 延迟结束后，显示按钮
        const buttonElement = document.getElementById('mybutton');
        buttonElement.style.display = 'block';
    }, 22500); // 1000毫秒 = 1秒
});

//button
function redirectToPage() {
    window.location.href = 'tree.html'; // 替换为你想跳转的页面URL
    }
  


