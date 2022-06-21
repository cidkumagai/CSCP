//送信したい任意のパラメーターをオブジェクトに格納
const ag2sendParams = {
    'テスト':'テストだよ１',
    'キー名_02':'値_02',
    'キー名_03':'値_03'
};
  
//リンククリック時に実行する関数を作成
// const ag2send = function(e){
//     console.log(e);
// };
  
// //a要素のNodelistを取得
// const anchorLinks = document.getElementsByClassName('test');
// //取得されたa要素の数
// const anchorLinksNum = anchorLinks.length;
// //すべてのa要素にイベントリスナーを登録
// for(let i = 0; i < anchorLinksNum; i++){
//     anchorLinks[i].addEventListener('click', ag2send);
// }

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
    document.location.href = `http://localhost/test.php?id=${e.path[0].id}`;
}