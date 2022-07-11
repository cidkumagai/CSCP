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
    // document.location.href = `http://kumachen.html.xdomain.jp/CSCP/recipe.html?id=${e.path[0].id}`;
    document.location.href = `http://localhost/recipe.html?id=${e.path[0].id}`;
}