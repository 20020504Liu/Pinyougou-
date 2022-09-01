$(function () {
    // 延时器
    var timer = null
    // 全局缓存对象
    var cacheObj = {}
    // 防抖
    function debounceSearch(keywords) {
        timer = setTimeout(function () {
            getSuggestList(keywords)
        }, 500)
    }
    $('#ipt').on('keyup', function () {
        // 清空timer
        clearTimeout(timer)
        var keywords = $(this).val().trim()
        if (keywords.length <= 0) {
            return $('#suggest-list').empty().hide()
        }

        if (cacheObj[keywords]) {
            return renderSuggestList(cacheObj[keywords])
        }

        // getSuggestList(keywords)
        debounceSearch(keywords)
    })


    function getSuggestList(keywords) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + keywords,
            dataType: 'jsonp',
            success: function (res) {
                // console.log(res);
                renderSuggestList(res)
            }
        })
    }

    function renderSuggestList(res) {
        if (res.result.length <= 0) {
            return $('#suggest-list').empty().hide()
        }
        var htmlStr = template('tpl-suggestList', res)
        $('#suggest-list').html(htmlStr).show()

        // 1. 获取到用户输入的内容，当做键
        var k = $('#ipt').val().trim()
        // 2. 需要将数据作为值，进行缓存
        cacheObj[k] = res
    }

})