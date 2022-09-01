window.addEventListener('load', function () {
    // 页面跳转模块
    var lis = document.querySelector('#list').querySelectorAll('li')
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            window.location.href = "./detail.html"
        })
    }
})