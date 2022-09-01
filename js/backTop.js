//  点击页面可以返回到顶部
$(function () {
    $("#backTop").click(function () {
        // 页面动画滚动效果
        $("body,html").stop().animate({
            scrollTop: 0
        })
    })
    // 事件冒泡
    $("#backTop").mouseenter(function () {
        $("#backTop li").show()
    })
    $("#backTop").mouseleave(function () {
        $("#backTop li").hide()
    })
})
