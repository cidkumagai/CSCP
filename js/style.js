//a要素のNodelistを取得
const anchorLinks = document.getElementsByClassName('test');
//取得されたa要素の数
const anchorLinksNum = anchorLinks.length;
//すべてのa要素にイベントリスナーを登録
for(let i = 0; i < anchorLinksNum; i++){
    anchorLinks[i].addEventListener('click', ag2send);
}

window.addEventListener('load', init);

function init() {
    const recipeTag = document.getElementsByClassName('test');
    console.log(recipeTag);
    for(let i = 0; i < recipeTag.length; i++) {
        recipeTag[i].addEventListener('click', pageTransition);
    }
}

function pageTransition(e) {
    console.log(e.path[0].id);
    document.location.href = `http://localhost/recipe.html?id=${e.path[0].id}`;
}