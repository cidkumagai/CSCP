window.addEventListener('load', init);

function init(){
    let id = getParam('id');
    let title, cookImg, processes, materials;

    $.ajax({
        url: 'http://kumachen.html.xdomain.jp/CSCP/js/recipes.json',
        type: 'GET',
        contentType: 'application/json',
        success: function(data) { 
            title = data[id]['title'];
            cookImg = data[id]['cookImg'];
            processes = data[id]['processes'];
            materials = data[id]['materials'];
            createElement(cookImg, title, processes, materials);
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

function getParam(parm, url = window.location.href) {
    parm = parm.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp(`[?&]${parm}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
    if(!results){
        return null;
    }
    if(!results[2]){
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function createElement(cookImg, title, processes, materials) {
    // 料理完成写真部分作成
    let cookImgElement = document.createElement('img');
    cookImgElement.src = cookImg;
    cookImgElement.alt = '料理完成写真';

    let introduction = document.getElementById('introduction');
    introduction.insertBefore(cookImgElement, introduction.firstChild);

    // タイトル部分作成
    let titleElement = document.createElement('h1');
    titleElement.className = 'recipe_introduction_summary_title';
    titleElement.innerHTML = title;

    let summary = document.getElementById('summary');
    summary.appendChild(titleElement);
    
    // 材料部分作成
    for(const material in materials) {
        let materialElemnt = document.createElement('div');
        materialElemnt.className = 'recipe_introduction_summary_materials';

        let nameElemnt = document.createElement('p');
        nameElemnt.className = 'recipe_introduction_summary_materials_text';
        nameElemnt.innerHTML = materials[material][0];

        let amountElemnt = document.createElement('p');
        amountElemnt.className = 'recipe_introduction_summary_materials_text';
        amountElemnt.innerHTML = materials[material][1];

        summary.appendChild(materialElemnt);
        materialElemnt.appendChild(nameElemnt);
        materialElemnt.appendChild(amountElemnt);
    }

    // 料理手順部分の作成
    let detail = document.getElementById('detail');
    for(let key in processes) {
        let processElement = document.createElement('li');
        processElement.innerHTML = `${key[0]}<br>`;

        let processImgElement = document.createElement('img');
        processImgElement.src = processes[key][0];
        processImgElement.alt = 'レシピ手順写真';
        processElement.appendChild(processImgElement);

        processElement.innerHTML += `<br>${processes[key][1]}`;
        detail.appendChild(processElement);
    }

}