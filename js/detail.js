window.addEventListener('load', function () {
    // 放大镜模块
    let preview_img = document.querySelector('.preview_img');
    let mask = document.querySelector('.mask');
    let big = document.querySelector('.big');
    // 1. 当鼠标经过preview_img 就显示和隐藏mask遮挡层和big大盒子
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    // 2. 鼠标移动的时候 让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // （1） 先计算出鼠标在盒子内的坐标
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // （2） 盒子高度300的一半是150
        // （3） mask移动的距离
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2
        // （4） 如果x小于0 就让x等于0
        let maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离=遮挡层的移动距离*大图片最大移动距离/遮挡层的最大移动距离 
        let bigImg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        let bigMax = bigImg.offsetWidth - big.offsetWidth;
        // console.log(bigImg.offsetWidth); 图片的宽度800
        // console.log(big.offsetWidth); 盒子的宽度500
        // console.log(bigMax);
        // 大图片的移动距离 X Y
        let bigX = maskX * bigMax / maskMax;
        let bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    });
    // 下拉菜单模块
    let listButton = this.document.querySelector('#all-list')
    let listButton_hide = this.document.querySelector('#all-list-hide')

    let flag = false
    listButton.addEventListener('click', function () {
        if (!flag) {
            listButton_hide.style.display = "block"
            flag = true
        } else {
            listButton_hide.style.display = "none"
            flag = false
        }
    })
    // tab栏切换模块
    $('.detail_tab_list li').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        let index = $(this).index();
        console.log(index);
        $('.detail_tab_con .item').eq(index).show().siblings().hide();
    })






});