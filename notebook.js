let texts = [];
let selectedLi;

document.addEventListener('click', (e) => {

    let changeMod = document.querySelector('#create').firstElementChild;
    let textarea = document.querySelector('#text').firstElementChild;
    let ul = document.querySelector('#notes');
    let save = document.querySelector('#text').lastElementChild;
    let message = document.querySelector('.message');

    if (e.target == save) {
        let mode = e.target.dataset.mode;

        //----------
        if (mode == 'create') {
            texts.push(textarea.value);
            
            let li = document.createElement('li');
            let span = document.createElement('span');
            let k;
            for(k = 0; k< texts.length; k++);
            span.innerHTML = '&#9746';
            li.setAttribute('data-key', k);
            li.innerHTML = 'запись ' + k;
            li.append(span);
            ul.append(li);
            textarea.value = '';
            
        }


        if (mode == 'update') {
            let index = selectedLi.dataset.key;
            texts[index - 1] = textarea.value;
            textarea.value = '';
        }
        //----------

    }
    if(e.target.tagName == 'SPAN'){
        let index = e.target.parentElement.getAttribute('data-key');
        e.target.parentElement.remove();
        message.innerHTML = 'Заметка удалена';
        

        //Проблема с очисткой массива. Если очистить таким образом то начнут появлятся записи с повторяющимися номерами.
        // console.log(index);
        // texts = texts.filter(el => !el[index-1]);

        //При надписи Note removed она не исчезает пока не включить mode.
        
        
    }

    
    if (e.target.dataset.key) {

        highlight(e.target);
        let index = e.target.getAttribute('data-key');
        textarea.value = texts[index - 1];

    }


    if (e.target == changeMod) {

        if (save.dataset.mode == 'create') {
            save.dataset.mode = 'update';
            message.innerHTML = 'Изменение';
            changeMod.textContent = 'Изменение';
        } else {
            save.dataset.mode = 'create';
            message.innerHTML = 'Создание';
            changeMod.textContent = 'Создание';
        }

    }

})

function highlight(li) {
    if (selectedLi) {
        selectedLi.classList.remove('highlight');
    }
    selectedLi = li;
    selectedLi.classList.add('highlight');
}
