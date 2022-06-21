// 検索ボックスの矢印のクリック処理
$(function(){
    $('.search_recipe_allow').click(function() {
        if ($('.search_recipe_allow').hasClass('dawn')) {
            $('.search_recipe_allow').addClass('up');
            $('.search_recipe_allow').removeClass('dawn');
            $('.search_recipe_menu').removeClass('hyde');
        } else {
            $('.search_recipe_allow').addClass('dawn');
            $('.search_recipe_menu').addClass('hyde');
            $('.search_recipe_allow').removeClass('up');
        }
    });
});

// スライドショー
$(function(){
    const imgList = $('.recipes_slide').find('img');
    const imgListLength = imgList.length;

    let now = 0;
    let next = 1;

    const fade = 2000;
    const show = 5000;

    imgList.hide();
    imgList.eq(0).show();

    const slideShow = () => {
        imgList.eq(now % imgListLength).fadeOut(fade);
        imgList.eq(next % imgListLength).fadeIn(fade);

        now++;
        next++;
    };

    setInterval(slideShow, show);
});