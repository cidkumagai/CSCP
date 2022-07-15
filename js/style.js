window.addEventListener('load', init);

function init() {
    $.ajax({
        // url: 'http://kumachen.html.xdomain.jp/CSCP/js/recipes.json',
        url: 'js/recipes.json',
        type: 'GET',
        contentType: 'application/json',
        success: function(data) { 
            for(let i = 0; i < data.length; i++) {
                title = data[i]['title'];
                cookImg = data[i]['cookImg'];
                comment = data[i]['comment'];
                // console.log(`${title}${cookImg}${comment}`);
                createElement(cookImg, title, comment, i);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            console.log("XMLHttpRequest : " + XMLHttpRequest.status);
            console.log("textStatus     : " + textStatus);
            console.log("errorThrown    : " + errorThrown.message);
        },
        complete: function() { 
            console.log('ajax finish');
        }
    });
}

function pageTransition(e) {
    // location.href = `http://kumachen.html.xdomain.jp/CSCP/recipe.html?id=${e.path[0].id}`;
    location.href = `https://cidkumagai.github.io/CSCP/recipe.html?id=${e.path[0].id}`;
}

function createElement(cookImg, title, comment, id) {    

    let recipeListItem = document.createElement('div');
    recipeListItem.className = 'index_recipe_list_item';

    // 料理完成写真部分作成
    let cookImgElement = document.createElement('img');
    cookImgElement.src = cookImg;
    cookImgElement.alt = '料理完成写真';

    // タイトル部分作成
    let titleElement = document.createElement('h1');
    titleElement.className = 'index_recipe_list_item_title';
    titleElement.innerHTML = title;

    // コメント部分作成
    let commentElement = document.createElement('p');
    commentElement.className = 'index_recipe_list_item_comment';
    commentElement.innerHTML = comment;

    // ページ遷移部分作成
    let moreElement = document.createElement('div');
    moreElement.className = 'index_recipe_list_item_more';
    moreElement.id = +id
    moreElement.innerHTML = 'MORE';
    moreElement.addEventListener('click', pageTransition);

    recipeListItem.appendChild(cookImgElement);
    recipeListItem.appendChild(titleElement);
    recipeListItem.appendChild(commentElement);
    recipeListItem.appendChild(moreElement);

    let recipeList = document.getElementById('recipe_list');
    recipeList.appendChild(recipeListItem);
}

$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
    //   $('.index_flex_title').each(function () {
    //     const targetPosition = $(this).offset().top;
    //     if (scroll > targetPosition - windowHeight + 100) {
    //       $('.index_flex_title_text').addClass('write_verticle');
    //     }
    //   });
      $('.index_flex_pic').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass('fadein');
        }
      });
      $('.index_cscp_text').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass('fadein');
        }
      });
      $('.index_recipe_list_item').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass('fadein');
        }
      });
    });
});