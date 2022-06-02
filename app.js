function descriptionTag(){
    const contentforDesc = document.querySelector('p').innerText
    const description = document.createElement('meta');
    const head = document.querySelector('head');
    description.setAttribute('name','description');
    description.setAttribute('content', contentforDesc );
    head.insertBefore(description, head.firstChild);
}

descriptionTag();

// Classic function
function paginationAuto(){
    let title = document.querySelector('title');
    let titleText = document.querySelector('title').innerText;
    let params = new URLSearchParams(window.location.search);
    let numberParams = params.get('page');
    title.innerText = titleText + ' - ' + numberParams;
}

paginationAuto();


/// With-Out function//
    let title = document.querySelector('title');
    let titleText = document.querySelector('title').innerText;
    let params = new URLSearchParams(window.location.search);
    let numberParams = params.get('page');
    title.innerText = titleText + ' - ' + numberParams;

